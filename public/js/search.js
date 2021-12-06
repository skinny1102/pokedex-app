var modal_checksearch= $('.modal-check')

$('.header-modal i').on('click',function(){
    modal_checksearch.removeClass('enabled-modal') 
})

$('.close-modal').on('click',function(){
    modal_checksearch.removeClass('enabled-modal') 
})

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
            console.log('Thành công')
            console.log(data)
        },error : ()=>{
            console.log('Lỗi nào đó')
        }
    })

}

var showLoading = function(){
    $('.modal-loading').addClass('enabled-loading')
}
var endLoading  = function(){
    $('.modal-loading').removeClass('enabled-loading')
}
