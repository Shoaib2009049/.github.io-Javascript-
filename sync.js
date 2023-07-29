function one(){
    console.log("One")
}
function two(){
    console.log("two")
}
function three(){
    console.log("three")
}
one()
two()
three()
let i =0
while(i<10){
    setTimeout(()=>{console.log(i)},1000)
    i++
}