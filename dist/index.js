"use strict";
function hha(a, n) {
    console.log(`${a}, ${n}`);
}
hha('1', new Date());
let msgg = undefined;
msgg = 1;
msgg = '1';
let str = new String();
// 数组
let arr = [1, 2, 3];
let arr2 = [1, 2, 3];
arr2 = [];
// any
let any = 1;
any = '1';
// 函数
function lala(a, b) {
    return;
}
function alal(a, b) {
    return a + b;
}
// object
function aa(persion) {
    persion.c?.toString();
}
aa({
    a: '1',
    b: 22
});
// 联合类型 union
let id;
function printId(id) {
    if (typeof id === 'string') {
        id.toLowerCase();
    }
    if (Array.isArray(id)) {
        id.push(1);
    }
}
let persion = {
    name: 'top',
    age: 11
};
let union;
// 类型断言
let cavans = document.getElementById('main_cavans');
cavans = document.getElementById('main_cavans');
let num = 1;
// 文字类型
let hello = 'hello';
let school = 'big';
let age;
function lala2() {
    return 1;
}
function request(url, method) {
}
const req = {
    url: 'http://www.baidu.com',
    method: 'GET'
};
request(req.url, req.method);
// null 和 undefined 
function xxx(x) {
    x?.toFixed(); // 不一定运行
    x.toFixed(); // 一定运行
}
// 枚举
var Type;
(function (Type) {
    Type[Type["UP"] = 1] = "UP";
    Type[Type["DOWN"] = 2] = "DOWN";
})(Type || (Type = {}));
console.log(Type.UP); // 1
console.log(Type.DOWN); // 2
// bigint:非常大的数  symbol：全局唯一引用
let big = BigInt(100); // ES2020可用
big = 100n;
const sym = Symbol('name');
// 类型缩小
typeof big === 'object';
// string、number、bigint、boolean、symbol、undefined、function
function printAll(strs) {
    if (typeof strs === 'object') {
        // null 也会进来
    }
    else if (typeof strs === 'string') {
    }
    else {
    }
}
// 真值缩小
Boolean(null);
!!null;
// 等值缩小
function example(x, y) {
    if (x === y) {
        x.toLowerCase();
        y.toLowerCase();
    }
}
null == undefined; // true
// in操作符缩小
