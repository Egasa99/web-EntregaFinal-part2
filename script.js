window.onload = function () {
    //Lanzar set timeout cada 5 segundos
    const t24_SHOP_LISTCOUNT = document.querySelectorAll('li').length;
    const t24_SHOP_TIME = 5000;
    var t24_shop_initialPosition = 1;
    document.getElementById("t24_shop_slide1").style.display = "block";

    function resetCat() {
        document.getElementById("t24_shop_items1").style.display = "none";
        document.getElementById("t24_shop_items2").style.display = "none";
        document.getElementById("t24_shop_items3").style.display = "none";
    }

    function t24_shop_nextPicture() {
        document.getElementById("t24_shop_slide" + t24_shop_initialPosition).style.display = "none";
        if (t24_shop_initialPosition == t24_SHOP_LISTCOUNT) {
            t24_shop_initialPosition = 1;
        } else {
            t24_shop_initialPosition++;
        }
        document.getElementById("t24_shop_slide" + t24_shop_initialPosition).style.display = "block";
    }

    function t24_shop_previousPicture() {
        document.getElementById("t24_shop_slide" + t24_shop_initialPosition).style.display = "none";
        if (t24_shop_initialPosition == 1) {
            t24_shop_initialPosition = t24_SHOP_LISTCOUNT;
        } else {
            t24_shop_initialPosition--;
        }
        document.getElementById("t24_shop_slide" + t24_shop_initialPosition).style.display = "block";
    }
    function t24_shop_autoplay() {
        setInterval(t24_shop_nextPicture, t24_SHOP_TIME);
    }

    resetCat();
    document.getElementById("t24_shop_back").addEventListener("click", t24_shop_previousPicture);
    document.getElementById("t24_shop_forward").addEventListener("click", t24_shop_nextPicture);

    t24_shop_autoplay();

    //Categorías

    function t24_shop_functCat1() {
        resetCat();
        document.getElementById("t24_shop_items1").style.display = "block";
    }
    function t24_shop_functCat2() {
        resetCat();
        document.getElementById("t24_shop_items2").style.display = "block";
    }
    function t24_shop_functCat3() {
        resetCat();
        document.getElementById("t24_shop_items3").style.display = "block";
    }

    document.getElementById("t24_shop_cat1").addEventListener("click", t24_shop_functCat1);
    document.getElementById("t24_shop_cat2").addEventListener("click", t24_shop_functCat2);
    document.getElementById("t24_shop_cat3").addEventListener("click", t24_shop_functCat3);

    

    document.getElementById("t24_shop_card_dropdown").addEventListener("mouseover",function(){
        const collection2 = document.getElementsByClassName("t24_shop_descrip");
        for (let i = 0; i < collection2.length; i++) {
            collection2[i].style.height;
            console.log(collection2[i].style.height);
            
        }
    })
    
    
}