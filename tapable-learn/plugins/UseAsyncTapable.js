/**
 * @author jiaowang
 * @version 1.0.0
 * @since 2020/09
 * 异步钩子
 */
const hook05=require('./hook05');
const hook06=require('./hook06');
const hook07=require('./hook07');
const hook08=require('./hook08');
const hook09=require('./hook09');
const pluginName='HelloWorldPlugin';
class UseAsyncTapable{
    constructor(options) {
    }
    apply(compiler){
        // hook05.callAsync('AsyncSeriesHook', () => {
        //     console.log('done');
        //     console.timeEnd('cost');
        // });
        // hook06.callAsync('AsyncParallelHook',()=>{
        //     console.log('done-AsyncParallelHook');
        //     console.timeEnd('cost02');
        // });
        // hook07.callAsync('AsyncSeriesBailHook',()=>{
        //     console.log('done-AsyncSeriesBailHook');
        // });
        // hook08.callAsync('AsyncParallelBailHook',()=>{
        //     console.log('done-AsyncParallelBailHook');
        // });
        hook09.callAsync('AsyncSeriesWaterfallHook',()=>{
            console.log('done-AsyncSeriesWaterfallHook');
        });
            compiler.hooks.emit.tapAsync(
            pluginName,
            (compilation, callback) => {
                setTimeout( () => {
                    console.log('Done with async work..............................');
                    callback();
                }, 1000);
            }

    );

}
}
module.exports=UseAsyncTapable;
