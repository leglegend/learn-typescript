function hha(a: any, n: Date) {
  console.log(`${a}, ${n}`)
}

hha('1', new Date())

let msgg = undefined
msgg = 1
msgg = '1'

let str: String = new String()

// 数组
let arr: number[] = [1, 2, 3]
let arr2: Array<number> = [1, 2, 3]
arr2 = []

// any
let any: any = 1
any = '1'

// 函数
function lala(a: string, b: string): void {
  return
}

function alal(a: string, b: string): string {
  return a + b
}

// object
function aa(persion: { a: string; b: number; c?: string }) {
  persion.c?.toString()
}

aa({
  a: '1',
  b: 22
})

// 联合类型 union
let id: number | string

function printId(id: number | string | number[]) {
  if (typeof id === 'string') {
    id.toLowerCase()
  }
  if (Array.isArray(id)) {
    id.push(1)
  }
}

// 类型别名
type Persion = {
  name: string
  age: number
}

let persion: Persion = {
  name: 'top',
  age: 11
}

type Union = number | string
let union: Union

// 接口
interface PersionInterface {
  name: string
}

interface Student extends PersionInterface {
  level: number
}

// type实现继承
type Animatio = {
  name: string
}

type Pig = Animatio & {
  age: number
}

// 向已有的接口添加字段
interface Student {
  age: number
}

// 类型断言
let cavans = document.getElementById('main_cavans') as HTMLCanvasElement
cavans = <HTMLCanvasElement>document.getElementById('main_cavans')
let num: number = 1 as number

// 文字类型
let hello: 'hello' = 'hello'
let school: 'big' | 'small' | 'middle' = 'big'
let age: '11' | 11
function lala2(): 1 | 0 | -1 {
  return 1
}

function request(url: string, method: 'GET' | 'POST') {
}

const req = {
  url: 'http://www.baidu.com',
  method: 'GET'
} as const

request(req.url, req.method)

// null 和 undefined 
function xxx(x?: null | number) {
  x?.toFixed() // 不一定运行
  x!.toFixed() // 一定运行
}

// 枚举
enum Type {
  UP = 1,
  DOWN
}
console.log(Type.UP) // 1
console.log(Type.DOWN) // 2

// bigint:非常大的数  symbol：全局唯一引用
let big: bigint = BigInt(100) // ES2020可用
big = 100n
const sym = Symbol('name')

// 类型缩小
typeof big === 'object'
// string、number、bigint、boolean、symbol、undefined、function
function printAll(strs: string | string[] | null) {
  if (typeof strs === 'object') {
    // null 也会进来
  } else if (typeof strs === 'string') {

  } else {

  }
}

// 真值缩小
Boolean(null)
!!null

// 等值缩小
function example(x: string | number, y: string | boolean) {
  if (x === y) {
    x.toLowerCase()
    y.toLowerCase()
  }
}
null == undefined // true

// in操作符缩小
type Fish = {
  swim: () => void
}
type Human = {
  swim: boolean
}

function move(animal: Fish | Human) {
  if ('swim' in animal) {
    (animal as Fish).swim()
  }
}

// instanceof 操作符缩小
function log(x: Date | string) {
  if (x instanceof Date) {
    x.toDateString()
  } else {
    x.toLowerCase()
  }
}

// 分配缩小
let x = Math.random() > 0.5 ? 1 : '2'
// let x: number | string
x = '2'
x = 1

// 类型谓词
function xx(x: Fish | Human): x is Fish {
  if (typeof x.swim === 'function') {
    return true
  }
  return false
}

// never类型与穷尽性检查
function xxxxxx(x: string | number) {
  if (typeof x === 'string') {

  } else if (typeof x === 'number') {

  } else {
    const a: never = x
    return
  }
}

// 函数
function aaa(fn: (a: string) => number) {

}

function xxxxx(a: string): number {
  return 1
}
aaa(xxxxx)

// 调用签名
type Tttt = {
  name: string
  (a: string): void
}

function tt(a: string) {

}
tt.name = '1'

function tT(t: Tttt) {
  t.name
}

tT(tt)

// 构造签名
class Ctor {
  s: string
  constructor(s: string) {
    this.s = s
  }
}

type SomeConstructor = {
  new(s: string): Ctor
}

function newCtor(ctor: SomeConstructor) {
  return new ctor('')
}

interface CallOrConstructor {
  new(s: string): Date
  (n?: number): number
} // 既是构造函数 又是普通函数

function fm(fn: CallOrConstructor) {
  let date = new fn('2022')
  let num = fn(1)
}

// 泛型函数
function firstElement<T>(arr: T[]): T {
  return arr[0]
}

firstElement(['1'])

function map<I, O>(a: I[], fn: () => O): O {
  return fn()
}
function output(): number {
  return 1
}
map([1], output)

// 限制条件
function longest<T extends { length: number }>(a: T, b: T) {
  if (a.length > b.length) {
    return a
  } else {
    return b
  }
}

longest('11', '222')

// 指定类型参数
function lalalafla<T>(arr: T[], arr2: T[]) {

}

lalalafla<string | number>(['1'], [2])

// 优秀通用函数准则
// 1. 尽量使用泛型本身，而不是约束
// 2. 尽可能少的使用类型参数
// 3. 如果类型参数只用一次 确认是否需要他

// 可选参数
function axc(a?: string) {
  a?.toString()
}
axc()
axc('1')
// ?和默认值不能同时用
function axc2(a: string = 'aaa') {
  a.toString()
}

// 回调函数的可选参数
function calll(callback: (a: string, i?: number) => void) {
  callback('')
}

calll((a, i) => {
  i?.toFixed()
})

// 函数重载
function makeDate(timestamp: number): Date // 重载函数
function makeDate(year: number, month: number, date: number): Date  // 重载函数
function makeDate(timestampOrYear: number, month?: number, date?: number): Date {
  if (month !== undefined && date !== undefined) {
    return new Date(timestampOrYear, month, date)
  } else {
    return new Date(timestampOrYear)
  }
}  // 实现函数

makeDate(1212)
makeDate(1, 2, 3)
// 尽量使用联合类型 而不是重载函数

// 函数内this声明
interface User {
  admin: boolean
}

interface DB {
  filterUsers(filter: (this: User) => boolean): User[]
}

const db: DB = {
  filterUsers: (filter: (this: User) => boolean) => {
    return []
  }
}

db.filterUsers(function (this: User) {
  return this.admin
})

// 其他类型
function a(): void { } // void 没有任何返回值的函数
// object 任何的不是基元的值
// unknown 对unknown的任何操作都会报错
// never 永不会被观察到
// Function 

// 展开运算符 形参展开
function nnnnn(n: number, ...ns: number[]) {

}

nnnnn(1, 2, 3, 4, 5)

// 实参展开
const arr11 = [1, 2]
const arr22 = [3, 4] as const
arr11.push(...arr22)
Math.max(...arr22)

// 参数解构
function sumsum({ a, b, c }: { a: number, b: number, c: number }) {
  return a + b + c
}

sumsum({ a: 1, b: 2, c: 3 })

// 返回viod类型
type func = () => void // 这种可以有返回值 但是无效

const fff: func = function () {
  return
}

function aaxx(): void {
  return  // 不能有返回值
}

// 对象类型
// 接口对象
interface Persion11 {
  name: string
  age?: number
}

function getP(persion: Persion11) {
  console.log(persion.age)
}
// 匿名对象
function getP2(persion: { age: number }) {
  console.log(persion.age)
}
// 别名 把interface换成type

// 属性修改器
function getP3({ name, age }: Persion11) {
  console.log(name)
}

// 只读属性
