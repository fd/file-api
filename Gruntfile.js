module.exports = function(grunt) {

  var browsers = [{
    browserName: "firefox",
    version: "19",
    platform: "XP"

    // Chrome
  }, {
    browserName: "chrome",
    platform: "Linux",
    version:  "30"
  }, {
    browserName: "chrome",
    platform: "Linux",
    version:  "29"
  }, {
    browserName: "chrome",
    platform: "Windows XP",
    version:  "31"
  }, {
    browserName: "chrome",
    platform: "Windows 7",
    version:  "31"
  }, {
    browserName: "chrome",
    platform: "Windows 8",
    version:  "31"
  }, {
    browserName: "chrome",
    platform: "Windows 8.1",
    version:  "31"
  }, {
    browserName: "chrome",
    platform: "OS X 10.6",
    version:  "31"
  }, {
    browserName: "chrome",
    platform: "OS X 10.8",
    version:  "31"
  }, {
    browserName: "chrome",
    platform: "OS X 10.9",
    version:  "31"

    // IE
  }, {
    browserName: 'internet explorer',
    platform : 'Windows XP',
    version: '6'
  }, {
    browserName: 'internet explorer',
    platform : 'Windows XP',
    version: '7'
  }, {
    browserName: 'internet explorer',
    platform : 'Windows XP',
    version: '8'
  }, {
    browserName: 'internet explorer',
    platform : 'Windows 7',
    version: '8'
  }, {
    browserName: 'internet explorer',
    platform : 'Windows 7',
    version: '9'
  }, {
    browserName: 'internet explorer',
    platform : 'Windows 7',
    version: '10'
  }, {
    browserName: 'internet explorer',
    platform : 'Windows 8',
    version: '10'
  }, {
    browserName: 'internet explorer',
    platform : 'Windows 8.1',
    version: '11'

  }];

  grunt.initConfig({
    connect: {
      server: {
        options: {
          base: "",
          port: 9999
        }
      }
    },
    'saucelabs-qunit': {
      all: {
        options: {
          urls: ["http://127.0.0.1:9999/index.html"],
          tunnelTimeout: 5,
          build: process.env.TRAVIS_JOB_ID,
          concurrency: 3,
          browsers: browsers,
          testname: "qunit tests",
          tags: ["master"]
        }
      }
    },
    watch: {}
  });

  // Loading dependencies
  for (var key in grunt.file.readJSON("package.json").devDependencies) {
      if (key !== "grunt" && key.indexOf("grunt") === 0) grunt.loadNpmTasks(key);
  }

  grunt.registerTask("dev", ["connect", "watch"]);
  grunt.registerTask("test", ["connect", "saucelabs-qunit"]);
};
