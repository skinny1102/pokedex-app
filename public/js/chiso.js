var heightInch = document.querySelector('.gr-height-dl').textContent
var heightCm= heightInch*2.54
document.querySelector('.gr-height-dl').textContent = Math.ceil(heightCm) + ' cm'

var weightPounds = document.querySelector('.gr-weight-dl').textContent
var weightKg = (weightPounds/10) *0.45359237
document.querySelector('.gr-weight-dl').textContent = Math.ceil(weightKg) + ' kg'

var type2 = document.querySelectorAll(".type2")
var type1 = document.querySelectorAll(".type1")

type1.forEach(function(typeOne,indextype1){
        type2.forEach(function(typeTwo,indextype2){
                if(indextype1==indextype2){
                    if(typeTwo.textContent==''){
                           typeTwo.classList.add('bgwhite')
                    }
                    if(typeOne.textContent==''&&typeTwo.textContent!=''){
                        typeOne.textContent =typeTwo.textContent
                       typeTwo.textContent=''
                        typeTwo.classList.add('bgwhite')
                    }else if(typeOne.textContent==''&&typeTwo.textContent==''){
                        typeOne.classList.add('bgwhite')
                    }
                    
                }
                
        })
})



/// Stats 
var chiso = document.querySelectorAll('.gauge li.meter')
chiso.forEach((element,index)=>{
    var value = element.getAttribute('data-value')

    var parentUl = element.parentElement
    var childLi = parentUl.children
    var prs = 16-value;
    
    for(let i=0 ; i <childLi.length;i++){
             if(prs<=i){
                childLi[i].classList.add('stats-row-color')
             }
      
    }
  
})