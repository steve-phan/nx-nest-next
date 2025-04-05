/*
 |--------------------------------------------------------------------------
 | Browser-sync config file
 |--------------------------------------------------------------------------
 |
 | For up-to-date information about the options:
 |   http://www.browsersync.io/docs/options/
 |
 */
module.exports = {
  ui: false,
  port: 3002,
  proxy: {
    target: 'http://localhost:3000',
    ws: true,
    middleware: function (req, res, next) {
      // Proxy API requests to NestJS
      if (req.url.startsWith('/api')) {
        req.url = req.url;
      } else {
        // Proxy all other requests to Next.js
        req.url = req.url;
      }
      next();
    },
  },
  files: [
    'packages/client/src/**/*.{ts,tsx,css,scss,html}',
    'packages/server/src/**/*.{ts,tsx}',
  ],
  ignore: ['node_modules'],
  reloadDelay: 100,
  reloadDebounce: 200,
  reloadThrottle: 200,
  notify: true,
  open: false,
  injectChanges: true,
  watchEvents: ['change', 'add', 'unlink', 'addDir', 'unlinkDir'],
  watchOptions: {
    ignoreInitial: true,
    ignored: 'node_modules',
  },
};
