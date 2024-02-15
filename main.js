const rlt = document.getElementById('rlt');
const btn = document.getElementById('btn');
let id;
let action = 0;

function getRandom(min, max) {
    return Math.random() * (max - min) + min;
}


btn.addEventListener('click',function(){
    if(action == 0){
        action = 1;
        id = getRandom(0,100);
        if(id == 0.0001){
            rlt.style.transform = "rotate(-1170deg)";
            
        } else if(id == 0.0002){
            rlt.style.transform = "rotate(-1305deg)";
            
        } else if(id > 0.0002 && id <= 1.7){
            rlt.style.transform = "rotate(-1372deg)";
            
        } else if(id > 1.7 && id <= 7){
            rlt.style.transform = "rotate(-1406deg)";
            
        } else if(id > 7 && id <= 100){
            rlt.style.transform = "rotate(-1423deg)";
        }
    }
})