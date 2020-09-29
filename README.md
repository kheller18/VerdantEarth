# Weather Comparitor

[![Netlify Status](https://api.netlify.com/api/v1/badges/552511d9-1464-4cbd-9016-197eda1d0d22/deploy-status)](https://app.netlify.com/sites/laughing-bardeen-92a979/deploys)

![Node.js CI](https://github.com/bartius-nigel/weather-comparitor/workflows/Node.js%20CI/badge.svg)



### Requirements

Node.js 12.x

### Setting up a development environment
```bash
npm install
```
```bash
npm run dev
```

Babel 

#### running the tests and linter locally

check code format:
```bash
npm run lint
```

or prettify code automagically:
```bash
npm run prettify
```

and finally, run the tests:
```bash
npm run build
npm run test
```

#### making a pull request

Link your issues to PRs by including a comment in the PR like so:

closes #<ISSUE_NUMBER>

This will move any issues around on the project board if there is one. 

The PR will need one approval and one succesful test run, otherwise a merge will be impossible.

### Writing tests

If it's possible, write some tests for any svelte components or logic files that you create. The testing framework used is [Jest](https://jestjs.io/en/),
which also provides the assertions. Babel is included so that the tests can be written in ES6 syntax.
The testing engine used for svelte components is [Testing-Library](https://testing-library.com/docs/svelte-testing-library/intro).

### Production mode

To create an optimised version of the app:

```bash
npm run build
```

You can run the newly built app with `npm run start`. This uses [sirv](https://github.com/lukeed/sirv), 
which is included in your package.json's `dependencies` so that the app will work when you deploy to platforms like [Heroku](https://heroku.com).

### Deployment

This application is deployed with Netlify. Everytime a PR is merged into master,
Netlify will detect that change and immidiately start building the app.

The Netlify configuration file is located in the root directory as `netlify.toml`.

Click on the badge to be taken to the Netlify dashboard [![Netlify Status](https://api.netlify.com/api/v1/badges/552511d9-1464-4cbd-9016-197eda1d0d22/deploy-status)](https://app.netlify.com/sites/laughing-bardeen-92a979/deploys)
