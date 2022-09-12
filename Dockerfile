# flyctl init
# flyctl launch (load fly.toml or create new)
# flyctl destroy [appname]
# flyctl logs [appname]
FROM node:18 as build-image
RUN apt-get update && apt-get install -y openssl
WORKDIR /usr/src/app
COPY [".env","./"]
COPY package*.json ./
COPY tsconfig*.json ./
COPY ./prisma ./prisma
COPY ./src ./src
RUN npm i
RUN npx prisma db pull
RUN npx prisma generate
RUN npm run build

EXPOSE 3001
CMD [ "node", "dist/src/main" ]

#FROM node:18
#WORKDIR /usr/src/app
#COPY package*.json ./
#COPY --from=build-image ./usr/src/app/prisma ./prisma
#COPY --from=build-image ./usr/src/app/node_modules/ ./node_modules/
#COPY --from=build-image ./usr/src/app/dist ./dist
#COPY . .
#RUN npm ci --production
#RUN npx prisma db pull
#RUN npx prisma generate
#EXPOSE 8080
#CMD [ "node", "dist/src/main" ]