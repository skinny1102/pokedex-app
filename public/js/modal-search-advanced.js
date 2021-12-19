var search_avd_dr = $('#searh-advanced-dra')
var modalsearch = $('#modal-search-avanced')
$("#close-modal-search").on("click",()=>{
    modalsearch.removeClass('enb')
   
})
search_avd_dr.on("click",()=>{
    modalsearch.addClass('enb')
})

$.ajax({
    url:'/pokemon/type',
    success:(rs)=>{
      updateTypeUI(rs)
    },error:(err)=>{
        console.log(err)
    }
})
$.ajax({
    url:'/pokemon/ability',
    success:(rs)=>{
      updateAbilitiUI(rs)
    },error:(err)=>{

    }
})
$.ajax({
    url:'/pokemon/countPokemon',
    success:(rs)=>{
        console.log(rs)
       updateRangerUI(rs)
    },error:(err)=>{

    }
})

const updateTypeUI = (rs)=>{
    const opt = $('#type-modal')
    rs.forEach(element => {
        opt.append(`<option value="${element.idType}">${element.name}</option>`)
    });
}
const updateAbilitiUI= (rs)=>{
    const opt = $('#ability-option-modal')
    rs.forEach(element => {
        opt.append(`<option value="${element.idAbility}">${element.name}</option>`)
    });
}
const updateRangerUI = (rs)=>{
    const ipt = $('#max-pokemon')
    ipt.val(rs[0].total)
}

var btn_search_advanced =$("#btn-search-modal")
btn_search_advanced.on('click',function () {
    var type = $("#type-modal option:selected").text()
    var ability = $('#ability-option-modal option:selected').text()
    var minranger = $('#min-ranger').val()
    var maxranger = $('#max-pokemon').val()
   
    if(minranger=="" ||maxranger==""){
        alert("Không được để trống")
    }else{
     
        window.location= `/pokemon/search?type=${type}&ability=${ability}&minranger=${minranger}&maxranger=${maxranger}`
    }   
})