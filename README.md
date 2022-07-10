## Description

Install Microservices [here](https://github.com/AlreadyBored/nodejs-assignments/blob/main/assignments/graphql-service/assignment.md)

Create file in microservices folder **docker-compose.yml**

With content

```bash
version: '3.7'
services:
  mongodb:
    image: mongo:4.0-xenial
    ports:
      - 27017:27017
```

Start Docker with command **docker-compose up**

Start Microservices with command **npm run run:all**

## Installation

```bash
git clone https://github.com/shiroe66/graphql-service.git graphql-service
cd graphql-service
git checkout develop
npm install
```

Rename file **.env.example** to **.env**

## Running the app

```bash
# Server starting at PORT in .env file
# GraphQL link: localhost:3000/graphql

# development
npm run start

# watch mode
npm run start:dev

# production mode
npm run start:prod
```

## Usage

After login add this in HTTP headers

```bash
{
  "Authorization": "Bearer addHereYourJWT"
}
```
