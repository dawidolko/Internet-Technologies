var a = 0;
console.log(a);

const b = 1;
console.log(b);

// b+=1; // error
try{
    b+=1;
} catch(e){
    console.log(e);
}

let c = 1; 
console.log(c);
c = 'string';
console.log(c);


export {abc, sad};

function abc(){
    console.log('abc');
    return 0;
}

console.log(abc());


function bac(){
    console.log('bac');
    return 0;
}

const sad = () => {
    console.log('sad');
}