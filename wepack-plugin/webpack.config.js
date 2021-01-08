const path=require("path");
const ReadmeWebpackPlugin= require("./plugins/readme-webpack-plugin");
const FileListWebpackPlugin=require("./plugins/filelist-webpack-plugin");
module.exports={
    entry:'./src/index.js',
    output:{
        path:path.resolve(__dirname,'build'),
        filename:'[name].js'
    },
    plugins:[
        new ReadmeWebpackPlugin({
            name:'测试'
        }),new FileListWebpackPlugin({
            name:'测试'
        })
    ]

}
