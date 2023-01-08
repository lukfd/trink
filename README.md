# Trink App

Trink App is a mobile, web application for a drinking game.

# Backend

**Stack:** ExpressJs and Sqlite

Will connect to a database containing questions.
Randomize order of questions based on:

### End Points

**getQuestions**(typeOfGame: 'classic' or 'truthOrDare',
    modality: 'easy', 'flirt' or 'hot',
    players: 'playerName:male') returns an Array of objects
addQuestion()
deleteQuestion()
changeQuestion()

# Frontend
First should prompt the user a message.

Each player will add their name and gender.

Users can pick two type of game: either the Classic or Truth or Dare.

Each game will generate a set of questions based on the type of game and based on the modality (Easy, Flirt or Hot).

The game will start.

Loop back

**Stack:** [reactNative](https://reactnative.dev/)

# Resources
- [SQL LITE](https://www.sqlite.org/index.html)
- [NPM SQLITE 3](https://www.npmjs.com/package/sqlite3)
- [Express.js](https://expressjs.com/en/starter/generator.html)
- [React Native](https://reactnative.dev/)
