const { defineConfig } = require("cypress");

module.exports = defineConfig({
  video:true,
  e2e: {
   
      baseUrl:'https://indiadev.d1lpbgq9h4os2o.amplifyapp.com/login'
  },env:{
    username:'indiadev+msx@aspirevc.com',
    password:'k5V$Hr6LCWWJRYMV'
}
});
