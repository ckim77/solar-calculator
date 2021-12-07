// JavaScript Document


let foundYou = document.getElementById('myForm')
console.log(foundYou)

let selectArray = foundYou.getElementsByTagName('input');
console.log(selectArray)

for (i=0; i < selectArray.length; i++) {
    console.log(selectArray[i])
}