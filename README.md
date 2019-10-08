# DMI Take Home

This app pings an api to retrieve strings, and provides the ability to prepend a string to the list of strings
with a form

## Tech/framework used

<b>Built with</b>
- React Boilerplate
- Node
- Express
- React
- React Router
- Redux
- Redux Saga
- Reselect
- Styled Components

## Installation

To start:

Install packages:
```
npm install
```

Start server:
```
npm start
```

<!-- Run tests:
```
npm test
``` -->

## API Reference

**GET /api/strings**
Gets all the strings

Output: `{ strings: [ string1, ... ] }`

**POST /api/strings**
Prepends a new string to the existing strings array

Output: `{ strings: [ string1, ..., newString ] }`