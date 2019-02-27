function Person(name,age){
    this.name=name;
    this.age=age;
}
const a1=new Person('大黄',3);

Person.info='info';
// 实例方法
Person.prototype.say=function(){
    console.log('this is say');
}
a1.say();//这是实例方法
// 静态方法
Person.show=function(){
    console.log('this is jingtai say');
}
Person.show();



console.log(a1,Person.info);
console.log('------------------');


class Animal{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
    // static infos='info_b';
    //动物的实例方法
    jiao(){
        console.log('animal shili fangfa ')
    }
    // static infos='info_b'
}
const a2=new Animal('大花',4);
console.log(a2,Animal.infos);
a2.jiao();

