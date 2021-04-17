{
    var a = 'a';
    let b = 'b';
}
let b = 'b';
console.log(a);
console.log(b);



function test() {
    var a = 'a'
    for (let index = 0; index < 10; index++) {
        let a = 'c';
        (function(){
            var a = 'd';
        })();
    }
    console.log(a);
}

test();


const foo = 2;


let array = [1, 2, 3];
// 对每个元素添加了回调函数
array.forEach(function(value){
    console.log(value);
});
// array.forEach(element => {
// });
for (const key in array) {
    if (array.hasOwnProperty(key)) {
        const element = array[key];
        console.log('***' + element);
    }
}
for (var index in array) {
    console.log('---' + array[index]);
}

for (const iterator of array) {
    console.log('>>>' + iterator);
}

var obj = {a:1, b:2};
// for (const key in object) {
//     if (object.hasOwnProperty(key)) {
//         const element = object[key];
//     }
// }
for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
        const element = obj[key];
        console.log(element);
    }
}


/**
 * 箭头函数 arrow function
 */

 setTimeout(() => {
     console.log('setTimeout called');
 }, 3000);
 setTimeout(() => console.log('setTimeout called'), 3000);

// let add1 = function (x: any, y: any) {
//     return x + y;
// }
let add = (x, y) => x + y;
console.log('add value is ' + add(1, 2));


/**
 * 变量替换：variable Substitution
 * `  反引号括起来的字符串，在里面使用${变量名称}
 * 应用场景：字符串里的内置变量需要替换
 * 用在动态网页上
 */
let obj1 = {
    name: "suan",
    sayName: function(){
        console.log(this.name);
        console.log(`this is a string = ${this.name}`);
    }
};

obj1.sayName();

const obj2 = {first:'san', last:'zhang', age:8};
const f = obj2.first;
const l = obj2['last'];
console.log(f + l);

/**
 * 异步回调函数的应用 ansychronous callback
 * call back 回调、call you back
 * 通知 notification
 * 回调函数有个概念：placeholder（占位符）
 * 回调函数中参数不能换位
 */

function doAsynTask(cb) {
    setTimeout(() => {
        console.log('异步函数回调');
        cb();
    }, 1000);
};

doAsynTask(() => console.log('call you back'));

/**
 * ES6 对回调函数进行改造，就是Promise
 * Promise是一个类class，是一个占位符
 * 结果：对象承诺resolve和拒绝承诺reject，作为参数而且是函数
 */
function newDoAsyncTask() {
    var promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('异步函数回调');
            if (0) {
                reject();
            } else {
                resolve();
            }
            
        }, 3000);
    });
    return promise;
}

newDoAsyncTask();
newDoAsyncTask().then(() => console.log('异步任务完成'));
/**
 * Promise Notification(通知)
 * Observer（观察者模式）（广播模式）、（订阅模式subscribe）
 * 当执行 resolve函数时，附带了 success handler，即.then 函数
 * chained 链式： .then  .then   
 * then函数有两个参数，对应 resolve 和 reject 的 success handler和error handler，按照对应情况执行不同结果。
 */
let error = true
function nDoAsyncTask() {
    var promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('异步函数回调');
            if (error) {
                reject('error');
            } else {
                resolve('done');
            }
            
        }, 3000);
    });
    return promise;
}
nDoAsyncTask().then(
    (val) => {console.log(val)},
    (err) => {console.log(err)}
);

/**
 * Promise (承诺立即兑现或拒绝)
 * 一系列 .then调用，类似火炬传递
 * then()后面不能有分号
 */

 Promise.resolve('done')
 .then(
     (val) => {
         console.log(val);
         return 'done2';
     },
     (err) => {
         console.log(err);
     }
 )
 .then(
     (val) => {
         console.log(val)
         return 'done3';
     },
     (err) => console.log(err)
 )
 .then(
    (val) => console.log(val),
    (err) => console.log(err)
)

Promise.reject('fail')
.then(
    (val) => console.log(val),
    (err) => console.log('fail is ' + err)
)
.then(
   (val) => console.log(val),
//    (err) => console.log(err)
)


/**
 * Decorator 装饰器（装饰符），TypeScript所特有的
 * ES6和ES7标准
 * Angular极致地使用Decorator
 */

@Component({
    selector: "my-first",
    template: 'xx'
})
class 
Component {

}













