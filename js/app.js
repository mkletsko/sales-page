(function () {

    var clickShow = document.getElementsByClassName('click-show'),
        blockProducts = document.querySelector('.products'),
        clickShowLength = clickShow.length,
        i = 0;

    /* change element position pop-up for devices size > 992px */
    (function () {
        var rating = document.querySelector('.rating'),
            infoProducts = document.querySelector('.info-products'),
            productsSize = document.querySelector('.size-product'),
            popupDescription = document.querySelector('.popup-description'),
            selectSize = document.querySelector('.select-size');

        if(document.documentElement.clientWidth > 992) {
            infoProducts.insertBefore(rating, productsSize);
            infoProducts.insertBefore(popupDescription, productsSize);
            selectSize.innerHTML = 'SIZE:';
        }

    })(); /* END change element position pop-up for devices size > 992px */

    /* add social networks menu for devices size > 992px */
    (function () {
        var open = document.querySelector('.open'),
        socialMenu = document.querySelector('.social');

        var addSocialMenu = function () {

            if (socialMenu.classList.contains('social-open')){
                socialMenu.classList.remove('social-open')
                open.firstElementChild.setAttribute('src', 'img/open.png');
            } else {
                socialMenu.classList.add('social-open')
                open.firstElementChild.setAttribute('src', 'img/close-min.png');
            }

        };

        if (open.addEventListener){
            open.addEventListener('click', addSocialMenu);
        } else if (open.attachEvent){
            open.attachEvent('click', addSocialMenu);
        } else {
            open.onclick = addSocialMenu;
        };

    })(); /* END add social networks menu for devices size > 992px */


    /* pop-up > 992px */
    (function () {
        var closePopup = document.querySelector('.close'),
            popupBlock = document.body.getElementsByClassName('popup-block')[0],
            showPopup = document.querySelector('.show-popup'),
            clickShow = document.body.getElementsByClassName('click-show')[0],
            clickProduct = document.body.querySelector('.click-product'),
            clickMask = document.body.querySelector('.mask');


        clickProduct.setAttribute('href', '#');
        clickMask.setAttribute('href', '#');

        showPopup.onclick = function () {
            popupBlock.style.display = 'block';
            document.body.style.backgroundColor = 'rgba(14, 14, 13, 0.64)';
            document.body.style.zIndex = 200;
            return false;
        };

        closePopup.onclick = function () {
            popupBlock.style.display = 'none';
            document.body.style.backgroundColor = '';
            document.body.style.zIndex = 0;
        }

        clickProduct.onclick = function () {
            popupBlock.style.display = 'block';
            document.body.style.backgroundColor = 'rgba(14, 14, 13, 0.64)';
            document.body.style.zIndex = 200;
            return false;
        };

    })();/* END pop-up > 992px */


})();
