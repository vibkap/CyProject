const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "8asapr",
  env: {
    url: 'https://rahulshettyacademy.com'
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
