// For authoring Nightwatch tests, see
// http://nightwatchjs.org/guide#usage

module.exports = {
  'default e2e tests': function (browser) {
    // automatically uses dev Server port from /config.index.js
    // default: http://localhost:8080
    // see nightwatch.conf.js
    const devServer = browser.globals.devServerURL

    browser
      .url(devServer)
      .waitForElementVisible('#app', 5000)
      .assert.elementPresent('#h1')
      .assert.containsText('#h1', 'aaa')
      .assert.elementCount('h2', 2)
      .waitForElementVisible('.hello ul',5000)
      .assert.elementCount('li',3)
      .end()
  }
}
