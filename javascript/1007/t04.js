'use strict'

class Member{

  // 생성자 
  constructor(name, age, color){
    this.name = name;
    this.age = age;
    this.color = color;
  }

  // getter 생성
  get name(){
    return this._name;
  }

  get age(){
    return this._age;
  }

  get color(){
    return this._color;
  }

  // setter 생성
  set name(name){
    this._name = name;
  }

  set age(age){
    if(age < 1){
      age = 1;
    }
    this._age = age;
  }

  set color(color){
    this._color = color;
  }
}
