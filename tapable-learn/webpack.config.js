const path=require("path");
const UseSyncTapable=require('./plugins/UseSyncTapable');
// const UseAsyncTapable=require('./plugins/UseAsyncTapable');

module.exports={
    entry:'./src/index.js',
    output:{
        path:path.resolve(__dirname,'build'),
        filename:'[name].js'
    },
    plugins:[
new UseSyncTapable('test')
    ]

}
