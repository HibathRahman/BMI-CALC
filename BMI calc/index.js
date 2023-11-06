function calculatebmi(){
let weight =  document.getElementById('weight').value
let height = document.getElementById('height').value

 let bmicalculator = weight / (height * height)
 // alert(bmicalculator);
 document.getElementById('heading').innerHTML = 'Your BMI is :'
 document.getElementById('bmioutput').innerHTML = bmicalculator.toFixed(2);

 if( bmicalculator <= 24.9){
   document.getElementById('message').innerHTML = 'you are underweight'
 }else if (bmicalculator  >=  25 && bmicalculator <= 29){
   document.getElementById('message').innerHTML = 'you are healthy weight '
 }else{
    document.getElementById('message').innerHTML = 'you are over weight '
 }
}

function reload(){
  window.location.reload()
}
