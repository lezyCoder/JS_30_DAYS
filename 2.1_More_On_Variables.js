

//  Variable Declaration Using "let" keyword 

 1) Variable declare using let keyword can be reassigned and it have block scope.

 2) Variable using let keyword must be decalred/created before use.


 let x =23;
 {
    console.log("Inside the scope");
    let x = 10;
    x=20;
    console.log(x);
 }

 console.log(x);


 
//  Variable Declaration Using "const" keyword 

1) Variable declared with the const keyword must have value assigned to it otherwise it will through
an error i.e TypeError

2) Variable declared with the const keyword cannot reassigned to new value.

Example :


const value = 23 ;

value = 16 ; // this is not allowed 