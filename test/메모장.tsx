

const TestList = () => {

  class testClass {
    protected _names: string
    // protected는 서브 클래스 즉 extend로 확장된 클래스에소 적용된다.
    //  private으로 숨기고 더 나아가 이 클래스 안에서만 쓸 수 있다. 
    age: number

    constructor(name: string, age: number) {
      this._names = name
      this.age = age

    }
    //생성자는 클래스를 초기화 하고 값을 넣어준다. 초기화를 담당한다.


    inpo(): string {
      return `이름은 ${this._names} 이며 나이는 ${this.age}`
      //메서드는 클래서에서 행동을 뜻한다.



    }
    get name() {
      if (this._names === "최대성") {
        return "죄송합니다.기록 말소 되었습니다."
      }

      return `이름은 ${this._names} 입니다`

    }

    //get은 private으로 숨겨진 속성을 가져오는 열쇠라고 생각하면 된다. 함수처럼 이용된다.

    set name(name: string) {

      if (typeof name === 'string') {
        this._names = name
      }
      //set은 일종의 필터다. 프라이빗이 필요 없을 거 같다. 일종의 조건을 달아줄 수 있다. 

    }

  }

  const p = new testClass("최대성", 123)
  const d = new testClass("춥다", 234)


  console.log(p.name)
  console.log(d.name)

  class reClass extends testClass {
    sex: string

    constructor(_names: string, age: number, sex: string) {
      super(_names, age)
      this.sex = sex

    }

    get name() {

      if (this._names === "최대성") {
        return "파생클래스데수."
      }

      return `이름은 ${this._names} 입니다`

    }

  }

  const dd = new reClass("최대성", 123, "men")

  console.log(dd.name)
  console.log(dd.sex)


  class startic {

    private static names: "string"
    private static type: "Type"

    static saynames() {

      return (`스태틱 이름은`)
    }

    static _names() {
      return this.names
    }

    static types() {
      return startic.type
    }

  }


  console.log("startic.names() :", startic._names())
  console.log("startic.saynames() :", startic.saynames())
  console.log("startic.types() :", startic.types())




  abstract class animal {
    //abstract로 이미 만들어진 틀로 class를 만들게한다.
    // 클래스를 만들어내는 틀
    // 추상 클래스는 그 추상 클래스를 상속받아서 기능을 이용하고, 확장시키는 데 있습니다. 반면에 인터페이스는 함수의 껍데기만 있는데, 그 이유는 그 함수의 구현을 강제하기 위해서
    age: number
    name: string

    constructor(age: number, name: string) {
      this.age = age
      this.name = name
    }

    abstract hello(): string
  }




  class dog extends animal {
    sex: "M" | "F"

    constructor(age: number, name: string, sex: "M" | "F") {
      super(age, name)
      this.sex = sex
    }

    hello() {
      return `이름은 ${this.name} `
    }
  }

  const person = new dog(40, "최대성", "M")


  console.log(person.sex)
  console.log(person.hello())


  interface interfaceClass {
    age: number
    number: number
    name: string
    sex: "M" | "F"

    seyname(): string
  }



  class reinterfaceClass implements interfaceClass {
    age: number
    number: number
    name: string
    sex: "M" | "F"


    constructor(age: number,
      number: number,
      name: string,
      sex: "M" | "F") {

      this.age = age
      this.number = number
      this.name = name
      this.sex = sex
    }

    seyname() {
      return `이놈의 이름은 ${this.name} 다! 먹어랏!!`
    }
  }

  const sdsa= new reinterfaceClass(99,20,"마주니어", "F")

  console.log("sdsa.name :", sdsa.name)
  console.log("sdsa.seyname :", sdsa.seyname())


  const reInterface: interfaceClass = {
    age: 99,
    number: 123,
    name: "최대성",
    sex: "M",

    seyname() {
      return `이름은 아마도 ${this.name}`
    }
  }


  console.log(reInterface.age)
  console.log(reInterface.seyname())

  class o {
    A: string
    
    constructor(A:string){
      this.A= A
    }

      Baa() { return this.A}
  }
  
  const ssss= new o("sdfdsa")

  console.log(ssss.Baa())

const enum numberEnum{
   age=10,
   numbers=213213,
   aaaaa,
   ddddd= "smae"
}

console.log(numberEnum.age)
console.log(numberEnum.numbers)

  return (<></>)



}



// console.log(testList(123))

// const srt:string = "afdsafds"

// console.log(srt)

// const num:number =12324

// console.log(num)

// const bool: boolean =false

// console.log(bool)

// const big: bigint = 1001n

// const num123: 123=123

// console.log(num123)
// // BigInt**는 Number 원시 값이 안정적으로 나타낼 수 있는 최대치인 2^53 - 1보다 큰 정수를 표현할 수 있는 내장 객체입니다. 
// // number와 같이혼합해서 사용할 수 없음 Math 객체의 메서드와 함께 사용할 수 없다.

// console.log(big)

// const obj: {numobj:number, strobj: string , childobj:{str: string, num: number}}= {
//     strobj: "string",
//     numobj: 123,
//     childobj:{str: "string",num: 123}
// }

// console.log(obj.numobj)
// console.log(obj.childobj.num)

// const arr1 :number[] =[123, 235, 567,]

// const strarr: string[]= ["123","4324"]

// console.log(strarr)
// console.log(arr1)


// const tuple: [number, ...string[]] = [12,"a","b","4"]

// console.log(tuple)



//인스턴스 실제로 메모리에 올라는 값 
export default TestList
