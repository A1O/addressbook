# Addressbook

[![Build Status](https://a10.semaphoreci.com/badges/addressbook/branches/main.svg?style=shields)](https://a10.semaphoreci.com/projects/addressbook)

Source code for [this](https://www.digitalocean.com/community/tutorials/how-to-build-and-deploy-a-node-js-application-to-digitalocean-kubernetes-using-semaphore-continuous-integration-and-delivery) tutorial.

# Dev logs

To run the project:

1. clone this git repository
2. copy `env.sample.txt` to `.env`
3. update `.env` with credentials for PostgresDB
4. create Docker containers with Postgres DB and with Addressbook API:

```bash
docker run -d --rm -e POSTGRES_PASSWORD=example -e POSTGRES_USER=addressbook_user -e POSTGRES_DB=addressbook_db --name postgres -p 5432:5432 postgres
docker build -t node1 .
node migrate.js 
docker run -d --rm --name node -p 3000:3000 node1:latest
```

5. run test in `requests.http`

