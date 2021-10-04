//1
const countFromOne = (int) => {
    for (let i = 1; i <= int; i++){
    console.log(i)
    }
};
//countFromOne(10)

//2

const countEveryOdd = (int) => {
    for (let i = 1; i <= int; i+= 2){
    console.log(i)
    }
};
//countEveryOdd(20)

//3
const isNegative = (num) => {
    if (num > 0 ){
    return false;
    } else {
    return true;
  }
}

//console.log(isNegative(-30))

//4
const betweenFiveAndTwenty = (int) => {
    if (int >= 5 && int <= 20){
        return true;
    } else {
        return false;
    }
}
//console.log(betweenFiveAndTwenty(30))

//5  
function isAllLowerCase (string){
    const lowercase = string.toLowerCase();
    if(lowercase === string){
        return true
        } else {
            return false;
        }
    }

console.log('Hello')