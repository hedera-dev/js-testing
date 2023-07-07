# Javascript Testing

Quick introduction on writing tests in Javascript

## Usage

Use `git` to clone this repo, then install dependencies using `npm`.

```shell
git clone git@github.com:hedera-dev/js-testing.git
cd js-testing
npm install

```

## Technologies

You will need NodeJs and npm in order to run this project.

This project was developed in Javascript,
and makes use of Mocha as a test runner.
For the bonus step, a Mocha plugin from TestCheck.js is used as well.

## Configuration

None.

## Contributing

How to contribute to this project:

- Create a fork of this repo on github
- Clone that forked copy using github
- Make your changes on a new branch
- Commit those changes, and push them against a branch in *your forked copy* of the git repo
- Submit a PR against the `completed` branch of *this copy* of the git repo

This will modify the *final state* of the repo,
in other words, what someone should obtain *after*
they have followed along with all of the steps in the tutorial.

If you would like to modify the *initial state* of the repo as well,
perform the same steps as above,
but this time submit the PR against the `main` branch of *this copy* of the git repo.
This is what someone should obtain *before*
they follow along the first step in the tutorial.

## Tutorial

This repo is intended to be used alongside the tutorial:
[Javascript Testing](https://docs.hedera.com/tutorials/more-tutorials/javascript-testing)

To follow along, start with the `main` branch,
which is the default branch of this repo.
This gives you the initial state from which you can follow along
with the steps as described in the tutorial.

```shell
git clone git@github.com:hedera-dev/js-testing.git
```

To skip ahead to the final state, use the `completed` branch.
This gives you the final state with which you can compare your implementation
to the completed steps of the tutorial.

```shell
git fetch origin completed:completed
git checkout completed
```

To see the full set of differences between
the initial and final states of the repo,
you can use `diff`.

```shell
git diff main..completed
```

Note that the branch names are delimited by `..`, and not by `...`,
as the latter finds the diff with the latest common ancestor commit,
which is not what we want in this case.

## Licence

MIT
