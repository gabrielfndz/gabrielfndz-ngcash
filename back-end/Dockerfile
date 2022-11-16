FROM node:16.18

WORKDIR /back-end
 
COPY package* ./

RUN npm install

COPY . .

CMD [ "npm", "run", "dev" ] 