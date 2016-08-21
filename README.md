# testing-javascript-testing-frameworks

Everyone has an opinion about what the best testing framework for Javascript is; so, I decided to compare several of the ones current being developed.

I made a simple module, *Math.js*, and I wrote tests for it in the following testing frameworks.

1. [Ava](https://github.com/avajs/ava)
2. [Jasmine](http://jasmine.github.io/)
3. [Jest](https://facebook.github.io/jest/)
4. [Mocha](https://mochajs.org/)
5. [Tape](https://github.com/substack/tape)

I had used Mocha and Jasmine extensively before. Jest, created by Facebook, is a wrapper around Jasmine, with auto-mocking, to make testing React easier. Tape, and now Ava, although they are new to me, take a somewhat more traditional approach to testing; they remind me of testing in Perl and Ruby.

## Getting Started

I originally was going to make separate repositories for each test framework, but then decided that it would be easier to compare and experiment if I could modifying the System Under Test and all the different tests in one place.

After you clone the repo, you can install all the tests frameworks with one command:

        npm install

To run all the tests from each framework, one after the other, simply use the npm script

        npm test

To run just one framework's tests, run the individual commands that I created:

        npm run test:ava
        npm run test:jasmine
        npm run test:jest
        npm run test:mocha
        npm run test:tape

Note: I have my machine set up to add my current `node_modules` folder to find node executables, like all of these frameworks' CLI runner. If you don't have a setup like that, you may have to install each of their CLIs globally in order to run them. For example,

        npm install --global mocha

## Default Test Locations

Each of these testing frameworks has a default location where they look for test files. Because I'm mixing several frameworks in one project, I've had to change the location of tests for some of the test frameworks.

| Framework | Default Location |   | Location in this Repo |
| --------- | ---------------- | - | --------------------- |
| Ava | `/test` | --> | `/test` |
| Jasmine | `/spec` | --> | `/spec` |
| Jest | `/__tests__` | --> | `/__tests__` |
| Mocha | `/test` | --> | `/mocha-spec` |
| Tape | `/tests` | --> | `/tape-test` |

Personally, I like to place my test files in the same folder as their respective modules, but I felt that might have been confusing in this context, so I stuck with the ""tests-in-a-separate-directory"" paradigm.

## Advanced Features

I didn't use many of the advanced features of any of the test frameworks. I did use some ES6/ES2015 syntax in the Ava tests, because Ava transpiles ES6 in your tests files for you (but it does not transpile your files under test). I also used `describe` blocks in Jasmine, Jest, and Mocha.

Each framework has many more options and capabilities than you see here. In particular, most of these frameworks now support asynchronous tests in some way.

This repo is merely meant to "get you started" with testing. Pick a couple of frameworks that appeal to you, and dig into them to determine the one that works best for you.
