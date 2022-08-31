// * 생성자함수 수업 연습

// export default function kdt(name,glass,payment){
//   this.id = name;
//   this.b = glass;
//   this.c = payment;
//   this.func = function(){}
// }

// const members = [];
// for(let i=0; i<5; i++){
//   members.push(new kdt(i+1,"hello","bye"))
// }

// console.log(members);

// const ahyeon = new kdt("슈크림","김치","소주");

//console.log(ahyeon)

// * 생성자함수 실습 연습

function me(name,age,address,tel){
if(typeof(name) === "string"  
  && typeof(age) === "number"
  && typeof(address) === "string"
  && typeof(tel) === "number"){
  this.name = name;  
  this.age = age;
  this.address = address;
  this.tel = tel;
  }
}  

const yeonju = new me("정연주",30,"대전",01033750273)

console.log(yeonju)

