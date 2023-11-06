/*
 * @Author: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @Date: 2023-08-08 21:58:04
 * @LastEditors: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @LastEditTime: 2023-11-06 21:58:23
 * @FilePath: \vue3_admin_templated:\qianduan\interview\inherit_mode.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
/** extends 继承 */
function Parent(name,age){
    this.age = age;
    this.name = name;
}
class Child extends Parent {}
const child = new Child('qqy',18)
/**原型链继承 */
function Animal(name,age){
    this.name = name;
    this.age = age;
}
Animal.prototype.getAge = function(){
    return this.age
}
function Cat(height){
    this.height = height
}
//原型链继承关键一步 子类型的原型是父类型的一个实例
Cat.prototype = new Animal();
const cat = new Cat(10,'mimi',2);
console.log(cat.getAge())


