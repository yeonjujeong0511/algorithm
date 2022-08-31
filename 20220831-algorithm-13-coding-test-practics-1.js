// * Question : 1부터 20까지의 범위 중 임의의 숫자 세 개가 있다.
// * 공식(formula) : (x + y + z) / 3
// * 10미만은 10을 포함하지 않는다. 
// * 1. 평균값이 10 미만이면 'under' 라는 메세지를 출력한다.
// * 2. 평균값이 10 이상히면 'over' 라는 메세지를 출력한다.
// * 3. 플로우차트(flowchart) : 순서도를 작성한다. 

// ! 임의의 숫자(난수) 구하는 함수
// (Math.floor(Math.random() * 10));

//console.log(Math.floor(Math.random()*20)+1)
// 1~20 의 숫자가 랜덤으로 나온다.

let x = Math.floor(Math.random()*20)+1
let y = Math.floor(Math.random()*20)+1
let z = Math.floor(Math.random()*20)+1

  inputData = [];


  if(x !== y && y !== z && x !==z ){
    if((x+y+z)/3 < 10){
      console.log("under");
      console.log(x,y,z)
    } else{
      console.log("over");
      console.log(x,y,z)
    }
    inputData.splice(0,0,x,y,z)
  } else {console.log("값이 중복입니다.")}


  // * Advanced
  // * a. 1부터 20까지의 범위 중 임의의 3개의 숫자가 중복되지 않은 난수를 배열, inputData에 담기도록 처리하시오.

  console.log(inputData)

  // * b. 객체 objectData의 property인 key, "first", "second", "third"에 주문 a를 통해 얻은 데이터를 각각의 키(key)의 값으로 삽입(insert)하시오.
  // *     const objectData = { first : 0, second : 0, third: 0};

  const objectData = {
    first : x,
    second : y,
    third : z
  }
  
  console.log(objectData)

  // *  c. objectData에 담긴 세 개의 난수 중 중앙값에 해당하는 값을 출력하시오.

  // console.table(Object.values(objectData).sort(function(a,b){
  //   return a-b;
  // })[1]);
  
  centerNum = Object.values(objectData).sort(function(a,b){
    return a-b;
  })[1]
  console.log(centerNum)
  

