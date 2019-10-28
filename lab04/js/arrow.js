const func1 = () => {
    console.log('Just a simple function');
}

const func2 = () => 2; // <=> return 2;

const func3 = (a, b) => a+b; 

const func4 = (a, b) => {
    return {
        a,
        b
    }
};

const func4 = (a, b) => {
    console.log("I'm doing some additional processing");
    return a+b;
}

func1();
console.log(func2());
console.log(func3(3,4));
console.log(func4(3,5));
console.log(func4(3,4));