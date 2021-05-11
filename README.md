# Classification Explorer

A tool for browsing statistical classifications, developed for the Implementing ModernStats Standards project.

The classifications are stored as RDF using the XKOS model.

## To build and run

- Install a Git client and [Node.js](https://nodejs.org/)

- Install yarn: `npm install --global yarn`

- Clone the projet and open a command prompt window

- Under `src/js`, create a `credentials.js` file exporting a JavaScript object with the username and password, for example: `export default { username: '*******', password: '*******' }`. A `credentials.js.example` is provided.

- Run `yarn install`

- Run `yarn` and navigate to http://localhost:3000
