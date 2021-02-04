/**
 * @author jiaowang
 * @version 1.0.0
 * @since 2020/09
 * SyncHook
 */
const {SyncHook}=require('tapable');
const nameHook=new SyncHook('name');

nameHook.tap('hello',(name)=>{
console.log(`hello ${name}`);
});

nameHook.tap('hello again' ,(name)=>{
    console.log(`hello ${name},again`);
});

nameHook.call('小小')
