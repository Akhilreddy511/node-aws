class Models {
    constructor(){
        this.collection = this.init();
    }

    init(){
        return {
            User: require('./userSchema'),
            Notepad: require('./notepadSchema')
        }
    }
}
module.exports = new Models().collection;