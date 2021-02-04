const { SyncHook } = require('tapable');

class Dog {
    constructor(){
        this.hooks={
            bark:new SyncHook()
        }
    }
}
