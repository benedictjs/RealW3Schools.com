export function headFun(name){

if(name.length<=4){
    return name.toUpperCase()
}
else{
    return name[0].toUpperCase()+name.slice(1)
}
}
