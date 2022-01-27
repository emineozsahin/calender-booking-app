FROM node:lts-alpine AS build

WORKDIR /usr/src/app

COPY package.json yarn.lock ./

# Copy project and its dependencies

COPY . ./

RUN yarn install

# Build project and its dependencies
RUN yarn build

# FROM 512653827948.dkr.ecr.eu-central-1.amazonaws.com/node:${SERVICE_ENV} AS production
FROM node:lts-alpine AS run

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

COPY package.json yarn.lock ./

# Copy over built files from previous docker image/step
COPY --from=build /usr/src/app/package.json /usr/src/app/package.json
COPY --from=build /usr/src/app/dist /usr/src/app/dist

WORKDIR /usr/src/app/

RUN yarn install --non-interactive --production

EXPOSE 8000

CMD ["node", "dist/main"]