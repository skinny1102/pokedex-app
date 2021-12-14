$.ajax({
    method:'GET',
    url:'pokemon/allPokemon',
    success:(data)=>{
        console.log(data)
        getAllPokemonHome(data);
        sortby(data);
        searchData(data);

    },error:(err)=>{
        console.log(err)
    }
})
//Phân trang 
var page = 1;
var btnNextPage = document.getElementById('btn_next')
var numberofPages = 8 ;

var getAllPokemonHome =(data)=>{
    var Pagedata =  data.filter(function (element,index) {
            if(index<numberofPages*page){
                return element
            }
    })
    updateUI(Pagedata)
    upDateType();
    nextandpreData(data,page)
 
}
var nextandpreData = function (data,page) {
   
    var nPages = Math.ceil( data.length/numberofPages)
    $("#btn_prev").on("click",function () {
        if(page<=1){ page=2;}
        --page;
        fillData(data,page)
    })
   
    $("#btn_next").on("click",function () {
        if(page>=nPages){   
            page=nPages
        }else{
            ++page;
        }
        fillData(data,page)
    }) 
}

var sortby = function (data) {
    $('#select-sort').on('change',function (evt) {
            var value = evt.target.value
           switch (value){
                case 'none':
                    console.log("chọn none")
                    defaultsort(data)
                    break
                case "az":
                    sortbyAz(data)
                    break
                case "za":
                    sortbyZa(data)
                    break
                default:
                    // defaultsort(data)
                    break
           }
            
        
        })
}
var searchData = function () {
    $('#btn-search').on('click',function(){
  var namePokemon= $('.namePokemon').val()
    if(namePokemon==""){
        modal_checksearch.addClass('enabled-modal') 
    }else{
        showLoading();
        searchPokemon(namePokemon);
    }
})
var searchPokemon = function(namePokemon){
        $.ajax({
            method:'GET',
            url:'pokemon/name',
            data:{keyword:namePokemon},
            success:(data)=>{
                endLoading()
                if(data==""){
                    updateUI_searchnull(namePokemon);
                    nextandpreData(data,page)
                    sortby(data);
                }else{
                    fillData(data,page)
                    nextandpreData(data,page)
                    sortby(data);
                }

            },error : ()=>{
                console.log('Lỗi nào đó')
            }
        })}
}
var fillData = (data,page)=>{
    const Pagedata =  data.filter(function (element,index) {
        if(index>(numberofPages*(page-1))-1 && index<(numberofPages*(page)) ){
            return element
        }})
    updateUI(Pagedata)
    upDateType();
   
}

var updateUI = function (data) {
    $(".item-card-pokemon").remove();
    $(".search-null").remove()
    data.forEach((element,index) => {
        var idPokemon = convertidPokemon(element.idPokemon) 
        $(".card-pokemon-content").append(`
        <div class="item-card-pokemon animation-item-search">
                                <a href="/pokemon/${element.idPokemon}">
                                    <div class="item-img-pokemon">
                                    <img   src="${element.image}"/>
                                    </div>
                                    <div class="item-infor-pokemon">
                                            <p>#${idPokemon}</p>
                                            <h5>${element.name}</h5>
                                            <div class="item-abilities-pokemon">
                                                <p class="typePokemon1">${element.Type}</p>
                                              
                                            </div>
                                    </div>
                                </a>
         </div>  
        `)
    });  
}
var  updateUI_searchnull = (namePokemon)=>{
    
    $(".item-card-pokemon").remove();
    $(".search-null").remove();
    $(".card-pokemon-content").append(`
            <div class="search-null">
                <p> Không có kết quả phù hợp cho : ${namePokemon}</p>
                <img  src="./public/img/pokeball.png"/>
            </div> 
    `)
}
var convertidPokemon = (a)=>{
            if(a<10){
                return '00'+a
            }if(a>=10&&a<100){
                return '0'+a
            }if(a>=100){
                return a
            }
}
var upDateType = ()=>{
    // var type2 = document.querySelectorAll(".typePokemon2")
    // var type1 = document.querySelectorAll(".typePokemon1")
    // type1.forEach(function(typeOne,indextype1){
    //         type2.forEach(function(typeTwo,indextype2){
    //                 if(indextype1==indextype2){
    //                     if(typeTwo.textContent==null ||typeTwo.textContent==''){
    //                            typeTwo.classList.add('bgwhite')
    //                     }
    //                     if(typeOne.textContent==''&&typeTwo.textContent!=''){
    //                         typeOne.textContent =typeTwo.textContent
    //                        typeTwo.textContent=''
    //                         typeTwo.classList.add('bgwhite')
    //                     }else if(typeOne.textContent=='' &&typeTwo.textContent==''){
    //                         typeOne.classList.add('bgwhite')
    //                     }
                        
    //                 }
                    
    //         })
    // })
}

var defaultsort = function (data){
    var Pagedata =  sapxepdefault(data)
    fillData(Pagedata,page)
    nextandpreData(Pagedata,page)
}

var sortbyAz = function (data) {
    var dataSortAZ = sapxepAZ(data);
    fillData(dataSortAZ,page)
    nextandpreData(dataSortAZ,page)
}
var sortbyZa = function (data) {
    var dataSortZA = sapxepZA(data);
    fillData(dataSortZA,page)
    nextandpreData(dataSortZA,page)
}
var sapxepAZ = function (arr) {
    var temp ;
    for (let i = 0 ; i < arr.length - 1; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i].name > arr[j].name) {
                temp = arr[j];
                arr[j] = arr[i];
                arr[i] = temp;
            }
        }
    }
    return arr;
}
var sapxepZA = function (arr) {
    var temp ;
    for (let i = 0 ; i < arr.length - 1; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i].name < arr[j].name) {
                temp = arr[j];
                arr[j] = arr[i];
                arr[i] = temp;
            }
        }
    }
    return arr;
}
var sapxepdefault = function (arr) {
    var temp ;
    for (let i = 0 ; i < arr.length - 1; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i].idPokemon > arr[j].idPokemon) {
                temp = arr[j];
                arr[j] = arr[i];
                arr[i] = temp;
            }
        }
    }
    return arr;
}
var modal_checksearch= $('.modal-check')
$('.header-modal i').on('click',function(){
    modal_checksearch.removeClass('enabled-modal') 
})

$('.close-modal').on('click',function(){
    modal_checksearch.removeClass('enabled-modal') 
})

var showLoading = function(){
    $('.modal-loading').addClass('enabled-loading')
}
var endLoading  = function(){
    $('.modal-loading').removeClass('enabled-loading')
}