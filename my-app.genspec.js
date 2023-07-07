// generative test for: my-app

const assert = require('assert');
require('mocha-testcheck').install();

const { add } = require('./my-app.js');

describe('my-app', () => {
    describe('add', () => {
        check.it('is associative', gen.int, gen.int, gen.int, (a, b,  c) => {
            // NOTE: Bonus - Add generative testing
            // Followed step (8) in tutorial.
            // a + (b + c) = (a + b) + c
            const lhsOfEquation = add(a, add(b, c));
            const rhsOfEquation = add(add(a, b), c);
            assert.equal(lhsOfEquation, rhsOfEquation);
        });

        check.it('is commutative', gen.int, gen.int, (a, b) => {
            // NOTE: Bonus - Add generative testing
            // Followed step (8) in tutorial.
            // a + b = b + a
            const lhsOfEquation = add(a, b);
            const rhsOfEquation = add(b, a);
            assert.equal(lhsOfEquation, rhsOfEquation);
        });
    });
});

