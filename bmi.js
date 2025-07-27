let weight = 900;
let height= 5.4;

let bmi = weight /(height ** 2);
console.log("bmi:", bmi.toFixed(2))


if(bmi < 18.5){
    console.log("you are underweight")
}else if(bmi >= 18.5 && bmi <= 24.9) {
    console.log("u r normal")
}else if(bmi >=25 && bmi <= 29.9){
    console.log(" u r overweight")
} else{
    console.log("u r obese")
}