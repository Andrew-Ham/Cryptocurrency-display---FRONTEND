# Introduction

This project is a web application that allows user to search for a cryptocurrency which then displays relevant data on it (real time data). 
The API used was the coingecko API which can be found on their website (coingecko api).

## :computer: Tech 
- Developed using React and Typescript. 
- Used Material-UI (MUI) to style and apply theme.
- Used Axios to fetch data from https://www.coingecko.com/en/api

### Features
- Search filter to filter through cryptocurrency and display correct one to user as expected
- Responsive page (while user searches it filters at the same time showing their search is working)
- Progressive Web App (PWA) functionality w/ clear use of the service worker - Implemented caching strategy so that website can still function offline 
- Usage of websocket to show real time bitcoin price (price updates without refreshing page!)
- Fluid animation (implemented using trading view widget!)
- UI Scalability with window size (media query breakpoints!)
- Intro to storybook (interacting with headers!)

## Set up
- Clone repo, npm start

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

