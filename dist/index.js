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
function request(url, method) { }
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
function move(animal) {
    if ('swim' in animal) {
        ;
        animal.swim();
    }
}
// instanceof 操作符缩小
function log(x) {
    if (x instanceof Date) {
        x.toDateString();
    }
    else {
        x.toLowerCase();
    }
}
// 分配缩小
let x = Math.random() > 0.5 ? 1 : '2';
// let x: number | string
x = '2';
x = 1;
// 类型谓词
function xx(x) {
    if (typeof x.swim === 'function') {
        return true;
    }
    return false;
}
// never类型与穷尽性检查
function xxxxxx(x) {
    if (typeof x === 'string') {
    }
    else if (typeof x === 'number') {
    }
    else {
        const a = x;
        return;
    }
}
// 函数
function aaa(fn) { }
function xxxxx(a) {
    return 1;
}
aaa(xxxxx);
function tt(a) { }
tt.name = '1';
function tT(t) {
    t.name;
}
tT(tt);
// 构造签名
class Ctor {
    constructor(s) {
        this.s = s;
    }
}
function newCtor(ctor) {
    return new ctor('');
}
function fm(fn) {
    let date = new fn('2022');
    let num = fn(1);
}
// 泛型函数
function firstElement(arr) {
    return arr[0];
}
firstElement(['1']);
function map(a, fn) {
    return fn();
}
function output() {
    return 1;
}
map([1], output);
// 限制条件
function longest(a, b) {
    if (a.length > b.length) {
        return a;
    }
    else {
        return b;
    }
}
longest('11', '222');
// 指定类型参数
function lalalafla(arr, arr2) { }
lalalafla(['1'], [2]);
// 优秀通用函数准则
// 1. 尽量使用泛型本身，而不是约束
// 2. 尽可能少的使用类型参数
// 3. 如果类型参数只用一次 确认是否需要他
// 可选参数
function axc(a) {
    a?.toString();
}
axc();
axc('1');
// ?和默认值不能同时用
function axc2(a = 'aaa') {
    a.toString();
}
// 回调函数的可选参数
function calll(callback) {
    callback('');
}
calll((a, i) => {
    i?.toFixed();
});
function makeDate(timestampOrYear, month, date) {
    if (month !== undefined && date !== undefined) {
        return new Date(timestampOrYear, month, date);
    }
    else {
        return new Date(timestampOrYear);
    }
} // 实现函数
makeDate(1212);
makeDate(1, 2, 3);
const db = {
    filterUsers: (filter) => {
        return [];
    }
};
db.filterUsers(function () {
    return this.admin;
});
// 其他类型
function a() { } // void 没有任何返回值的函数
// object 任何的不是基元的值
// unknown 对unknown的任何操作都会报错
// never 永不会被观察到
// Function
// 展开运算符 形参展开
function nnnnn(n, ...ns) { }
nnnnn(1, 2, 3, 4, 5);
// 实参展开
const arr11 = [1, 2];
const arr22 = [3, 4];
arr11.push(...arr22);
Math.max(...arr22);
// 参数解构
function sumsum({ a, b, c }) {
    return a + b + c;
}
sumsum({ a: 1, b: 2, c: 3 });
const fff = function () {
    return;
};
function aaxx() {
    return; // 不能有返回值
}
function getP(persion) {
    console.log(persion.age);
}
// 匿名对象
function getP2(persion) {
    console.log(persion.age);
}
// 别名 把interface换成type
// 属性修改器
function getP3({ name, age }) {
    console.log(name);
}
let aaa2 = {
    prop: '1212'
};
const arrrr = ['1', '2'];
const comse = { name: '1' };
const readonly = {
    name: '1'
};
const three = {
    one: '1',
    two: '2',
    type: 3
};
const box = {
    content: '1'
};
// 类型操作
function ientity(ar) {
    return ar;
}
let aii = ientity(1);
const fffdd = ientity;
const fffddd = ientity;
// 泛型类
class Persionz {
    constructor(a) {
        this.name = a;
    }
}
let persionz = new Persionz(1);
// keyof
function aasdd(a, b) { }
let xxxxxxf = {
    a: 1,
    b: 2
};
aasdd(xxxxxxf, 'a');
//
