const box_list = document.querySelector(".develop").querySelectorAll(".box");
console.log(box_list);


let index = 0;

listDisplaySetting(box_list, 0);

box_list[0].classList.add("prevToNextAnimation");

function listDisplaySetting(list, x){
    if(index < 0)
        index = list.length-1;
    if(index >= list.length)
        index = 0;

    if(x===1){
        list[index].classList.add("left");
    }
    else if(x===-1){
        list[index].classList.add("right");
    }

    index = index + x;

    if(index < 0)
        index = list.length-1;
    if(index >= list.length)
        index = 0;
   
    list[index].style.opacity = "1";

    for(var i = 0; i<list.length; i++){
        if(i===index) continue;
        list[i].style.opacity = "0";
    }
    
    list[index].classList.remove("nextToPrevAnimation");
    list[index].classList.remove("prevToNextAnimation");
}

function languagePrevClicked(){
    listDisplaySetting(box_list, -1);
    box_list[index].classList.add("prevToNextAnimation");
    box_list[index].classList.remove("left");
}

function languageNextClicked(){
    listDisplaySetting(box_list, 1);
    box_list[index].classList.add("nextToPrevAnimation");
    box_list[index].classList.remove("right");
}