import { arrfirstFive } from "./alldata.js"
import { headFun } from "./funcs.js"
const firEl=document.getElementById('firstFiveLang')
arrfirstFive.map((x,r)=>{
    const nam=x.name
const boosdiv=document.createElement('div')
boosdiv.classList.add('boos')
boosdiv.style.backgroundColor=x.color
boosdiv.style.color=r==2?'white':'black'
const butDivs=document.createElement('div')
butDivs.classList.add('butsText')
const ExampleDivs=document.createElement('div')
ExampleDivs.classList.add('exa')
const vlas=x.topics.length
console.log(vlas)
butDivs.innerHTML=`<h1>${headFun(x.name)}</h1>
<p>${x.defination[0].toUpperCase()+x.defination.slice(1)}</p>
<div class='butsin' style=height:${vlas*75}px>
${toreturnButs(x,nam).join('')}
</div>`
boosdiv.appendChild(butDivs)
const he=x.expample[0].header.split(' ')[0]
ExampleDivs.innerHTML=`<h1>${headFun(he)+' Example'}</h1>
<div class='show'>${showFun(x).join('')}</div>
<button>${x.expample[0].try}</button>
`
boosdiv.appendChild(ExampleDivs)
firEl.appendChild(boosdiv)
})


function toreturnButs(obj,nam){
let arr1=[]
const rege=new RegExp(nam,'i')
const clol=['#32B375','#FFF173','#4A3D42','#E49BAB']
for(let i in obj.topics){
    let val=obj.topics[i]
    if(rege.test(val) && nam.length<4){
       val= val.replace(rege,nam.toUpperCase())
    }
    arr1.push(`<button style='background-color:${clol[i]}; color:${colfun(i)}'>${headFun(val)}</button>` )
}
return arr1
}
function colfun(i){
    if(i==0||i==2)
    return 'white'
else{return 'black'}
}
function showFun(obj1){
     const vlas=obj1.expample[0].textContent
     console.log(vlas)
     return vlas.map(x=>{
        return `<p>&lt${x}&gt</p>`
     })
}