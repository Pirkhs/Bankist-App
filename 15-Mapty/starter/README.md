## Nathan Briers 'Mapty' Project


## Introduction

Mapty is a small exercise tracker project designed to allow users to do the following things:
- Map is opened up on the user's approximate location using the Geolocation API
- Click on the map to a bring up a form that enables you to add an exercise with some specific fields
    - Type of exercise (currently only running / cycling)
    - Distance (km)
    - Duration (m)
    - Cadence / Elevation Gain (Running / Cycling respectively)
- The created exercises are visible in a list on the left-hand side
- Click on one of the created exercises to be smoothly transitioned over to it's location.
- Disable any of the exercise pop-ups via the 'X' icon
- Exercises are stored in the browser using the local storage API
- ... And more features to come !

## View Online

A link to the hosted version can be found on Netlify at: https://mapty-nathan-briers.netlify.app

## Local Copy

If you wish to clone this project locally:
1. First run the command 'git clone https://github.com/Pirkhs/Complete-JavaScript-Course.git' in your terminal
2. Ensure you are in the correct mapty starter directory 'cd 15-Mapty/starter'
3. Make sure you have all the npm packages installed via the command 'npm install'
4. Running the project is now through the npm custom script 'npm start'
5. Your locally hosted version is available on port 1234

## Additional Info

Currently the application is in it's MVP (minimum viable product) as per Jonas Schmedtmann's Complete JavaScript Course on Udemy, but I intend to add additional features and functionalities in the future.

Again all credit goes to Jonas Schmedtmann for this project.
