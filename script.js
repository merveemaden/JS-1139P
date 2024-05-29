function skoruArttirA(){
const takimSkorElement=document.getElementById("skorA")
let skor=parseInt(takimSkorElement.innerHTML)
takimSkorElement.innerHTML=++skor;
}
function skoruArttirB(){
    const takimSkorElement=document.getElementById("skorB")
    let skor=parseInt(takimSkorElement.innerHTML)
    takimSkorElement.innerHTML=++skor;
    }
function skoruAzaltA(){
    const takimSkorElement=document.getElementById("skorA")
    let skor=parseInt(takimSkorElement.innerHTML)
    if(skor > 0) {
    takimSkorElement.innerHTML=--skor;
}else {
    alert( "A Takımının Skoru Sıfırdan Küçük Olamaz")
}
}
function skoruAzaltB(){
    const takimSkorElement=document.getElementById("skorB")
    let skor=parseInt(takimSkorElement.innerHTML)
    if( skor>0){
    takimSkorElement.innerHTML=--skor;
}else {
    alert( "B Takımının Skoru Sıfırdan Küçük Olamaz")
}
}
function skoruSifirlaA(){
    const takimSkorElement=document.getElementById("skorA")
   takimSkorElement.innerHTML=0
}
function skoruSifirlaB(){
    const takimSkorElement=document.getElementById("skorB")
   takimSkorElement.innerHTML=0
}
function takimAdiDegistirA() {
    const alinanTakimIsmi=prompt ("A takımı içim isim giriniz")
    if(alinanTakimIsmi.lenght > 0){
        const takimIsmiElement=document.getElementById("İsimA")
       takimIsmiElement.innerHTML=alinanTakimIsmi
    }else{
        alert("Bir isim girilmedi")
    }
  
}
function takimAdiDegistirB(){
    const alinanTakimIsmi=prompt ("B takımı içim isim giriniz")
    if(alinanTakimIsmi.lenght > 0){
       const takimIsmiElement=document.getElementById("İsimB")
       takimIsmiElement.innerHTML=alinanTakimIsmi
    }else{
        alert("Bir isim girilmedi")
    }
    
 }
 function takimSkoruDegistirA (){
    const alinanTakimSkoru=prompt("A takımının skorunu giriniz.")
    let skor=parseInt(alinanTakimSkoru)
   if (!isNaN(skor)){
    const takimSkorElement=document.getElementById("skorA")
    takimSkorElement.innerHTML=skor
   }else {
    alert("Lütfen geçerli bir sayı giriniz.")
   }

 }
 function takimSkoruDegistirB (){
    const alinanTakimSkoru=prompt("B takımının skorunu giriniz.")
    let skor=parseInt(alinanTakimSkoru)
    if (!isNaN(skor)){
     const takimSkorElement=document.getElementById("skorA")
     takimSkorElement.innerHTML=skor
    }else {
     alert("Lütfen geçerli bir sayı giriniz.")
    }
   
 }