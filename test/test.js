var assert = require('assert');

const number = -1;

describe('1 & ' + number, function() {
    it('should equal each other', function() {
        assert.equal(1, number);
    });
});
