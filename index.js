const fs = require('fs');
const cors = require('cors');
const axios = require('axios');
const express = require('express');
const { promisify } = require('util');
const { isURL } = require('validator');
const bodyParser = require('body-parser');
const child_process = require('child_process');

const unlinkPromised = promisify(fs.unlink);
const execPromised = promisify(child_process.exec);

const PORT = process.env.PORT || 5000;

const app = express();

app.use(cors());
app.use(bodyParser.json());

const IMAGES_FOLDER = './downloads';

const downloadImage = (url) => {
  const filename = `${IMAGES_FOLDER}/${Math.random().toString()}.jpeg`
  return axios({
    url,
    responseType: 'stream',
  }).then(
    response =>
      new Promise((resolve, reject) => {
        response.data
          .pipe(fs.createWriteStream(filename))
          .on('finish', () => resolve(filename))
          .on('error', e => reject(e));
      }),
  )
};

const removeImage = (filename) => unlinkPromised(filename);

const calculateImageHash = async (filename) => {
  const {stdout} = await execPromised(`python ./hash.py ${filename}`);
  return stdout;
};

app.post('/hash', async (req, res) => {
  const url = req.body.url;
  if (!isURL(url)) {
    res.status(500).send('Invalid URL');
    res.end();
  }
  const filename = await downloadImage(url);
  const hash = await calculateImageHash(filename);
  await removeImage(filename);
  res.send(hash);
  res.end();
});

app.post('/diff');

app.listen(PORT, () => console.log(`Image hash is running on port ${PORT}`));