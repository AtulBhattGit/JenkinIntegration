const { defineConfig } = require("cypress");

module.exports = defineConfig({
  video:true,
  e2e: {
   baseUrl:'https://my.medstatix.com/login'

  },env:{
      username:'kkozaczka@aspirevc.com',
      password:'48&9Y5Pht1UWgU&E'
  }
});
