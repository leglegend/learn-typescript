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

function request(url: string, method: 'GET' | 'POST') {}

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
    ;(animal as Fish).swim()
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
function aaa(fn: (a: string) => number) {}

function xxxxx(a: string): number {
  return 1
}
aaa(xxxxx)

// 调用签名
type Tttt = {
  name: string
  (a: string): void
}

function tt(a: string) {}
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
  new (s: string): Ctor
}

function newCtor(ctor: SomeConstructor) {
  return new ctor('')
}

interface CallOrConstructor {
  new (s: string): Date
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
function lalalafla<T>(arr: T[], arr2: T[]) {}

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
function makeDate(year: number, month: number, date: number): Date // 重载函数
function makeDate(
  timestampOrYear: number,
  month?: number,
  date?: number
): Date {
  if (month !== undefined && date !== undefined) {
    return new Date(timestampOrYear, month, date)
  } else {
    return new Date(timestampOrYear)
  }
} // 实现函数

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
function a(): void {} // void 没有任何返回值的函数
// object 任何的不是基元的值
// unknown 对unknown的任何操作都会报错
// never 永不会被观察到
// Function

// 展开运算符 形参展开
function nnnnn(n: number, ...ns: number[]) {}

nnnnn(1, 2, 3, 4, 5)

// 实参展开
const arr11 = [1, 2]
const arr22 = [3, 4] as const
arr11.push(...arr22)
Math.max(...arr22)

// 参数解构
function sumsum({ a, b, c }: { a: number; b: number; c: number }) {
  return a + b + c
}

sumsum({ a: 1, b: 2, c: 3 })

// 返回viod类型
type func = () => void // 这种可以有返回值 但是无效

const fff: func = function () {
  return
}

function aaxx(): void {
  return // 不能有返回值
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
interface SomeType {
  readonly prop: string
}

let aaa2: SomeType = {
  prop: '1212'
}

// 索引签名
interface StrngArray {
  [index: number]: string
}
const arrrr: StrngArray = ['1', '2']

interface SomeTTT {
  [props: string]: string
}
const comse: SomeTTT = { name: '1' }

interface ReadOnly {
  [props: string]: string
}
const readonly: ReadOnly = {
  name: '1'
}

// 扩展类型
interface BAseff extends SomeType {
  naame: string
}

interface HHHH extends SomeType, Persion11 {
  name: string
}

// 交叉类型
type One = {
  one: string
  type: number
}
type Two = {
  two: string
  type: number
}
type Three = One & Two

const three: Three = {
  one: '1',
  two: '2',
  type: 3
}

// interface 可重复 type不可重复

// 泛型对象类型
interface Box<T> {
  content: T
}

type Box2<T> = {
  content: T
}

const box: Box<string> = {
  content: '1'
}

type OOME<T> = T | null
type MMM<T> = T | null
type FFFF<T> = MMM<OOME<T>>

// 类型操作
function ientity<T>(ar: T): T {
  return ar
}

let aii: number = ientity(1)
// 定义泛型函数
interface YYYYY {
  <T>(a: T): T
}
interface YYYYYa<T> {
  (a: T): T
}
const fffdd: YYYYY = ientity
const fffddd: YYYYYa<string> = ientity

// 泛型类

class Persionz<T> {
  name: T
  constructor(a: T) {
    this.name = a
  }
}
let persionz = new Persionz<number>(1)

// keyof
function aasdd<T, Key extends keyof T>(a: T, b: Key) {}

let xxxxxxf = {
  a: 1,
  b: 2
}
aasdd(xxxxxxf, 'a')

type KeyOf = {
  x: string
  y: string
}
type P = keyof KeyOf
let p: P = 'x'
p = 'y'

type KeyOfIndex = {
  [index: string]: boolean
}

type KOI = keyof KeyOfIndex
let koi: KOI = 1

// 在泛型中使用类型
function create<T>(c: { new (): T }): T {
  return new c()
}

class BeeKeeper {
  hasMask: boolean = true
}

class ZooKeeper {
  nametag: string = 'Mikle'
}

class Animal {
  numLegs: number = 4
}

class Lion extends Animal {
  keeper: ZooKeeper = new ZooKeeper()
}

function createInstance<A extends Animal>(c: new () => A): A {
  return new c()
}
createInstance(Lion).keeper.nametag

// typeof类型操作符
let tos = 'hellow'
let tos1: typeof tos = '2'
type K = ReturnType<any>

// 索引返回类型
type PersionIndex = {
  name: string
}
let persionName: PersionIndex['name'] = '12'

// 条件类型
type Lion2 = Lion extends Animal ? string : number

// 条件类型约束
type Flatten<T> = T extends any[] ? T[number] : T
// type Str = string
type Str = Flatten<string[]>
// type Num = number
type Num = Flatten<number>

// infer
type GtRefef<T> = Type extends (...arg: never[]) => infer Return
  ? Return
  : never

// 类
class Class {
  readonly x: number
  y: number
  z!: number

  constructor(x = 0, y = 0) {
    this.x = x
    this.y = y
  }
}

// cls.x = 1 error
const cls = new Class(1)
cls.y = 2

// 构造器
class Derviec extends Class {
  constructor() {
    super()
  }
}

// 类型方法
class ClassFn {
  x: number = 10

  scale(n: number) {
    this.x = this.x * n
  }
}

// getters setters 访问器
class C {
  _length = 1
  get length() {
    return this._length
  }
  set length(val) {
    this._length = val
  }
}
// 只有get 只读
class Thing {
  _size = 0

  get size(): number {
    return this._size
  }

  set size(val: string | number) {
    this._size = Number(val)
  }
}

// 索引签名
class MyClass {
  [s: string]: boolean | ((s: string) => boolean)
  x: boolean = true
  check(s: string) {
    return this[s] as boolean
  }
}

// 类继承 implements
interface Firut {
  ping(c: string): void
  x: string
  y?: number
}

class Apple implements Firut {
  x = '1'
  ping(c: number | string) {
    // 实现接口兼容就可以
  }
}

class LittleApple extends Apple {}

// 重写方法
class Bang {
  ping() {}
}
class BigApple extends Bang {
  ping(n?: boolean) {}
}

// 初始化顺序
class BaseClass {
  name = 'base'
  constructor() {
    console.log(this.name)
  }
}

class Dbase extends BaseClass {
  name = 'dbaswe'
}

const d = new Dbase()
// 'base'

// 继承内置类型
class AppleError extends Error {
  constructor(m: string) {
    super()
  }
}

// 成员的可见性
// public(默认值) protected pricate
class Greeter {
  public getPublic() {
    // 都能访问
  }
  private getPrivate() {
    // 只有当前类能访问
  }
  protected getProtected() {
    // 基类和子类能访问
  }
}

// 跨实例访问私有成员
class A {
  private x = 10
  constructor(x: number) {
    this.x = x
  }
  saveAs(other: A) {
    return other.x == other.x
  }
}

let a1 = new A(1)
let a2 = new A(2)
a1.saveAs(a2)

// 静态成员
class Static {
  static x = 10
  private y = 5
  static getStatic() {}
  static getA() {
    this.x
    Static.x
  }
}
Static.x
Static.getStatic()

let newStatic = new Static()
// newStatic.x error

// 类里的static区块
class Foo {
  static #foo = 1 // 专用，外部不能访问
  static bar = 2
  a = 1
  getFoo() {
    // this指向实例
    return Foo.#foo + Foo.bar + this.a
  }
  static getBar() {
    // this指向Foo类
  }
}

// 泛型类

class Box3<T> {
  content: T
  constructor(t: T) {
    this.content = t
  }
}
const b: Box3<string> = new Box3('1')

// 类运行时中的this

// this类型
class Box4 {
  content: string = ''

  set(al: string) {
    this.content = al
    return this
  }
}

// 类型守卫的this
class FileSystemObj {
  isFile(): this is Box4 {
    return this instanceof Box4
  }
}

// 参数属性
class Params {
  constructor(
    public readonly x: number,
    protected y: number,
    private z: number
  ) {}
}

// 类表达式 匿名类
const someClass = class<T> {}

// 抽象类和成员

// 抽象类 不能被实例化 只能被继承
abstract class Abstract {
  abstract getName(): string

  printName() {}
}

class Axxx extends Abstract {
  getName() {
    return '1'
  }
}
const axxx = new Axxx()
axxx.printName()
axxx.getName()

// 类之间的关系
class Point1 {
  x: number = 2
  y: number = 2
}
class Point2 {
  x: number = 1
  y: number = 1
}

const p1: Point1 = new Point2()

class Persion2 {
  name: string = '1'
  age: number = 11
}

class Emplyee {
  name: string = '1'
  age: number = 11
  salary: number = 110
}

const p2: Persion2 = new Emplyee()

// 模块
