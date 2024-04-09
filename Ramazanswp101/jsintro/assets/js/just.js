// let students=[
//     {id:1, name: "Ali", surname: "Alisoy", age:20, grade: 95},
//     {id:2, name: "Vusala", surname: "Nabiyeva", age:34, grade: 77},
//     {id:3, name: "Aliya", surname: "Gurbanzade", age:14, grade: 98},
//     {id:4, name: "Sabir", surname: "Nuruyev", age:15, grade: 54},
//     {id:5, name: "Mehman", surname: "Heydarov", age:22, grade: 100},
//     {id:6, name: "Sevana", surname: "Mammadli", age:41, grade: 35},
//     {id:7, name: "Ilham", surname: "Babayev", age:24, grade: 95},
//     {id:8, name: "Namiq", surname: "Gulahmedov", age:20, grade: 95},
//     {id:9, name: "Aygun", surname: "Kazimova", age:24, grade: 100}
//     ]

// if (students.age > 18) {
//     alert(students.name + ' Yasi ; ' , students.grade)
// }

// let a  = prompt('Yasinizi daxil edin :');
// let a = prompt('a-nin qiymetini qeyd edin :')
// let b = prompt('b-nin qiymetini qeyd edin :')
// let c = prompt('c-nin qiymetini qeyd edin :')
// let discriminant = b**2-4*a*c
// let root1=(-b + Math.sqrt(discriminant)) / ( 2 * a);
// let root2=(-b - Math.sqrt(discriminant)) / ( 2 * a);
// let root3=(-b) / (2 * a);

// if (discriminant > 0) {
//     alert('kokleri' + root1 + ' biri ' +  ' obirisi ise ' + root2)
// } else if ( discriminant === 0) {
//     alert('koku yoxdur:')
// } else  {
//     alert(root3)
// }

let a =prompt('a reqemini daxil edin :')
let b =prompt('b reqemini daxil edin :')


for (let i = a; i <= b; i++) {  
    if ( i % 7==0) {
       console.log(i); 
    }
   
}