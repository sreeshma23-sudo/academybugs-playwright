const SignUtils = require("../utils/signUtils");
const  Findbugspage  = require("./findbugspage");

class Pomanager{
    constructor(page){
        this.page=page;
        this.findbugspage =new Findbugspage(page);
        this.signUtils =new SignUtils(page);
    }

    getFindbugspage(){
        return this.findbugspage;
    }
    getSignUtils(){
        return this.signUtils;
    }
}module.exports=Pomanager;