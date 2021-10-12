class Models {
    constructor(){
        this.collection = this.init();
    }

    init(){
        return {
            User: require('./userSchema')
        }
    }
}
module.exports = new Models().collection;