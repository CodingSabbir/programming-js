function closure(){
    let count=0;
  return  function clock(){
     count ++
     return count;
    }
};
const result=closure();
console.log(result());
console.log(result());
console.log(result());

