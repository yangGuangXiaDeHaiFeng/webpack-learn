const path=require("path");
const HelloWorldPlugin=require('./plugins/HelloWorldPlugin');

module.exports={
    entry:'./src/index.js',
    output:{
        path:path.resolve(__dirname,'build'),
        filename:'[name].js'
    },
    plugins:[
new HelloWorldPlugin('test')
    ]

}
