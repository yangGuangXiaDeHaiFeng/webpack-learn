/**
 * @author jiaowang
 * @version 1.0.0
 * @since 2020/09
 * 同步钩子SyncBailHook
 * 1、从上到下顺序执行，遇到返回值不是undefined的注册函数时停止执行
 *    ===》返回值若不是undefined，则后续的注册函数不再执行
 * 2、使用 tap 注册回调，再调用 call 来触发
 */
const{SyncBailHook}=require('tapable');
const hook=new SyncBailHook(['name']);
hook.tap('hello',(name)=>{
    console.log(`${name}----------:无返回值，即默认为undefined，所以继续执行`);

});
hook.tap('欢迎',(name)=>{
    console.log(`${name}----------：返回值是undefined，所以，继续执行`);
    return undefined;
});
hook.tap('欢迎',(name)=>{
    console.log(`${name}----------：返回指不是undefined`);
    return name;
});

hook.tap('很开心',(name)=>{
    console.log(`${name}----------：无返回值，但是之前的返回值不是undefined，所以此次输出不执行`);
});
module.exports=hook;

