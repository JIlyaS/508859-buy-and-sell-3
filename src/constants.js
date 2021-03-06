'use strict';

const FILE_NAME = `mocks.json`;
const ExitCode = {
  SUCCESS: 0,
  FAILURE: 1
};
const HttpCode = {
  OK: 200,
  NOT_FOUND: 404,
  INTERNAL_SERVER_ERROR: 500,
  FORBIDDEN: 403,
  UNAUTHORIZED: 401,
};

const DEFAULT_PORT = 8080;

module.exports = {
  FILE_NAME,
  DEFAULT_PORT,
  ExitCode,
  HttpCode
};
