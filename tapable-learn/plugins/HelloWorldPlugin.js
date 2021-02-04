/**
 * @author jiaowang
 * @version 1.0.0
 * @since 2020/09
 */
const hook01=require('./hook01');
const hook02=require('./hook02');
const hook03=require('./hook03');
const hook04=require('./hook04');
const hook05=require('./hook05');
const pluginName='HelloWorldPlugin';
class HelloWorldPlugin{
    constructor(options) {
    }
    apply(compiler){
        hook01.call('SyncHook');
        hook02.call('SyncBailHook');
        hook03.call();
        hook03.call('SyncWaterfallHook',23);
        // hook04.call();
        hook04.call('SyncLoopHook');
        // hook05.callAsync('AsyncSeriesHook', () => {
        //     console.log('done');
        //     console.timeEnd('cost');
        // });

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

module.exports=HelloWorldPlugin;
