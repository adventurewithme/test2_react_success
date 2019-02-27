


function Person(age,name){
this.age=age;
this.name=name
}
const p1=new Person('wnag',18);
// 通过new出来的实例，访问到的属性叫做实例属性；
console.log(p1)
console.log('---------------------')

class Animal{
    // constructor：类中的构造器，每个类都有构造器，作用是，每当new这个类的时候，必然会优先执行构造器中的代码
    constructor(name,age){
        // 实例属性
        this.age=age;
        this.name=name;
    }
    // 在class内部，通过static修饰过的属性，是静态属性；
    static info = 'info hahaha'
}
// info属性，直接挂载给了person，所以，他是静态属性
Person.info='hao'
const a1=new Animal('点',23);
// 实例属性比如：a1.name,a1.age
// 静态属性比如：Animal.info
console.log(a1,a1.age,a1.name,Person.info);