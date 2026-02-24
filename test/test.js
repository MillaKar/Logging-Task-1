// Node.js built-in assertion library
// Used to verify expected test outcomes
const assert = require('assert');

// Import the logger instance to be tested
const logger = require('../src/logger');

describe('Logger functionality', () => {

    // Tests that logger module exports a valid object instance.
    it('should export a logger object', () => {
        assert.ok(logger);
    });

    // Checks that calling logger.info() does not throw runtime errors.
    it('should log info message without throwing error', () => {
        assert.doesNotThrow(() => {
            logger.info('Test info message');
        });
    });

    // Verify that warning level logging works without crashing the application.
    it('should log warning message without throwing error', () => {
        assert.doesNotThrow(() => {
            logger.warn('Test warn message');
        });
    });

    // Verify that error level logging executes successfully without exceptions.
    it('should log error message without throwing error', () => {
        assert.doesNotThrow(() => {
            logger.error('Test error message');
        });
    });

});