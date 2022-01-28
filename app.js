let array = []
let a;
for (let a = 1; a <= 100; a++) {
        array.push(a);   
}

function filter(){
    let a = array.filter(div5)
    return a;
}

function div5(a){
    return a%5==0;
}

function add(array){
 let res= array.reduce((acc,cur)=>{
     return acc +cur;
 },0);
return res;
}

console.log(add(filter()))
