let returnArray = new Array()
function toUpper (str1, str2, str3) { 
  for (let i = 0; i < arguments.length; i++) {
    returnArray[i] = arguments[i].toUpperCase();
    }
    return returnArray;
}

function reverseString(str) {
    return string = str.split("").reverse().join("");
}

let me = {
    name: "Kathleen",
    age: 21,
    hobbies: ["programming", "singing", "politics"],
    formatAge() {
        return 2018 - this.age;
    },
    getInfo() {
        return `I am ${this.name}. I was born in ${this.formatAge()} and my hobbies are ${this.hobbies.join(", ")}.`;
    }
}

let applyFn = (arr, cb) => {
    for (let i = 0; i < arr.length; i++) {
        cb(arr[i])
    }
}

applyFn([1, 2, 3, 4], console.log)