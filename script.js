window.onload = function () {
    //Lanzar set timeout cada 5 segundos
    const T24_LISTCOUNT = document.querySelectorAll('li').length;
    const T24_TIME = 5000;
    var t24_initialPosition = 1;
    document.getElementById("t24_slide1").style.display = "block";

    function resetCat() {
        document.getElementById("t24_items1").style.display = "none";
        document.getElementById("t24_items2").style.display = "none";
        document.getElementById("t24_items3").style.display = "none";
    }

    function t24_nextPicture() {
        document.getElementById("t24_slide" + t24_initialPosition).style.display = "none";
        if (t24_initialPosition == T24_LISTCOUNT) {
            t24_initialPosition = 1;
        } else {
            t24_initialPosition++;
        }
        document.getElementById("t24_slide" + t24_initialPosition).style.display = "block";
    }

    function t24_previousPicture() {
        document.getElementById("t24_slide" + t24_initialPosition).style.display = "none";
        if (t24_initialPosition == 1) {
            t24_initialPosition = T24_LISTCOUNT;
        } else {
            t24_initialPosition--;
        }
        document.getElementById("t24_slide" + t24_initialPosition).style.display = "block";
    }
    function t24_autoplay() {
        setInterval(t24_nextPicture, T24_TIME);
    }

    resetCat();
    document.getElementById("t24_back").addEventListener("click", t24_previousPicture);
    document.getElementById("t24_forward").addEventListener("click", t24_nextPicture);

    t24_autoplay();

    //Categorías

    function t24_functCat1() {
        resetCat();
        document.getElementById("t24_items1").style.display = "block";
    }
    function t24_functCat2() {
        resetCat();
        document.getElementById("t24_items2").style.display = "block";
    }
    function t24_functCat3() {
        resetCat();
        document.getElementById("t24_items3").style.display = "block";
    }

    document.getElementById("t24_cat1").addEventListener("click", t24_functCat1);
    document.getElementById("t24_cat2").addEventListener("click", t24_functCat2);
    document.getElementById("t24_cat3").addEventListener("click", t24_functCat3);

    

    document.getElementById("t24_card_dropdown").addEventListener("mouseover",function(){
        const collection2 = document.getElementsByClassName("t24_descrip");
        for (let i = 0; i < collection2.length; i++) {
            collection2[i].style.height;
            console.log(collection2[i].style.height);
            
        }
    })
    
    
}