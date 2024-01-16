let arr = document.querySelectorAll('.item')
var counter = 0
  for(let i of arr){
    i.addEventListener('click', function(){
      if(this.innerText == ""){
      counter%2==0 ?  this.innerText = "X" :  this.innerText = "O"
      check()
       counter ++
      
      }
      
    })
}
function check(){
   if(arr[0].innerText == arr[1].innerText && arr[0].innerText == arr[2].innerText
   && arr[0].innerText != "") {
      console.log('winner')  
      disable()
   }
}
function disable(){
   for(let i of arr){
      i.style.pointerEvents = 'none'
   }
}
