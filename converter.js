
  let pound=document.getElementById("pound")
  let kg=document.getElementById("kg")
  let ounce=document.getElementById('ounce') 
  let cup=document.getElementById("cup")
  let gallon=document.getElementById("gallon")
  let ounces=document.getElementById('ounces') 
  let mile=document.getElementById("mile")
  let kilometer=document.getElementById("kilometer")
  let feet=document.getElementById('feet') 
  let celsius=document.getElementById("celsius")
  let fahrenheit=document.getElementById('fahrenheit') 
  function clearAll() {   
    let inputs = document.getElementsByTagName('input');
    for (let i of inputs) {
        i.value="";
    }
}

if(pound!==null){
pound.addEventListener("input",function (){
     kg.value=(pound.value/2.2046).toFixed(2);
     ounce.value=(pound.value*16).toFixed(2);}
  
)}



if(kg!==null){
kg.addEventListener("input",function (){
      pound.value=(kg.value*2.2046).toFixed(2);
      ounce.value=(kg.value*35.274).toFixed(2);
    }
)}
if(ounce!==null){
ounce.addEventListener("input",function (){
    pound.value=(ounce.value*0.0625).toFixed(2);
    kg.value=(ounce.value*0.0283495).toFixed(2);}
)}

if(cup!==null){
cup.addEventListener("input",function (){
       gallon.value=(cup.value*0.0625).toFixed(2);
       ounces.value=(cup.value*8).toFixed(2);}
      
  )}
  if(gallon!==null){
gallon.addEventListener("input",function (){
        cup.value=(gallon.value*16).toFixed(2);
        ounces.value=(gallon.value*128).toFixed(2);
      }
  )}
  if(ounces!==null){
 ounces.addEventListener("input",function (){
      cup.value=(ounces.value*0.125).toFixed(2);
      gallon.value=(ounces.value*128).toFixed(2);}
  )}

  if(kilometer!==null){
    kilometer.addEventListener("input",function (){
           mile.value=(kilometer.value*0.621371).toFixed(2);
           feet.value=(kilometer.value*3280.84).toFixed(2);}
          
      )}
      if(mile!==null){
    mile.addEventListener("input",function (){
            kilometer.value=(mile.value*1.60934).toFixed(2);
            feet.value=(mile.value*5280).toFixed(2);
          }
      )}
      if(feet!==null){
     feet.addEventListener("input",function (){
         mile.value=(feet.value*0.000189394).toFixed(2);
         kilometer.value=(feet.value*0.0003048).toFixed(2);}
      )}
      
      
      if(celsius!==null){
        celsius.addEventListener("input",function (){
          fahrenheit.value=(celsius.value*1.8+32).toFixed(2);
              
                  }
              )}
      if(fahrenheit!==null){
          fahrenheit.addEventListener("input",function (){
            celsius.value=((fahrenheit.value-32)/1.8).toFixed(2);
             }
              )}
            

let text = encodeURIComponent("Metrics Converter is such a good help.");
let url = "https://medium.com/"; 
let user_id = "jagathish1123";
let hash_tags = "WeightConverter,DistanceCoverter,VolumeConverter,Temperature";
let params = "menubar=no,toolbar=no,status=no,width=570,height=570"; // for window
let desc="share this great tool:https://laurelhxy.github.io/final-project/home.html";
let facebook = document.querySelector('.facebook');
let twitter = document.querySelector('.twitter');
let email=document.querySelector('.email');

facebook.addEventListener('click', function(ev) {
  console.log("hi");
    
    let shareUrl = `http://www.facebook.com/sharer/sharer.php?u=${url}`;
    window.open(shareUrl,"NewWindow" , params);  
});
twitter.addEventListener('click', function(ev) {
  let shareUrl = `https://twitter.com/intent/tweet?url=${url}&text=${text}&via=${user_id}&hashtags=${hash_tags}`;
    window.open(shareUrl,"NewWindow" , params);
});
email.addEventListener('click', function(ev) {
  let shareUrl =`mailto:?subject=${text}&body=${desc}`;
  window.open(shareUrl,"NewWindow" , params);
})
              
              
                    