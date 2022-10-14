//Task 1
/*
    გვაქვს factory ობიექტი , რომელსაც აქვს რამდენიმე key-value წყვილი , 
    ასევე მეთოდი calculateWorkload - აბრუნებს მხოლოდ თანამშრომლის შესრულებული სამუშაოების მასივს (მაგალითის მიხედვით [40,25,28,30,31])
    და formatArray - რომელსაც გადაეცემა თანამშრომლის სახელი და აბრუნებს  ობიექტს თანამშრომლის სახელი  და ხელშეკრულების ამოწურვამდე
    დარჩენილი დროის მნშვნელობებით. ხელშეკრულების პერიოდი ყველა თანამშრომლისთვის არის 5 წელი. 
    მაგალითად ('John' ის შემთხვევაში დაგვიბრუნდება {name : "John", timeLeft : 4}) timeleft = 5 - timespent;
    გვაქვს 
    დალოგეთ calculateWorkload და formatArray შედეგები; 
    !!!აუცილებლად გამოიყენეთ bind მეთოდი
*/
let factory = {
  facName: "Volkswagen Wolfsburg Plant",
  calculateWorkload: function () {
    for(let i = 0;i < employeeWeeklyWorkload.length;i++){
      return this.workloadData.employeeWeeklyWorkload[i].workload;
    }
  },
  formatArray: function (name) {

  },
};

let factoryEmployees = {
  employees: [
    { name: "John", timeSpent: 1 },
    { name: "Sam", timeSpent: 3 },
    { name: "Maria", timeSpent: 2 },
    { name: "Dan", timeSpent: 4 },
    { name: "Lorelai", timeSpent: 5 },
  ],
  employeeNum: this.employees.length,
};

let workloadData = {
  employeeWeeklyWorkload: [
    { name: "John", workload: 40 },
    { name: "Sam", workload: 25 },
    { name: "Maria", workload: 28 },
    { name: "Dan", workload: 30 },
    { name: "Lorelai", workload: 31 },
  ],
};
let calculateWorkload = factory.calculateWorkload.bind(workloadData);
//error.....



// console.log(workloadData.employeeWeeklyWorkload[3].workload);
//erorrr



//Task 2

/*
დაწერეთ ფუნქცია sumOfNumbers , რომელიც დააბრუნებს გადაცემული არგუმენტების ჯამს
აღნიშნული ფუნქცია გაუშვით applyს საშუალებით, შესაბამისად არგუმენტებიც applyს მეშვეობით უნდა გადაცეთ.

hint :  თუ კი ფუნქციაში არ გვაქვს this ქივორდის საჭიროება და შესაბამისად ობიექტი რომელსაც
thisმა უნდა მიუთითოს შეგიძლიათ apply call-ს პირველი არგუმენტად გადასცეთ null 
*/

function sumOfNumbers(...args){
  let sum = 0;
  for(let i = 0; i<args.length;i++){
    sum += args[i];
  }
  return sum;
}
let sum = sumOfNumbers.apply(null,[2,5,6,7,2,1,3]);

console.log(sum);

/*
const arrNums = [1,2,3,4,5,6]
const sumOfNumbers = function(total, num){
  return total + Math.round(num);
}
let totalOfNum = arrNums.reduce(sumOfNumbers);
console.log(totalOfNum); */

//Task 3

const Vehicle = {
  name: "Vehicle",
  type: "vehicle",
  start: function () {
    return `starting the ${this.name} ${this.type}`;
  },
  stop: function () {
    return `stopped the ${this.name} ${this.type}`;
  },
};


let car = {
  name: "Vehicle",
  type: "vehicle",
};
let stopFunction = Vehicle.stop.bind(car)();
let startFunction = Vehicle.start.bind(car)();
console.log(startFunction);
console.log(stopFunction);

/* 
    შექმენით ახალი ობიექტი car რომელსაც ექნება ორი key name და type , გამოიძახეთ start და stop მეთოდები 
    ამ ობიექტისთვის
*/

//Task 4

//გამოიყენეთ Math და apply მაქსიმალური მნიშვნელობის დასათვლელად მასივიდან

const arr = [12, 23, 34, 56, 2];

let max = Math.max.apply(Math,arr);
console.log(max);













