// Import logger
const { log } = require('winston');
const logger = require('./logger');

// Logging syntax, info, warn, error, generic method
logger.log('info', 'This is an informational message.');
logger.log('warn', 'This is a warning message.');
logger.log('error', 'This is a error message.');

//Shortcut method to write the same as above
logger.info('This is another informational message.');
logger.info('This is another warning message.');
logger.info('This is another error message.');
