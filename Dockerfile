FROM nikolaik/python-nodejs:latest

# Create app directory
WORKDIR /usr/src/image-hash

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./
COPY requirements.txt ./

RUN pip install -r requirements.txt
RUN npm install

# Bundle app source
COPY . .

EXPOSE 8080
CMD [ "npm", "start" ]