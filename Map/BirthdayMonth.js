console.log("Birth Month of 50 individuals");
let resultMap = new Map();
let value1 = 0;
let value2 = 0;
let value3 = 0;
let value4 = 0;
let value5 = 0;
let value6 = 0;
let value7 = 0;
let value8 = 0;
let value9 = 0;
let value10 = 0;
let value11 = 0;
let value12 = 0;
for(let i=0; i<50; i++)
{
  let month = Math.floor(Math.random()*100)%12+1;
  //console.log(month);
  switch(month)
  {
    case 1:
      value1++;
      resultMap.set(1,value1);
      break;
    case 2:
      value2++;
      resultMap.set(2,value2);
      break;
    case 3:
      value3++;
      resultMap.set(3,value3);
      break;
    case 4:
      value4++;
      resultMap.set(4,value4);
      break;
    case 5:
      value5++;
      resultMap.set(5,value5);
      break;
    case 6:
      value6++;
      resultMap.set(6,value6);
      break;
    case 7:
      value7++;
      resultMap.set(7,value7);
      break;
    case 8:
      value8++;
      resultMap.set(8,value8);
      break;
    case 9:
      value9++;
      resultMap.set(9,value9);
      break;
    case 10:
      value10++;
      resultMap.set(10,value10);
      break;
    case 11:
      value11++;
      resultMap.set(11,value11);
      break;
    case 12:
      value12++;
      resultMap.set(12,value12);
      break;
  }
}
// console.log(resultMap);
for(let[key, val] of resultMap) 
{
  console.log(key+"th Month", val+" Individuals");
}