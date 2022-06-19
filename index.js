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
    var _a;
    (_a = persion.c) === null || _a === void 0 ? void 0 : _a.toString();
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
// 接口
