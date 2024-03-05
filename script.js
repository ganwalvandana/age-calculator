const userDate = document.getElementById("date");
const userMonth = document.getElementById("month");
const userYear = document.getElementById("year");

const errorMessage = document.querySelectorAll(".errMessage");

const button = document.getElementById("submitBtn");

const calcYears = document.getElementById("years");
const calcMonths = document.getElementById("months");
const calcDays = document.getElementById("days");


const form = document.getElementById("form");

form.addEventListener('submit', (e) => {
    if (!form.checkValidity()) {
        e.preventDefault();
    }
    form.classList.add('was-validated');
    message()
})

const message = () => {
    if (userDate.value == "") {
        errorMessage[0].innerText = "This field is required";
    } else if (userDate.value == "novalidate") {
        errorMessage[0].innerText = "Right date is required";
    }else {
        errorMessage[0].innerText = "Right";
    };
    if (userMonth.value == "") {
        errorMessage[1].innerText = "This field is required";
    } else if (userMonth.value == "novalidate") {
        errorMessage[1].innerText = "Right month is required";
    }else {
        errorMessage[1].innerText = "Right";
    };
    if (userYear.value == "") {
        errorMessage[2].innerText = "This field is required";
    } else if (userYear.value == "novalidate") {
        errorMessage[2].innerText = "Right year is required";
    }else {
        errorMessage[2].innerText = "Right";
    }
}










const date = new Date();
let day = date.getDate();
let month = date.getMonth() + 1;
let year = date.getFullYear();
let time = date.getTime();

let currDate = `${day}-${month}-${year}`;
console.log(currDate); 


// const getAge = (d1, d2) => {
//     d2 = d2 || new Date();

//     let diff = d2.getTime() - d1.getTime();
//     return Math.floor(diff/ (1000 * 60 * 60 * 24 * 365.25));
// }

// console.log(getAge(new Date(1998, 8, 12)));

// button.addEventListener("onclick", () => {

// })










// console.log(userDate.value);
// console.log(userMonth);
// console.log(userYear);

// const userdob = () => {

// }

// const userDob = (date, month, year) => {
//    year = userYear <= currYear && userYear >= 1;
//    month = userMonth <=12 && userMonth >=1;
//    let date = (
//     if(userMonth == ["1", "3", "5", "7", "8", "10", "12"]){
//         date = userDate <= 31 && userDate >= 1
//     } else if ( userMonth == "2" && (userYear % 4 == 0 || userYear % 100 == 0) {
//         date 
//     }
//     )
//    )
// }
