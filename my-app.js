// system under test: my-app

function add(x, y) {
    // NOTE: Implement the system under test
    // Followed step (2) in tutorial.
    // return x + y;

    // NOTE: Switch to a true negative scenario
    // Followed step (4) in tutorial.
    // Impl wrong, spec correct
    // return x + y + 1;

    // NOTE: Switch to a false negative scenario
    // Followed step (5) in tutorial.
    // Impl correct, spec wrong
    // return x + y;

    // NOTE: Switch to a false positive scenario
    // Followed step (6) in tutorial.
    // Impl wrong, spec wrong
    // return x + y + 1;

    // NOTE: Switch back to a true positive scenario
    // Followed step (7) in tutorial.
    // Impl correct, spec correct
    return x + y;
}

module.exports = {
    add,
};
