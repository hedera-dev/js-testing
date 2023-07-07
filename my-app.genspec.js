// generative test for: my-app

const assert = require('assert');
require('mocha-testcheck').install();

const { add } = require('./my-app.js');

describe('my-app', () => {
    describe('add', () => {
        check.it('is associative', gen.int, gen.int, gen.int, (a, b,  c) => {
            // TODO: Bonus - Add generative testing
            // Follow step (8) in tutorial.
            // a + (b + c) = (a + b) + c
            const lhsOfEquation = ;
            const rhsOfEquation = ;
            assert.equal(lhsOfEquation, rhsOfEquation);
        });

        check.it('is commutative', gen.int, gen.int, (a, b) => {
            // TODO: Bonus - Add generative testing
            // Follow step (8) in tutorial.
            // a + b = b + a
            const lhsOfEquation = ;
            const rhsOfEquation = ;
            assert.equal(lhsOfEquation, rhsOfEquation);
        });
    });
});

