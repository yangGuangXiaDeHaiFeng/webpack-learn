/**
 * @author jiaowang
 * @version 1.0.0
 * @since 2020/09
 *
 * 同步钩子SyncWaterfallHook
 * 1、接受至少一个参数；
 * 2、上一个注册的回调返回值会作为下一个注册的回调的参数；
 * 3、使用 tap 注册回调，再调用 call 来触发
 */

const{SyncWaterfallHook}=require('tapable');
//******************************不给任何参数************start
// const hook=new SyncWaterfallHook();
// hook.tap('hello',()=>{
// console.log('没有任何参数，能执行不？');
// });
// 运行结果 Waterfall hooks must have at least one argument
//******************************不给任何参数************end
const hook=new SyncWaterfallHook(['name','age']);
hook.tap('hello',(name,age)=>{
    console.log(`${name}--------------:name-${name},age-${age}`);

});
hook.tap('hello',(name,age)=>{
    console.log(`${name}--------------:name-${name},age-${age}`);
    return 'SyncWaterfallHook 二世';

});
hook.tap('hello',(name,age)=>{
    console.log(`${name}--------------:name-${name},age-${age}`);
    return age;

});

module.exports=hook;

