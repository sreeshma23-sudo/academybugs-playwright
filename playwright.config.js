const { expect, chromium, devices, defineConfig } = require("@playwright/test");
require('dotenv').config();
const config=defineConfig({
  testDir:'./tests',

  fullyParallel:true,
  
  retries:1,
  workers:3,
  
  timeout:40*1000,
  expect:{
    timeout:5000,
  },
  reporter:'html',
  use:{
     baseURL:process.env.BASE_URL,
    browserName:'webkit',
    headless:false,
    screenshot:'on',
     trace:'on',
  },
  projects:[
  {
    name:'chrome',
    use:{
      browserName:'chromium',
      headless:false,
      ignoreHttpsErrors:true,
      permissions:['geolocation'],
      screenshot:'on',
      trace:'on',
      video:'on',
      launchOptions:{
    slowMo:1000
  },
    },

    

   }]
})
module.exports=config;