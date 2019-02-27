// 父类(原型对象)
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    sayHello() {
        console.log('sayHello ')
    }
}
//在class类中，可以使用extends关键字实现子类继承父类
//语法 class 子类 extends 父类{}



//子类，美国人
class American extends Person {
    constructor(name) {
        super(name)
    }
}
const a1 = new American('jack', 20);
console.log(a1, 'a1111');
a1.sayHello();

//子类，中国人
class Chinese extends Person {
    constructor(name, age, id) {
        super(name, age)
        this.id = id;
    }
}
const a2 = new Chinese('zhangsan', 22, 23);
console.log(a2, 'a222');
a2.sayHello();
