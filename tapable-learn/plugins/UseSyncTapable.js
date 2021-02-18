/**
 * @author jiaowang
 * @version 1.0.0
 * @since 2020/09
 * 同步钩子
 */
const hook01=require('./hook01');
const hook02=require('./hook02');
const hook03=require('./hook03');
const hook04=require('./hook04');
const pluginName='HelloWorldPlugin';
class UseSyncTapable{
    constructor(options) {
    }
    apply(compiler){
        hook01.call('SyncHook');
        hook02.call('SyncBailHook');
        hook03.call();
        hook03.call('SyncWaterfallHook',23);
        // hook04.call();
        hook04.call('SyncLoopHook');

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

module.exports=UseSyncTapable;
