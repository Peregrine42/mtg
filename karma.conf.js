// Karma configuration
// Generated on Sat Feb 13 2016 19:22:11 GMT+0000 (GMT)

module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine'],
    files: [
      'src/**/*.js',
      'spec/**/*_spec.js'
    ],
    exclude: [
      '**/*.swp'
    ],
    preprocessors: {
    },
    reporters: ['progress'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: false,
    browsers: ['PhantomJS'],
    singleRun: true,
    concurrency: Infinity
  })
}
