// Checking if a number is big
const check = function(number) {
    if (number > 100) {
        return true;
    }
    else {
        return false;
    }
    
};
console.log(check(50));
console.log(check(100));
console.log(check(200));

// Function that produce somthing

/* Bonus Answer 
const check = function(number) {
    return number > 100;
}; */

// Bouncer at a club
const bouncer = function(maxNumberOfGuest, currentNumberOfGuest, ageOfGuest) {
    if (ageOfGuest < 21) {
        return "this is a club for adults";
    }
    if (currentNumberOfGuest >= maxNumberOfGuest) {
        return "it's too busy now, come back later";
    }
    else {
        return "Come in"
    }

};
console.log(bouncer(100, 50, 18));
console.log(bouncer(40, 30, 22));
console.log(bouncer(50, 51, 30));

// Calculating the average
const average = function(nomer1, nomer2, nomer3, nomer4, nomer5) {
    const total = nomer1 + nomer2 + nomer3 + nomer4 + nomer5;
    const calculate = total / 5;
        return calculate;
      /*  const avarage = Math.round(calculate);
        return average; */ // others way
};
console.log(average(5, 6, 7, 8, 9)); // avarage:7
console.log(average(100, 200, 600, 700, 0)); // Avarage:320



// Functions that produce somthing