# snake

## Developer Setup

No global packages are required, only local:

```
npm install
```

A web server is required, able to serve the `public` directory.  It doesn't have to be the root of a `hostname:port`.

## Developer Commands

To lint the source and tests using `eslint`:

```
npm run lint
```

To lint the source and tests, then run the tests using `mocha`:

```
npm run test
```

To lint and test the code, then build the application into the `dist/` directory:

```
npm run build
```
