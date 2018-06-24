"use strict"
// var a = 10;

// function printText() {
//     var a = 5;
//     console.log(`inside function ${a}`);
//     var a = 20;
//     console.log(`Redeclared inside function ${a}`);
// }

// printText();
// console.log(`declared outside a function ${a}`);

// let b = 15;
// function printOld() {
//     let b = 20;
//     console.log(`declared inside a block ${b}`);
//     if(1){
//         let b = 2;
//         console.log(`Redeclared inside a block ${b}`);
//     }
// }
// printOld();
// console.log(`declared outside a block ${b}`);


// function add() {
//     let a = Number(document.getElementById('first').value);
//     let b = Number(document.getElementById('second').value);
//     let ans = a + b;
//     console.log(ans);
// }



// let Person = function(name,age,sex){
//     this.Name = name;
//     this.Age = age;
//     this.Sex = sex;
// }

// let Student1 = new Person('Goutham',27,'Male');
// // console.log(Student1.Name);


// class person{
//     constructor(fname,lname,age,sex){
//         this.firstName = fname;
//         this.lastName = lname;
//         this.Age = age;
//         this.Sex = sex;
//     }
    
//     printAge(){
//         console.log(this.Age);
//     }
// }

// let person1 = new person('Goutham','Somasundaram',26,'Male');
// // person1.printAge();

// class student extends person{
//     constructor(fname,lname,age,sex,test1,test2){
//         super(fname,lname,age,sex);
//         this.Test1 = test1;
//         this.Test2 = test2;
//     }

//     avg() {
//         let result = (this.Test1 + this.Test2)/2;
//         console.log(result);
//     }
// }

// let student100 = new student('Goutham','Somasundaram',27,'Male',70,85);
// student100.avg();
// student100.printAge();


// let birthArray = ['06-25','01-11','09-29'];
// let reformatBirthArray = [];
// birthArray.forEach(function(value){
//     reformatBirthArray.push((value.replace('-','/')));
// })
// console.log(reformatBirthArray);



const carArray =
[
    {type:"Fiat", model:"500", color:"white"},
    {type:"BMW", model:"500", color:"white"},
    {type:"Porsche", model:"5", color:"Yellow"},
    {type:"Ferrari", model:"200", color:"Red"},
    {type:"Chev", model:"150", color:"Black"},
    {type:"Ford", model:"50", color:"Grey"},
    {type:"Mini", model:"500", color:"Orange"},
]

const numberArray =
[
    12,32,45,6,78,90,34,5,67,12,90,87,54,14,43,32
]

// carModelArray.forEach(function displayType(value,index,array){
//     console.log(value.model);
// })

//filter function
// let filteredResult = numberArray.filter(function filter(value,index,array){
//     return value >= 70;
// })
// console.log(filteredResult);

//Filter function using arraow function
// let filteredArray = numberArray.filter(value => value>70);
// console.log(filteredArray);


//Filter objects from carModelArray
// let filteredObject = carModelArray.filter(function(value){
//     if(value.model == 500){
//         return true;
//     }
// })
// console.log(filteredObject);

//Changing the above to fat arrow function
// let filteredObject = carModelArray.filter(value => value.model == 500);
// console.log(filteredObject);

//Map function
//display car type
// let carTypeArray = carModelArray.map(function(value,index,array){
//     return value.type;
// })
// console.log(carTypeArray);

//Fat Arrow Function Style
// let carTypeArray = carArray.map((value)=>value.type);
// console.log(carTypeArray);

//piping the outputs using map operator
// let mapPipedArray = carArray.sort((a,b)=> (b.model - a.model)).map(value=>value.model);
// console.log(mapPipedArray);

//Sorting of Array

//Filtering the old way
// let filterArray = [];
// for(let i=0; i<carArray.length; i++)
// {
//     if(carArray[i].model == 500){
//         filterArray.push(carArray[i]);
//     }
// }
// console.log(filterArray);

//Filter the new way
// let arrayFilter = carArray.filter( value => value.model == 500 );
// console.log(arrayFilter);


//map function old way
//map new way
// let addContent = function(model){
//     return (model == 500) ? 'oldModel' : 'newModel';
// }
// let mappedArray = carArray.map(value =>
//     {
//         return {type:value.type, status:addContent(value.model)}
//     }
//     // [value.type,addContent(value.model)]
// );
// console.log(mappedArray);

//Reduce Function
// let result = carArray.reduce((sum,value)=>sum + Number(value.model),0);
// console.log(result);

//closures
// function init(){
//     let name = 'Goutham';
//     function display(){
//         console.log(name);
//     }
//     display();
// }

// init();


// function greet1(){
//     let name = "goutham";
//     function greet2(){
//         console.log(name);
//     }
//     greet2();
// }

// greet1();


// function first(value, cb){
//     console.log('Goutham');
// }

// function second(value, cb){
//     console.log("Kumar");
// }

// function third(value, cb){
//     console.log("Somasundaram");
// }

// first()

// let printName = new Promise(function(resolve,reject){
// let arrayOne = [1,2,5,7];
// let actualArray = [];
// let val = 0;
// for(let i=1; i<=7; i++){
//     val++;
//     actualArray.push(val);
// }
// console.log(actualArray);
// for(let i=0; i<)


if(arrayData == []){
    console.log('rest');
}
