//Q4. sum of three int adds to zero
let sum=0;
let array = [1,0,-1];
for (let i = 0; i<array.length;i++){
    sum = sum+array[i];
}
if(sum==0){
    console.log("sum of given three integer : "+sum);
}
else{
    console.log("sum of given three integer is not zero");
}
