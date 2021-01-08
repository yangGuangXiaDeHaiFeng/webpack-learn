/**
 * 在webpack打包结束后把一个readme.txt放到dist目录
 */
class ReadmeWebpackPlugin {
    constructor(options) {
        console.log(options);
    }
    apply(compiler){
        compiler.hooks.emit.tapAsync('ReadmeWebpackPlugin',(compilation,callback)=>{
       console.log(compilation.assets);
            compilation.assets['readme.txt']={
                source:function () {
                    return 'readme'
                },
                size:function () {
                    return 6
                }
            }
            callback();
        })

    }
}
module.exports=ReadmeWebpackPlugin;
