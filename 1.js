function random5(){
    return Math.floor(Math.random() * 6)
}

var rand5 = random5()

console.log("The output of random8() using random5() function is " + (rand5 * 9 + rand5) / 5)