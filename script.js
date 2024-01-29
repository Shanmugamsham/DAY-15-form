
let firsr_name=document.getElementById("fname").value;
let last_name=document.getElementById("lname").value;
let address=document.getElementById("Adre").value;
let pincode=document.getElementById("pin").value;
let state=document.getElementById("State").value;
let country=document.getElementById("Country").value;



let list1=[]
let list2=[]
let list3=[]
let list4=[]
let list5=[]
let list6=[]

let n=1
let x=0

function Result(){

let firsr_name=document.getElementById("fname").value;
let last_name=document.getElementById("lname").value;
let address=document.getElementById("Adre").value;
let pincode=document.getElementById("pin").value;
let state=document.getElementById("State").value;
let country=document.getElementById("Country").value;


let addrow=document.getElementById("show");
let newrow=addrow.insertRow(n);

list1[x]=firsr_name;
list2[x]=last_name;
list3[x]=address;
list4[x]=pincode;
list5[x]=state;
list6[x]=country;

let cel1=newrow.insertCell(0);
let cel2=newrow.insertCell(1);
let cel3=newrow.insertCell(2);
let cel4=newrow.insertCell(3);
let cel5=newrow.insertCell(4);
let cel6=newrow.insertCell(5);

cel1.innerHTML=list1[x];
cel2.innerHTML=list2[x];
cel3.innerHTML=list3[x];
cel4.innerHTML=list4[x];
cel5.innerHTML=list5[x];
cel6.innerHTML=list6[x];

n++
x++


}

function Clear(){
    
    let firsr_name=document.getElementById("fname").value="";
let last_name=document.getElementById("lname").value="";
let address=document.getElementById("Adre").value="";
let pincode=document.getElementById("pin").value="";
let state=document.getElementById("State").value="";
let country=document.getElementById("Country").value="";
console.log(firsr_name,last_name,pincode,address,country)


}


