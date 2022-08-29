FROM node:18 as base
RUN apt-get update && apt-get install -y openssl

WORKDIR /metacoders-courses-service
COPY package*.json ./
EXPOSE 3002

FROM base as dev
ENV NODE_ENV=development
RUN npm i
COPY . /metacoders-courses-service
CMD ["npm", "dev"]