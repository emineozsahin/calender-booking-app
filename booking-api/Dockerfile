FROM node:lts-alpine AS build

WORKDIR /usr/src/app

COPY package.json yarn.lock lerna.json ./

# Copy project and its dependencies

COPY apps/booking-api ./apps/booking-api

RUN yarn install

# Build project and its dependencies
RUN yarn workspace @khaled/booking-api build

# FROM 512653827948.dkr.ecr.eu-central-1.amazonaws.com/node:${SERVICE_ENV} AS production
FROM node:lts-alpine AS run

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

COPY package.json yarn.lock lerna.json ./

# Copy over built files from previous docker image/step
COPY --from=build /usr/src/app/apps/booking-api/package.json /usr/src/app/apps/booking-api/package.json
COPY --from=build /usr/src/app/apps/booking-api/dist /usr/src/app/apps/booking-api/dist

WORKDIR /usr/src/app/apps/booking-api

RUN yarn install --non-interactive --production

EXPOSE 8000

CMD ["node", "dist/src/main"]