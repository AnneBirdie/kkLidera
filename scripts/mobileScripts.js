window.addEventListener('orientationchange', () => {
    const orientation = window.matchMedia('(orientation: landscape)')
    if (orientation.matches) {
        window.location.reload()
    }else{
        window.location.reload()
    }
})
if (window.matchMedia("(orientation: portrait) or ((orientation: landscape) and (max-width: 800px))").matches) {

    function nav(){
    let portrait_btn_nav = document.getElementById('portrait_btn_nav');
    let navigation = document.getElementById('navigation');
   
        portrait_btn_nav.addEventListener('click', function(){
            if (portrait_btn_nav.innerHTML != `<img id="close_nav" src="images/cross.png" alt="close">`){
                navigation.classList.remove('navigation');
                navigation.classList.add('navigation_mobile');
                portrait_btn_nav.innerHTML = `<img id="close_nav" src="images/cross.png" alt="close">`;
            }else{
                navigation.classList.remove('navigation_mobile');
                navigation.classList.add('navigation');
                portrait_btn_nav.innerHTML = `<div></div>
                                            <div></div>
                                            <div></div>`;
                let options = document.querySelectorAll('.options');
                options.forEach(option => option.style.display = 'none');
                let nav_arrow = document.querySelectorAll('.nav_arrow');
                nav_arrow.forEach(arrow => arrow.src = 'images/IconFrame.png');
            }
        });  
    }  
    nav();

    function openOptionsNav(){
        const htmlLang = document.getElementsByTagName('html')[0].getAttribute('lang');
        let texts = [];
        let titles = [];
        if (htmlLang == 'ru'){
            titles = [`<p>О портале<img class = "nav_arrow" src = "images/IconFrame.png"></p>`, 
                `<p>Бизнес<img class = "nav_arrow" src = "images/IconFrame.png"></p>`, 
                '<p>Обучение<img class = "nav_arrow" src = "images/IconFrame.png"></p>', 
                `<p>Забота о себе<img class = "nav_arrow" src = "images/IconFrame.png"></p>`];
            texts = [[`<a class = "options options0" href = "#">Продукты КМФ</a>`, 
                    `<a class = "options options0" href = "#">Новости / Анонсы</a>`,
                    `<a class = "options options0" href = "#">О программе KMF Isker Hanymy</a>`,
                    `<a class = "options options0" href = "#">Истории успеха</a>`],
                    [`<a class = "options options1" href = "#">Продукты КМФ</a>`, 
                        `<a class = "options options1" href = "#">Новости / Анонсы</a>`,
                        `<a class = "options options1" href = "#">О программе KMF Isker Hanymy</a>`,
                        `<a class = "options options1" href = "#">Истории успеха</a>`],
                        [`<a class = "options options2" href = "#">Продукты КМФ</a>`, 
                            `<a class = "options options2" href = "#">Новости / Анонсы</a>`,
                            `<a class = "options options2" href = "#">О программе KMF Isker Hanymy</a>`,
                            `<a class = "options options2" href = "#">Истории успеха</a>`],
                            [`<a class = "options options3" href = "#">Продукты КМФ</a>`, 
                                `<a class = "options options3" href = "#">Новости / Анонсы</a>`,
                                `<a class = "options options3" href = "#">О программе KMF Isker Hanymy</a>`,
                                `<a class = "options options3" href = "#">Истории успеха</a>`]];
        }else{
            titles = [`<p>Портал туралы<img class = "nav_arrow" src = "images/IconFrame.png"></p>`, 
                `<p>Бизнес<img class = "nav_arrow" src = "images/IconFrame.png"></p>`, 
                '<p>Білім<img class = "nav_arrow" src = "images/IconFrame.png"></p>', 
                `<p>Өзін-өзі күту<img class = "nav_arrow" src = "images/IconFrame.png"></p>`];
            texts = [[`<a class = "options options0" href = "#">KMF өнімдері</a>`, 
                `<a class = "options options0" href = "#">Жаңалықтар / Хабарландырулар</a>`,
                `<a class = "options options0" href = "#">KMF Icker Hanymy бағдарламасы туралы</a>`,
                `<a class = "options options0" href = "#">Сәттілік оқиғалары</a>`],
                [`<a class = "options options1" href = "#">KMF өнімдері</a>`, 
                    `<a class = "options options1" href = "#">Жаңалықтар / Хабарландырулар</a>`,
                    `<a class = "options options1" href = "#">KMF Icker Hanymy бағдарламасы туралы</a>`,
                    `<a class = "options options1" href = "#">Сәттілік оқиғалары</a>`],
                    [`<a class = "options options2" href = "#">KMF өнімдері</a>`, 
                        `<a class = "options options2" href = "#">Жаңалықтар / Хабарландырулар</a>`,
                        `<a class = "options options2" href = "#">KMF Icker Hanymy бағдарламасы туралы</a>`,
                        `<a class = "options options2" href = "#">Сәттілік оқиғалары</a>`],
                        [`<a class = "options options3"  href = "#">KMF өнімдері</a>`, 
                            `<a class = "options options3" href = "#">Жаңалықтар / Хабарландырулар</a>`,
                            `<a class = "options options3" href = "#">KMF Icker Hanymy бағдарламасы туралы</a>`,
                            `<a class = "options options3" href = "#">Сәттілік оқиғалары</a>`]];
        }

        let navigation_item = document.getElementsByClassName('navigation_item');
        for (let i = 0; i < navigation_item.length-2; i++){
            navigation_item[i].innerHTML = titles[i];
            for (let j = 0; j < texts[i].length; j++){
                navigation_item[i].innerHTML += texts[i][j];
            }
            let nav_arrow = document.querySelectorAll(`.nav_arrow`);
            nav_arrow[i].src = "images/IconFrame.png";

            navigation_item[i].addEventListener('click', function(){
                let options = document.querySelectorAll(`.options${i}`);
                options.forEach((option)=>option.style.display = 'block');
                let nav_arrow = document.querySelectorAll(`.nav_arrow`);
                nav_arrow[i].src = "images/IconFrame2.png";
                for (let k = 0; k < navigation_item.length-2; k++){
                    if (k !== i) {
                        let options = document.querySelectorAll(`.options${k}`);
                        options.forEach((option)=>option.style.display = 'none');
                        nav_arrow[k].src = "images/IconFrame.png";
                    }
                }

            });
        }
    }
    openOptionsNav();

}

