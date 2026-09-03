# Docker Full-Stack Application

A small full-stack web application built as part of my DevOps learning, focusing on containerisation and multi-container application architecture with Docker Compose.

## Overview

This project consists of three main services:

* **Frontend** — React application providing the user interface
* **Backend** — Node.js/Express application providing the API
* **Database** — MongoDB for persistent data storage

Docker Compose is used to run and connect all three services in a consistent development environment.

## Architecture

```text
                    ┌─────────────────┐
                    │     Browser     │
                    └────────┬────────┘
                             │
                             ▼
                    ┌─────────────────┐
                    │    React        │
                    │    Frontend     │
                    └────────┬────────┘
                             │
                             ▼
                    ┌─────────────────┐
                    │ Node.js/Express │
                    │     Backend     │
                    └────────┬────────┘
                             │
                             ▼
                    ┌─────────────────┐
                    │     MongoDB     │
                    │    Database     │
                    └─────────────────┘
```

Each component runs in its own Docker container and Docker Compose provides the networking required for the services to communicate.

## Technologies

* JavaScript
* React
* Node.js
* Express
* MongoDB
* Docker
* Docker Compose

## Docker Concepts Demonstrated

This project was built to practise several core Docker and DevOps concepts:

* Writing Dockerfiles
* Building Docker images
* Running containers
* Multi-container applications
* Docker Compose
* Container networking
* Environment variables
* Persistent Docker volumes
* Separating application services
* Reproducible development environments

MongoDB uses a named Docker volume so that database data persists when the database container is stopped or recreated.

## Running the Application

Clone the repository and navigate into the project directory:

```bash
git clone https://github.com/ArchieStripling1/docker-fullstack-app.git
cd docker-fullstack-app
```

Start the application using Docker Compose:

```bash
docker compose up --build
```

The `--build` flag ensures that the Docker images are rebuilt from the Dockerfiles before the containers are started.

To stop the application:

```bash
docker compose down
```

## Project Structure

```text
docker-fullstack-app/
├── backend/
│   ├── Dockerfile
│   ├── index.js
│   └── package.json
│
├── frontend/
│   ├── Dockerfile
│   ├── package.json
│   ├── public/
│   └── src/
│
├── .gitignore
├── .env
└── docker-compose.yml
```

## Purpose

This project was created as a practical exercise while learning Docker and DevOps fundamentals.

The main goal was to understand how a multi-service application can be packaged and run consistently using containers, rather than relying on each service being installed and configured directly on the host machine.

It also builds on my existing experience with Git, GitHub, Python development and automated testing, while giving me practical experience with containerisation and service orchestration.
