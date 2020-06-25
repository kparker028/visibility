// aruguments object - no longer bound with arrow functions

const add =  (a,b) =>{
   // console.log(arguments);
    return a + b;
};
console.log(add(55, 1, 1001));

// this keyword - no longer bound

const user = {
    name: 'kyle',
    cities:['riverton', 'midvale', 'south jordan'],
    printPlacesLived: function () {
       const cityMessages = this.cities.map((city) =>{

        });

        this.cities.forEach( (city) =>{
            console.log(this.name + ' has lived in ' + city);

        });
    }
};
user.printPlacesLived();

//challenge area


 //numbers -array of numbers
    // multiply - single number
    // multiply - return new array where numbers have been multiplied

const multiplier = {
    numbers: [10,20,30],
    multilplyBy: 3,
    multilply(){
        return this.numbers.map((number) => number * this.multilplyBy);
            }

};
   

console.log(multiplier.multilply());