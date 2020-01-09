const axios = require('axios');

const apiImg = 'https://scontent.cdninstagram.com/v/t51.2885-15/e35/c234.0.612.612a/s150x150/75426202_754058671739168_1164043092661001869_n.jpg?_nc_ht=scontent.cdninstagram.com&_nc_ohc=DgUsJ50AH64AX_TMXsX&oh=540bc7c9dfe3d6fb5f556818304370cc&oe=5EAAED03';
const webImg = 'https://instagram.fhfa2-2.fna.fbcdn.net/v/t51.2885-15/e35/c234.0.612.612a/75426202_754058671739168_1164043092661001869_n.jpg?_nc_ht=instagram.fhfa2-2.fna.fbcdn.net&_nc_cat=108&_nc_ohc=DgUsJ50AH64AX_TMXsX&oh=1fa4649b969a4f85ddd883a72b37d7a2&oe=5E8F9884';

(async function () {
  const [res1, res2] = await Promise.all([
    axios.post('http://localhost:5000/hash', { url: apiImg }),
    axios.post('http://localhost:5000/hash', { url: webImg }),
  ]);

  console.log(res1.data);
  console.log(res2.data);

  const res = await axios.post('http://localhost:5000/diff', {
    origin: res1.data.pHash,
    candidates: [res2.data.pHash]
  });

  console.log(res.data);
})();

