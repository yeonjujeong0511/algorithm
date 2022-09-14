const studentList = ["강예훈","김성현","류주완","마근원","박종인","박재형","송형주","양상희","원두진","유민호","이상호","이소영","이은수","정동욱","정윤환","정정원","지영빈","한용준","황초영","김근수","김승현","전형민","정연주","이아연","최화연"
];

function students (id,name){
  this.id = id;
  this.name = name;
}


for(i = 0; i<studentList.length; i++){
  const list = new students(i+1,studentList[i])
  // * 성이 김인 사람의 성을 낌으로 바꾸기 - 실패ㅠ
  //console.log(list.name[0])
  // if(list.name[0] === "김"){
  //   console.log("김이맞습니당")
  //   list.name[0] = "낌"
  // } 

  // * 홀수 짝수 번호 구분하기 
  // if (list.id % 2 === 0){
  //   console.log(list)
  //   console.log( "짝수 번호 리스트입니다")
  //   } else {
  //   console.log(list)
  //   console.log("홀수 번호 리스트입니다.")
  // }

  // * 내 이름에 반려동물 추가

}
