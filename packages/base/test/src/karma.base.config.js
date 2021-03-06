const webpackConfig = require('@ovh-ux/ui-kit.config/src/webpack.dev.config');

module.exports = {
  basePath: '../',
  browsers: ['PhantomJS'],
  frameworks: ['jasmine'],
  client: {
    chai: {
      includeStack: true,
    },
  },
  files: [
    require.resolve('angular'),
    require.resolve('angular-mocks'),
    require.resolve('angular-aria'),
    require.resolve('angular-sanitize'),
    require.resolve('./test-utils'),
  ],
  preprocessors: {
    [require.resolve('angular')]: ['webpack', 'sourcemap'],
    [require.resolve('angular-mocks')]: ['webpack', 'sourcemap'],
    [require.resolve('angular-aria')]: ['webpack', 'sourcemap'],
    [require.resolve('angular-sanitize')]: ['webpack', 'sourcemap'],
    [require.resolve('./test-utils')]: ['webpack', 'sourcemap'],
  },
  webpack: webpackConfig,
  webpackMiddleware: {
    noInfo: true,
    stats: {
      colors: true,
    },
  },
  coverageReporter: {
    dir: 'coverage/',
    reporters: [
      { type: 'text' },
      { type: 'lcov', subdir: 'report-lcov' },
      { type: 'html', subdir: 'report-html' },
    ],
    check: {
      global: {
        statements: 70,
        lines: 70,
        functions: 70,
      },
    },
  },
};
