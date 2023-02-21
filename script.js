const student = "Зайроятьнц Захар Денисович "; 
document.getElementById("student").innerHTML = student;


function getRandomIntInclusive(min, max) {  
  min = Math.ceil(min);  
  max = Math.floor(max);  
 return Math.floor(Math.random() * (max - min + 1)) + min; 
 }
  function throwRandomError(errorRate) {   
 
   if (getRandomIntInclusive(0 , 100) <= errorRate) {  
      throw new Error('где-то произошла ошибка');
}
}
const errorRate = 0.2; 

try 
{
  throwRandomError(errorRate) ;  
  
  alert('все работает отлично '); 
  
  } 
  catch (err) 
  {
 alert ('произошла ошибка'); 
  console.log(err); 
  }
