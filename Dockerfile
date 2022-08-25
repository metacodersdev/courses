FROM node:18-alpine as base

WORKDIR /metacoders-courses-service
COPY package*.json ./
EXPOSE 3002

FROM base as dev
ENV NODE_ENV=development
RUN npm ci
COPY . /metacoders-courses-service
CMD ["npm", "dev"]