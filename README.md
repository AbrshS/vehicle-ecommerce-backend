## Description

  <p align="center">Nobel E-commerce backend, which is built with NestJS. A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>

## Installation

```bash
$ yarn install
```

## Prisma

```bash
 # prisma migration
 $ npx prisma migrate dev --name init

 # show data
 $ npx prisma studio 
```

## Running the app

```bash
# development
$ yarn run start

# watch mode
$ yarn run start:dev

# production mode
$ yarn run start:prod
```

## Test

```bash
# unit tests
$ yarn run test

# e2e tests
$ yarn run test:e2e

# test coverage
$ yarn run test:cov
```