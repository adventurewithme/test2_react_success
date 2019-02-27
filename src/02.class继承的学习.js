// 父类(原型对象)
class Person{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
}
//在class类中，可以使用extends关键字实现子类继承父类
//语法 class 子类 extends 父类{}



//子类，美国人
// class American{
    // constructor(name,age){
    //     this.name=name;
    //     this.age=age;
    // }
// }
class American extends Person{}
const a1=new American('jack',20);
console.log(a1);


//子类，中国人
// class Chinese{
    // constructor(name,age){
    //     this.name=name;
    //     this.age=age;
    // }
// }
class Chinese extends Person{}
const a2=new Chinese('zhangsan',22);
console.log(a2);

