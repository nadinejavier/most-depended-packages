# Node.js Homework

## Project

1. Get the 10 [most depended on packages](https://www.npmjs.com/browse/depended) from npm.
2. For each package, download the latest tarball from the npm registry.
3. Extract the tarball into `./packages/${pkg.name}`, e.g. `./packages/lodash`.

## Setup

Everything you'll need to get started is already configured for you. Please make sure all syntax is supported by Node v8.

We've created an `index.js` file as your entry point. Create as many additional files as you'd like.

## Testing

We've created a failing `npm test` command for you. You can add additional tests if you'd like and even bring in a tool other than [`tape`](https://github.com/substack/tape) as long as these initial tests remain unchanged and `npm test` sets correct exit codes.

Passing tests don't guarantee that your solution is perfect but a failing test definitely indicates a problem.

## Bonus

Set the `COUNT` environment variable when running your tests to download more than the top 10.
