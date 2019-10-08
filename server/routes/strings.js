const jsonschema = require('jsonschema');
const express = require('express');
const strings = require('../data/strings');
const stringSchema = require('../schemas/stringSchema.json');

const router = new express.Router();

/**
 * GET /strings: gets all strings
 *
 * Output: { strings: [ string1, ... ] }
 */
router.get('/', (req, res, next) => {
  let response = null;
  try {
    response = res.json({ strings });
  } catch (err) {
    next(err);
  }
  return response;
});

/**
 * POST /strings: adds a new string to the beginning of the
 * current array of strings
 *
 * Input: { string }
 * Output:  { strings: [ newString, string1, ... ] }
 */
router.post('/', (req, res, next) => {
  let response = null;
  try {
    // check if the data we received was valid using a JSON Schema
    const result = jsonschema.validate(req.body, stringSchema);

    if (!result.valid) {
      const listOfErrors = result.errors.map(error => error.stack);
      throw new Error(listOfErrors);
    }

    // add the string to the beginning
    const { string } = req.body;

    strings.unshift(string);

    response = res.json({ strings });
  } catch (err) {
    next(err);
  }
  return response;
});

module.exports = router;
