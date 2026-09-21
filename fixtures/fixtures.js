const base=require("@playwright/test");


const Pomanager=require("../Page-Objects/Pomanager");

const test =base.extend({
    pomManager:async({page},use)=>{
const pomManager= new Pomanager(page);
await use (pomManager); 
    }
}) ;
module.exports = { test, expect: base.expect };