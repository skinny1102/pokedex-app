var image_menu_icon = document.querySelectorAll('.imageicon')
var item_menu= document.querySelectorAll('.item-menu')
item_menu.forEach((icon,index) => {
    icon.onmouseover= function(){
       switch(index){
           case 0 :
                image_menu_icon[index].src="/public/img/pokemon-trainer-white.png"
                break;
            case 1 :
                image_menu_icon[index].src="/public/img/pokeball-white.png"
                break;
            case 2 :
                image_menu_icon[index].src="/public/img/controller-white.png"
                break;
            case 3 :
                image_menu_icon[index].src="/public/img/card-game-white.png"
                break;
            case 4 :
                image_menu_icon[index].src="/public/img/television-white.png"
                break;
            case 5 :
                image_menu_icon[index].src="/public/img/trophy-white.png"
                break;
            case 6 :
                image_menu_icon[index].src="/public/img/newspaper-folded-white.png"
                break;
            }
    }
    icon.onmouseout= function(){
       switch(index){
           case 0 :
                image_menu_icon[index].src="/public/img/pokemon-trainer.png"
                break;
            case 1 :
                image_menu_icon[index].src="/public/img/pokeball.png"
                break;
            case 2 :
                image_menu_icon[index].src="/public/img/controller.png"
                break;
            case 3 :
                image_menu_icon[index].src="/public/img/card-game.png"
                break;
            case 4 :
                image_menu_icon[index].src="/public/img/television.png"
                break;
            case 5 :
                image_menu_icon[index].src="/public/img/trophy.png"
                break;
            case 6 :
                image_menu_icon[index].src="/public/img/newspaper-folded.png"
                break;
        }
    
    }
});
