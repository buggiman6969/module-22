// math pow
const result = Math.pow(4, 3);
console.log(result);

// math abs
const math1 = 45;
const math2 = 85;

const gap = Math.abs(math1 - math2);

if (gap < 5) {
    console.log("bondhu hou");
}
else {
    console.log("dure soro");
}

// . to absolute number
const number = 265.65454;
const fullnum = Math.round(number);
console.log(fullnum);

// random number

for (let i = 0; i < 6; i++) {
    const random = Math.round(Math.random() * 6);
    console.log(random);
}
