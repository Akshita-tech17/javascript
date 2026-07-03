const doc =document.querySelector("form")

//const height= parseInt(document.querySelector('#height').value)  if yaha likhte to har bar variable empty value store krta
doc.addEventListener('submit',function(energy){
  energy.preventDefault()

  const height= parseInt(document.querySelector('#height').value)
  const weight= parseInt(document.querySelector('#weight').value)
  const results= document.querySelector('#results')

  if (height<0 || isNaN(height)){
    results.innerHTML=`Please give a valid height ${height}`;
    // return;
  }
  // results.innerHTML=`${height}`

  else if ( weight<0 || isNaN(weight)){
    results.innerHTML=`please enter the valid weight `
    // return ;
  }
  // results.innerHTML=`<span>${weight}</span>`
  else {
    const BMI = weight/((height*height)/10000)
    results.innerHTML=`${BMI}`

    if (BMI <18.6){
      results.innerHTML="Underweight"
    }
    else if (BMI>18.6  && BMI<24.9){
      results.innerHTML="Normal range "
    }
    else{
      results.innerHTML="overweight"
    }
  }

})
