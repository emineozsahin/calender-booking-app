# calendar-booking-app
An application that allows multiple entities sharing the same building to split and schedule the available meeting rooms in the building in between each other

## Pre-Requisites
1. Make sure you have NodeJS installed
2. install yarn `npm i -g yarn`
3. (Optional) update `booking-api/.env` with a `MONGODB_URL` of your choice to run on a separate database (by default it uses a dev one hosted in the cloud)

## Main Technologies used
1. [NestJS](https://nestjs.com/)
2. [ReactJS](https://reactjs.org/)
3. [MongoDB Atlas](https://cloud.mongodb.com/)
4. [Lerna](https://lerna.js.org/)
5. [Yarn Workspaces](https://classic.yarnpkg.com/lang/en/docs/workspaces/)
6. [GraphQL](https://graphql.org/)
7. [TypeScript](https://www.typescriptlang.org/)
8. [Auth0](https://auth0.com/)

## Versioning & Publishing
1. You can generate a release and a new version simply by running `lerna version` which would generate CHANGELOG.md files with the changes and bump package versions according to semver.io

## Running the app locally
1. Run `yarn install` to install all dependencies in the monorepo
2. Run `yarn watch` to start both the frontend and the backend together in parallel in the same process

## Building the app
1. To build the backend api simply build the docker iamge from `backend-api` directory using `docker build . -t booking-api`

## Deployment
1. Automated Deployment is setup on the master branch for both the frontend and the backend via Netlify and Heroku respectively


# TODO
1. Validation
2. Permissions
3. User Management & Authentication
4. Error handling
5. Add Tests
6. Styling & Design
7. Implement remaining CRUD operations 
8. Graphql field documentation
9. Implement Caching
10. use graphql-codegen to sync graphql schemas between frontend and backend automatically
