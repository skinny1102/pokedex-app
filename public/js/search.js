var upDateType = ()=>{
    var type2 = document.querySelectorAll(".typePokemon2")
    var type1 = document.querySelectorAll(".typePokemon1")
    type1.forEach(function(typeOne,indextype1){
            type2.forEach(function(typeTwo,indextype2){
                    if(indextype1==indextype2){
                        if(typeTwo.textContent==null ||typeTwo.textContent==''){
                               typeTwo.classList.add('bgwhite')
                        }
                        if(typeOne.textContent==''&&typeTwo.textContent!=''){
                            typeOne.textContent =typeTwo.textContent
                           typeTwo.textContent=''
                            typeTwo.classList.add('bgwhite')
                        }else if(typeOne.textContent=='' &&typeTwo.textContent==''){
                            typeOne.classList.add('bgwhite')
                        }
                        
                    }
                    
            })
    })
    var disabled = document.querySelector('.disabled')
}
upDateType()

var modal_checksearch= $('.modal-check')
$('.header-modal i').on('click',function(){
    modal_checksearch.removeClass('enabled-modal') 
})

$('.close-modal').on('click',function(){
    modal_checksearch.removeClass('enabled-modal') 
})


// $('#btn-search').on('click',function(){
//   var namePokemon= $('.namePokemon').val()
//     if(namePokemon==""){
//         modal_checksearch.addClass('enabled-modal') 
//     }else{
//         showLoading();
//         searchPokemon(namePokemon);
//     }
// })




// var searchPokemon = function(namePokemon){
//     $.ajax({
//         method:'GET',
//         url:'pokemon/name',
//         data:{keyword:namePokemon},
//         success:(data)=>{
//             endLoading()
//             console.log('Thành công')
//             updateUiSearchPokemon(data)

//         },error : ()=>{
//             console.log('Lỗi nào đó')
//         }
//     })

// }

// var showLoading = function(){
//     $('.modal-loading').addClass('enabled-loading')
// }
// var endLoading  = function(){
//     $('.modal-loading').removeClass('enabled-loading')
// }
var updateUiSearchPokemon = function(data){
    console.log(data)
    $(".item-card-pokemon").remove();
    $(".paging-navition ul").remove();
    data.forEach((element,index) => {
        if(element.Type2==null){
            element.Type2=""
        }
        if(element.idPokemon<10){
            element.idPokemon =  '00'+element.idPokemon 
        }if(element.idPokemon>=10&&element.idPokemon <100){
            element.idPokemon =  '0'+element.idPokemon 
        }if(element.idPokemon>=100){
            element.idPokemon = element.idPokemon 
        }
        $(".paging-navition").append(`

        `);

        $(".card-pokemon-content").append(`
        <div class="item-card-pokemon animation-item-search">
                                <a href="/pokemon/${element.idPokemon}">
                                    <div class="item-img-pokemon">
                                    <img   src="${element.image}"/>
                                    </div>
                                    <div class="item-infor-pokemon">
                                            <p>#${element.idPokemon}</p>
                                            <h5>${element.name}</h5>
                                            <div class="item-abilities-pokemon">
                                                <p class="typePokemon1">${element.Type1}</p>
                                                <p class="typePokemon2">${element.Type2}</p>
                                            </div>
                                    </div>
                                </a>
         </div>  
        `)
    });
    upDateType() 
}

// $('#select-sort').on('change',function (evt) {
//     var value = evt.target.value
//    switch (value){
//         case 'none':
//             break
//         case "az":
//              window.location.href="/"
//             break
//         case "za":
//             break
//         default:
//             break
//    }
    

// })
// var getDataAZ = function () {
//     $.ajax({
//         method:'GET',
//         url:'pokemon',
//         success:(data)=>{
//             $(".paging-navition ul").remove();
//             $(".item-card-pokemon").remove();
//             var data2= sapxepAZ(data)
//             data2.forEach((element,index) => {
//                 if(element.Type2==null){
//                     element.Type2=""
//                 }
//                 if(element.idPokemon<10){
//                     element.idPokemon =  '00'+element.idPokemon 
//                 }if(element.idPokemon>=10&&element.idPokemon <100){
//                     element.idPokemon =  '0'+element.idPokemon 
//                 }if(element.idPokemon>=100){
//                     element.idPokemon = element.idPokemon 
//                 }
//                 $(".paging-navition").append(`
        
//                 `);
        
//                 $(".card-pokemon-content").append(`
//                 <div class="item-card-pokemon animation-item-search">
//                                         <a href="/pokemon/${element.idPokemon}">
//                                             <div class="item-img-pokemon">
//                                             <img   src="${element.image}"/>
//                                             </div>
//                                             <div class="item-infor-pokemon">
//                                                     <p>#${element.idPokemon}</p>
//                                                     <h5>${element.name}</h5>
//                                                     <div class="item-abilities-pokemon">
//                                                         <p class="typePokemon1">${element.Type1}</p>
//                                                         <p class="typePokemon2">${element.Type2}</p>
//                                                     </div>
//                                             </div>
//                                         </a>
//                  </div>  
//                 `)
//             });
//             upDateType();
//         }
//     })
// }
// var sapxepAZ = function (arr) {
//     var temp ;
//     for (let i = 0 ; i < arr.length - 1; i++) {
//         for (let j = i + 1; j < arr.length; j++) {
//             if (arr[i].name > arr[j].name) {
//                 temp = arr[j];
//                 arr[j] = arr[i];
//                 arr[i] = temp;
//             }
//         }
//     }
//     return arr;
// }
// var sapxepZA = function (arr) {
//     var temp ;
//     for (let i = 0 ; i < arr.length - 1; i++) {
//         for (let j = i + 1; j < arr.length; j++) {
//             if (arr[i].name < arr[j].name) {
//                 temp = arr[j];
//                 arr[j] = arr[i];
//                 arr[i] = temp;
//             }
//         }
//     }
//     return arr;
// }
