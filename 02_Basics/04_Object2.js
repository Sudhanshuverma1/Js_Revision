// const tinderUser = new Object ()|
//note: singleton object 

const tinderUser ={}  // this is object literal non singleton object
tinderUser.id = '12345';
tinderUser.name = 'Sudhanshu';
tinderUser.isLoggedIn = false;
//console.log(tinderUser);

const regularUser = {
    email: 'sudhanhu@xhem.com',
    fullname: {
        userfullname:{
            firstname: 'Sudhanshu',
            lastname: 'Verma',
        }
    }
}
//console.log(regularUser.fullname.userfullname);

// const arr = [1, 2, 3, 4, 5];
// const arr2 = [6, 7, 8, 9, 10];
//  console.log(arr.map(x=> x*2));

const obj1 = {1:'a',2:'b',3:'c'};
const obj2 = {4:'d',5:'e',6:'f'};
// const obj3 = {...obj1,...obj2};
// console.log(obj3);
const obj3 = Object.assign({}, obj1,obj2);
// console.log(obj3);
const obj4 ={...obj1, ...obj2,};
// console.log(obj4);

const user = [
    {
        id:123,
        name:'Sudhanshu',
        age:23,
    
    },
    {
    id:456,
    name:'Rohit',
    age:15,
    },
    {
    id:789,
    name:'Rahul',
    age:20,
    }

]
//console.log(user[2].name);
// console.log(tinderUser)
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));


const course = {
    coursename: 'JavaScript In Hindi',
    price: 9999,
    courseInstructor: 'Sudhanshu Verma',
    courseContent: ['JavaScript Basics', 'DOM Manipulation', 'ES6 Features', 'Asynchronous JavaScript'],

}
// course.courseInstructor

const {courseInstructor: instructor} = course;
// console.log(courseInstructor);
console.log(instructor);

// {
//     'name': 'Sudhanshu',
//     'coursename': 'JavaScript In Hindi',
//     'price': "free"
// }