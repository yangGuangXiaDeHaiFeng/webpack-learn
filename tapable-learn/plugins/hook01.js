/**
 * @author jiaowang
 * @version 1.0.0
 * @since 2020/09
 * 同步钩子SyncHook
 * 1、从上到下顺序执行
 * 2、通过 SyncHook 创建同步钩子，使用 tap 注册回调，再调用 call 来触发
 */

const { SyncHook } = require('tapable');
const hook = new SyncHook(['name']);
hook.tap('hello', (name) => {
    console.log(`${name}--------------:hello`);
    return false;
});
hook.tap('hello again', (name) => {
    console.log(`${name}--------------: 你好呀`);
    return true;
});
hook.tap('hello again', (name) => {
    console.log(`${name}----------:this is another`);
    return undefined;
});

module.exports=hook;
