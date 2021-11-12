# Card Deck Generator
This is simple card deck generator based on number of people. The card will be distributed random evenly / all based on user option in UI.

Two framework will be used for this test : 
- Frontend : AngularJS
- Backend : Laravel

**Status: Test Local Only**

# Pre-requisite

- Frontend
1. [Angular CLI](https://github.com/angular/angular-cli) version 13.0.1.
2. NodeJS
3. NPM

- Backend
1. Composer
2. PHP

- Docker install only
1. WSL2 for windows
2. Docker Desktop
3. Docker Compose

## How To Setup Frontend
- cd frontend
- run `npm install`
- run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files

## How To Setup Backend
- cd backend
- run `composer install`
- run `php artisan serve`. The API will run on `http://localhost:8000/api`

## How To Run Docker Container
- run docker desktop which link to WSL2 ubuntu linux
- cd card_deck
- run `docker-compose up -d` or `make init` if using Makefile
- Navigate to `http://localhost` to see the UI
P.S. it takes a while to compile 3 container in docker please wait & have a ☕

