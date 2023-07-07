// test for: my-app

const assert = require('assert');

const { add } = require('./my-app.js');

describe('my-app', () => {
    describe('add', () => {
        it('works with known values', () => {
            // NOTE: Implement the tests
            // Followed step (3) in tutorial.
            const actual = add(1, 2);
            const expected = 3;
            // assert.equal(actual, expected);

            // NOTE: Switch to a true negative scenario
            // Followed step (4) in tutorial.
            // Impl wrong, spec correct
            // assert.equal(actual, expected);

            // NOTE: Switch to a false negative scenario
            // Followed step (5) in tutorial.
            // Impl correct, spec wrong
            // assert.equal(actual, expected + 1);

            // NOTE: Switch to a false positive scenario
            // Followed step (6) in tutorial.
            // Impl wrong, spec wrong
            // assert.equal(actual, expected + 1);

            // NOTE: Switch back to a true positive scenario
            // Followed step (7) in tutorial.
            // Impl correct, spec correct
            assert.equal(actual, expected);
        });

        it('is associative with known values', () => {
            // a + (b + c) = (a + b) + c
            const lhsOfEquation = add(12, add(-13, 14));
            const rhsOfEquation = add(add(12, -13), 14);
            assert.equal(lhsOfEquation, rhsOfEquation);
        });

        it('is commutative with known values', () => {
            // a + b = b + a
            const lhsOfEquation = add(-15, 16)
            const rhsOfEquation = add(16, -15);
            assert.equal(lhsOfEquation, rhsOfEquation);
        });
    });
});
