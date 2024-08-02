// let arry = ["a","b","c","d","e","f","g","h", "i"];
let arry = 1;

let a = arry.length;

function checkOddOrEven(arry){
    if (a % 2 === 0) {
        console.log(a);
    }
    
    else {
        let mid = (a-1)/2;

        console.log(arry[mid]);
    }
}

checkOddOrEven(arry);