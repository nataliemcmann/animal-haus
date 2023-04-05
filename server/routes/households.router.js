const express = require('express');
const {
    rejectUnauthenticated,
  } = require('../modules/authentication-middleware');
  const encryptLib = require('../modules/encryption');
const pool = require('../modules/pool');

const router = express.Router();
