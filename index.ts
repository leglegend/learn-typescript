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
