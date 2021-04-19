// Number 1
// (normal function example)
// // function add(firstnumber,secondnumber){
// //     console.log(firstnumber,secondnumber)
// //     var result=firstnumber+secondnumber;
// //     console.log(result);
// // }
// // add(15,15);

// (normal function example sub of 3 numbers)
// function sub(no1,no2,no3){
//     console.log(no1,no2,no3)
//     var answer=no1-no2-no3;
//     console.log(answer);
// }
// sub(12,10,1);

// Number 2 function with return property
// (function with return type)
// function add(first,second){
//     console.log(first,second);
//     var result=first+second;
//     return(result);
// }
// var answer=add(12,12) //printing the answer using the var and assigning add variable to the answer return 
// // console.log(answer); // printing the number here using number


// Number 3 Parameterised function
// function add(num1,num2){
//     console.log(arguments)//setting the validation here to set the limit of validations
//     console.log(num1+num2);// assigning 2 numbers here

//     if(arguments.length ==2)// applying conditons here 
//     {
//         return num1+num2; // if the argument lenght is correct then this return occur
//     }
//     return"please send only 2 numbers";// or this will occur if the number is greater then 2 numbers.
// }
// var r=add(10,12); //making the r function to call the add function here
// console.log("r",r);//printing the r function here using "r for 
// name of the class and another r for the answer"

// function values(n1,n2){
//     console.log(arguments);
//     console.log(n1,n2);

//     if(arguments.lenght ===2){
//         return n1+n2;
//     }
//     return "put only 2 numbes"
// }
// var answer=values(5,1);
// console.log("answer",answer)

// //Number 4 IIFE
// (function bob(){ // bob is the name of the function
//     var f1="sahil"; // inputing some values or some info in f1 using var
//     console.log(f1) //calling the f1 input
// })()  //() this a calle which calls the function immediately 

// (function val(num1){
//     var num1="30";
//     if(num1 <15){
//        console.log("you have entered right number")
//     }
//     else{
//         console.log("wrong number") 
//     }
//     console.log(num1)
// })()

// // 5 anonymous function here no name of the function 
// will be given here and we can call this function using iife only 
// and we can call through paramters also
// (function(){  example 1
//      console.log("of")
// })()

// (function(){ example 2
//     var no=5;
//      if(no==5){
//          console.log("correct number")
//      }
//      else{
//          console.log("wrong number")
//      }
// })()

// (function(){  example 3
//   var no=8;
//   var no1=5;
//   var answer=no+no1;
//   if(answer==10){
//       console.log("answer is correct")
//   }
//   else{
//       console.log("incorrect answer")
//   }
// })()

// 6  higher order function

// function sayhello(callfunction){   example 1
//     callfunction();
// }
// function print(){
//     console.log("print")
// }
// sayhello(print);

// function add(sum){
//     sum();
// }
// function print(){ example 2
//     var no1=10;
//     var no2=20;
//     var answer=no1+no2;
//     console.log("answer",answer);
// }
// add(print);

// function add(sum){   example 3
//     sum();
// }
// function print(){
//     var no1=20;
//     var no2=20;
//     var answer=no1+no2;
//     if(answer==30){
//         console.log("the answer is correct")
//     }
//     else{
//         console.log("the answer is inncorect")
//     }
//     console.log("answer",answer);
// }
// add(print);

// 8 pure function

// function incrementbytwo(val){
//     return val +2;
// }
// console.log(incrementbytwo(2));

// function add(val,val1){

//     var answer =val+val1;
//     return answer;
// }
// console.log(add(10,20));

// 9 impure function 
// function incrementbyrandon(val){
//     return val(math.random()*1000);
// }
// console.log(incrementbyrandon(2))

// // 10 recursion function   
// in the recursion function it says that in this function 
// the function will repeat itself during its execution 
// and the exit criteria is very important in recursion function

// function hello(number){   example 1
//     console.log("hello",number);

//     if(number >0){
//         number =number -1;
//         hello(number)
//     }
// }hello(10)
// example 2

// here i have said that if the answer is equal to 30 them 
// only my answer will be printed if the answer is less than 30 
// then the answer will not be dispayed.
// function add(answer){
//     if(answer ==30){
//          console.log("add",answer)
//     }
// }add(30)

// 11 anonymous function with parameter with recursion calling

// var test=function(val){
//     console.log("answer")
//     if(val>0){

//     }
// }

//  12 arrow function
// this is modern day way to replace with the function name 

// (()=>{
//     console.log("hello")
// })()

// var test =()=>{
//     console.log("hello");
//      if(test<=0){
//       console.log("bad figure")
//      }
// }
// test(10)
