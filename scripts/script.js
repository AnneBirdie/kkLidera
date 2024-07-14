function NavOpenSelects(){
    let newSelect = document.getElementsByClassName('new-select');
    let newSelectList = document.getElementsByClassName('new-select__list');
    for (let i = 0; i< newSelect.length; i++) {
        document.addEventListener('click', e => {
            if (!e.target.classList.contains('new-select')){
                newSelectList[i].classList.add('slideUp');
                newSelectList[i].classList.remove('slideDown');
            }
        });
        newSelect[i].addEventListener('click', function(){
            for (let s = 0; s < newSelectList.length; s++){
                if (s!==i ){
                    newSelectList[s].classList.add('slideUp');
                    newSelectList[s].classList.remove('slideDown');
                }else{
                    newSelectList[s].classList.add('slideDown');
                    newSelectList[s].classList.remove('slideUp');
                }
            }
        });
    }
}
if (window.matchMedia("(orientation: landscape) and (min-width: 801px)").matches) {
    NavOpenSelects();
}

function NavOpenLang(){
    let newSelect = document.getElementsByClassName('new-select_lang');
    let newSelectList = document.getElementsByClassName('new-select__list_lang');
        document.addEventListener('click', e => {
            if (!e.target.classList.contains('new-select_lang')){
                newSelectList[0].classList.add('slideUp_lang');
                newSelectList[0].classList.remove('slideDown_lang');
            }
        });
        newSelect[0].addEventListener('click', function(){
            for (let s = 0; s < newSelectList.length; s++){
                if (s!==0 ){
                    newSelectList[s].classList.add('slideUp_lang');
                    newSelectList[s].classList.remove('slideDown_lang');
                }else{
                    newSelectList[s].classList.add('slideDown_lang');
                    newSelectList[s].classList.remove('slideUp_lang');
                }
            }
        });

    let ru = document.getElementById('ru');
    let kk = document.getElementById('kk');

    ru.addEventListener('click', function(){
        if (newSelect[0].innerHTML != `рус<img src="images/IconFrame.png" alt="arrow">`){
            newSelect[0].innerHTML = `рус<img src="images/IconFrame.png" alt="arrow">`;
            document.body.innerHTML = ru;
            location.replace('https://annebirdie.github.io/Lidera/');
        }
    });

    kk.addEventListener('click', function(){
        if (newSelect[0].innerHTML != `каз<img src="images/IconFrame.png" alt="arrow">`){
            newSelect[0].innerHTML = `каз<img src="images/IconFrame.png" alt="arrow">`;
            document.body.innerHTML = kk;
            location.replace('https://annebirdie.github.io/kkLidera/');
        }
    });
}

NavOpenLang();

function changeHeaderBlocks(){
        let offset = 0;
        let target = 0;
        let targetScrollLeft = 0;
        let slider_certs = document.getElementsByClassName('slider_certs');
        let header_btn_left = document.getElementById('header_btn_left');
        let header_btn_right = document.getElementById('header_btn_right');
        let header_container_text = document.getElementsByClassName("header_container_text");

        if (window.matchMedia("(orientation: portrait) or ((orientation: landscape) and (max-width: 800px))").matches){
            touchMoveSlider(header_container_text.length, 92, slider_certs, 1);
        }else{
            let max = header_container_text.length * 55.7;
            header_btn_right.addEventListener('click', function(){
                offset += 55.7;
                if (offset >= max){
                    offset = 0;
                    target = 0;
                }else{
                    target++;
                }
                slider_certs[0].style.left = -offset + "vw";
                sliderCurrentPositionHeader(target)
            });
        
            header_btn_left.addEventListener('click', function(){
                offset -= 55.7;
                if (offset < 0){
                    offset = max - 55.7;
                    target = header_container_text.length - 1; 
                }else{
                    target--;
                }
                slider_certs[0].style.left = -offset + "vw";         
                sliderCurrentPositionHeader(target)
            });
        }
}

changeHeaderBlocks();



function addBlock_3Items(){
    const htmlLang = document.getElementsByTagName('html')[0].getAttribute('lang');
    let texts = [];
    if (htmlLang == 'ru'){
        texts =[['#', "images/Frame23.png", '1Услуги для автомобилей <br>"Lux-service"', 'Тараз, Абая 291', 'Ателье для автомобилей "Lux-service" предоставляют пошив чехлов, перетяжка салона, EVA полики и шумоизоляцию.'],
        ['#', "images/Frame24.png", '2Агробизнес - животноводство, пчеловодство', 'с. Лепси, Алматинская область', 'Смешанное сельское хозяйство - бизнес, который занимается выращиванием растений (растениеводство) и разведением животных'],
        ['#', "images/Frame25.png", '3Семейная столовая "Мерей"', 'Сарканд, Толе би  15/2', 'В столовой "Мерей" можно насладиться вкуснейшим завтраком или сытным обедом, недорогим полдником и заботливо приготовленным ужином. Рядом...'],
        ['#', "images/Frame23.png", '4Услуги для автомобилей <br>"Lux-service"', 'Тараз, Абая 291', 'Ателье для автомобилей "Lux-service" предоставляют пошив чехлов, перетяжка салона, EVA полики и шумоизоляцию.'],
        ['#', "images/Frame24.png", '5Агробизнес - животноводство, пчеловодство', 'с. Лепси, Алматинская область', 'Смешанное сельское хозяйство - бизнес, который занимается выращиванием растений (растениеводство) и разведением животных'],
        ['#', "images/Frame25.png", '6Семейная столовая "Мерей"', 'Сарканд, Толе би  15/2', 'В столовой "Мерей" можно насладиться вкуснейшим завтраком или сытным обедом, недорогим полдником и заботливо приготовленным ужином. Рядом...'],
        ['#', "images/Frame23.png", '7Услуги для автомобилей <br>"Lux-service"', 'Тараз, Абая 291', 'Ателье для автомобилей "Lux-service" предоставляют пошив чехлов, перетяжка салона, EVA полики и шумоизоляцию.'],
        ['#', "images/Frame24.png", '8Агробизнес - животноводство, пчеловодство', 'с. Лепси, Алматинская область', 'Смешанное сельское хозяйство - бизнес, который занимается выращиванием растений (растениеводство) и разведением животных'],
        ['#', "images/Frame25.png", '9Семейная столовая "Мерей"', 'Сарканд, Толе би  15/2', 'В столовой "Мерей" можно насладиться вкуснейшим завтраком или сытным обедом, недорогим полдником и заботливо приготовленным ужином. Рядом...'],
        ['#', "images/Frame23.png", '10Услуги для автомобилей <br>"Lux-service"', 'Тараз, Абая 291', 'Ателье для автомобилей "Lux-service" предоставляют пошив чехлов, перетяжка салона, EVA полики и шумоизоляцию.'],
        ['#', "images/Frame24.png", '11Агробизнес - животноводство, пчеловодство', 'с. Лепси, Алматинская область', 'Смешанное сельское хозяйство - бизнес, который занимается выращиванием растений (растениеводство) и разведением животных'],
        ['#', "images/Frame25.png", '12Семейная столовая "Мерей"', 'Сарканд, Толе би  15/2', 'В столовой "Мерей" можно насладиться вкуснейшим завтраком или сытным обедом, недорогим полдником и заботливо приготовленным ужином. Рядом...'],];
    }else{
        texts = [
            ['#', "images/Frame23.png", '1Автокөлiктерге арналған қызметтер <br>"Lux-service"', 'Тараз, Абая 291', 'Автокөліктерге арналған ателье "Lux-service" жабындарды тігуді, интерьерді қайта қаптауды, EVA еденді және дыбыс оқшаулауын қамтамасыз етеді.'],
            ['#', "images/Frame24.png", '2Агробизнес – мал шаруашылығы, омарта шаруашылығы', 'бірге. Лепсі, Алматы облысы', 'Аралас егіншілік – өсімдік өсірумен (өсімдік шаруашылығы) және жануарларды өсірумен айналысатын кәсіп'],
            ['#', "images/Frame25.png", '3«Мерей» отбасылық асханасы"', 'Сарқанд, Төле би 15/2', '«Мерей» асханасында дәмді таңғы ас немесе дәмді түскі ас, арзан түскі ас және мұқият дайындалған кешкі асты тамашалай аласыз. Жақын...'],
            ['#', "images/Frame23.png", '1Автокөлiктерге арналған қызметтер <br>"Lux-service"', 'Тараз, Абая 291', 'Автокөліктерге арналған ателье "Lux-service" жабындарды тігуді, интерьерді қайта қаптауды, EVA еденді және дыбыс оқшаулауын қамтамасыз етеді.'],
            ['#', "images/Frame24.png", '2Агробизнес – мал шаруашылығы, омарта шаруашылығы', 'бірге. Лепсі, Алматы облысы', 'Аралас егіншілік – өсімдік өсірумен (өсімдік шаруашылығы) және жануарларды өсірумен айналысатын кәсіп'],
            ['#', "images/Frame25.png", '3«Мерей» отбасылық асханасы"', 'Сарқанд, Төле би 15/2', '«Мерей» асханасында дәмді таңғы ас немесе дәмді түскі ас, арзан түскі ас және мұқият дайындалған кешкі асты тамашалай аласыз. Жақын...'],
            ['#', "images/Frame23.png", '1Автокөлiктерге арналған қызметтер <br>"Lux-service"', 'Тараз, Абая 291', 'Автокөліктерге арналған ателье "Lux-service" жабындарды тігуді, интерьерді қайта қаптауды, EVA еденді және дыбыс оқшаулауын қамтамасыз етеді.'],
            ['#', "images/Frame24.png", '2Агробизнес – мал шаруашылығы, омарта шаруашылығы', 'бірге. Лепсі, Алматы облысы', 'Аралас егіншілік – өсімдік өсірумен (өсімдік шаруашылығы) және жануарларды өсірумен айналысатын кәсіп'],
            ['#', "images/Frame25.png", '3«Мерей» отбасылық асханасы"', 'Сарқанд, Төле би 15/2', '«Мерей» асханасында дәмді таңғы ас немесе дәмді түскі ас, арзан түскі ас және мұқият дайындалған кешкі асты тамашалай аласыз. Жақын...'],
            ['#', "images/Frame23.png", '1Автокөлiктерге арналған қызметтер <br>"Lux-service"', 'Тараз, Абая 291', 'Автокөліктерге арналған ателье "Lux-service" жабындарды тігуді, интерьерді қайта қаптауды, EVA еденді және дыбыс оқшаулауын қамтамасыз етеді.'],
            ['#', "images/Frame24.png", '2Агробизнес – мал шаруашылығы, омарта шаруашылығы', 'бірге. Лепсі, Алматы облысы', 'Аралас егіншілік – өсімдік өсірумен (өсімдік шаруашылығы) және жануарларды өсірумен айналысатын кәсіп'],
            ['#', "images/Frame25.png", '3«Мерей» отбасылық асханасы"', 'Сарқанд, Төле би 15/2', '«Мерей» асханасында дәмді таңғы ас немесе дәмді түскі ас, арзан түскі ас және мұқият дайындалған кешкі асты тамашалай аласыз. Жақын...']
        ]
    }

    let block_3_slider = document.querySelectorAll(".block_3_slider");
    for (let i = 0; i < 12; i++){
        block_3_slider[0].innerHTML += 
                    `<div class="block_3_slider_item">
                        <div class="block_3_slider_item_img">
                            <a href="${texts[i][0]}"><div class="block_3_slider_item_hover">Толығырақ</div></a>
                            <img src=${texts[i][1]} alt="photo">
                        </div>
                        <div class="block_3_slider_item_title">${texts[i][2]}</div>
                        <div class="block_3_slider_item_city">${texts[i][3]}</div>
                        <div class="block_3_slider_item_text">${texts[i][4]}</div>
                    </div>`;
    }
}

addBlock_3Items();

function block_3Slider(){
    let offset = 0;
    let target = 0;
    let block_3_slider = document.getElementsByClassName('block_3_slider');
    let block_3_btn_left = document.getElementById('block_3_btn_left');
    let block_3_btn_right = document.getElementById('block_3_btn_right');
    let block_3_slider_item = document.querySelectorAll(".block_3_slider_item");
    let max = block_3_slider_item.length * 100;
    if (window.matchMedia("(orientation: portrait) or ((orientation: landscape) and (max-width: 800px))").matches){
        touchMoveSlider(block_3_slider_item.length, 100, block_3_slider, 2);
    }else{
        let max = block_3_slider_item.length * 20;
        block_3_btn_right.addEventListener('click', function(){
            offset += 20;
            if (offset >= max-40){
                offset = 0;
                target = 0;
            }else{
                target++;
            }
            block_3_slider[0].style.left = -offset + "vw";
            sliderCurrentPositionBlock_3(target);
        });

        block_3_btn_left.addEventListener('click', function(){
            offset -= 20;

            if (offset < 0){
                offset = max - 60;
                target = 9; 
            }else{
                target--;
            }
            block_3_slider[0].style.left = -offset + "vw";
            sliderCurrentPositionBlock_3(target);
        });
    }
}

block_3Slider();

function block_4Slider(){
    let offset = 0;
    let target = 0;
    let block_4_slider = document.getElementsByClassName('block_4_slider');
    let block_4_item = document.getElementsByClassName("block_4_item");
    let max = block_4_item.length * 100;
    if (window.matchMedia("(orientation: portrait) or ((orientation: landscape) and (max-width: 800px))").matches){
        touchMoveSlider(block_4_item.length, 100, block_4_slider, 3);
    }
}

block_4Slider();

function block_5Slider(){
    let offset = 0;
    let target = 0;
    let block_5_slider = document.getElementsByClassName('block_5_slider');
    let block_5_item = document.getElementsByClassName("block_5_item");
    let max = block_5_item.length * 100;
    if (window.matchMedia("(orientation: portrait) or ((orientation: landscape) and (max-width: 800px))").matches){
        touchMoveSlider(block_5_item.length, 100, block_5_slider, 4);
    }
}

block_5Slider();

function setClassActive(el){
    el.classList.add('header_container_counts_active');
    el.classList.remove('header_container_counts_passive');
}

function setClassPassive(el){
    el.classList.remove('header_container_counts_active');
    el.classList.add('header_container_counts_passive');
}



function touchMoveSlider(length, step, slider, func){
    let max = length * step;
    let offset = 0;
    let target = 0;
    let targetScrollLeft = 0;
            let startX = 0;
            let scrollLeft = 0;
            slider[0].addEventListener('touchstart', function(e){
                
            startX = e.touches[0].clientX;
            scrollLeft = this.scrollLeft;
        });
        slider[0].addEventListener('touchmove', function(e){      
            let moveX = e.touches[0].clientX - startX;
            targetScrollLeft = scrollLeft - moveX;
        });
        slider[0].addEventListener('touchend', function(e){
            if (targetScrollLeft > 10){
                offset += step;
                if (offset >= max){
                    offset = 0;
                    target = 0;
                }else{
                    target++;
                }
                slider[0].style.left = -offset + "vw";

                func === 1 ? 
                sliderCurrentPositionHeader(target) : func === 2 ? 
                sliderCurrentPositionBlock_3(target) : func === 3 ? 
                sliderCurrentPositionBlock_4(target) : sliderCurrentPositionBlock_5(target);

            }else if (targetScrollLeft < -10){
                offset -= step;
        
                if (offset < 0){
                    offset = max - step;
                    target = length - 1; 
                }else{
                    target--;
                }
                slider[0].style.left = -offset + "vw";

                func === 1 ? 
                sliderCurrentPositionHeader(target) : func === 2 ? 
                sliderCurrentPositionBlock_3(target) : func === 3 ? 
                sliderCurrentPositionBlock_4(target) : sliderCurrentPositionBlock_5(target);

            }

        });
}

function sliderCurrentPositionHeader(target){
    
    let header_container_count = document.getElementsByClassName("header_container_count");
    for (let i = 0; i < header_container_count.length; i++){
        if (i === target){
            header_container_count[i].classList.add('header_container_counts_active');
            header_container_count[i].classList.remove('header_container_counts_passive');
        }else{
            header_container_count[i].classList.add('header_container_counts_passive');
            header_container_count[i].classList.remove('header_container_counts_active');
        }

    }
}

function sliderCurrentPositionBlock_3(target){

    let block_3_count = document.getElementsByClassName("block_3_count");
    for (let i = 0; i < block_3_count.length; i++){
        if (target === 0){
            i === 0 ? setClassActive(block_3_count[i]) : setClassPassive(block_3_count[i]);
        }else if (target > 0 && target <= 4){
            i === 1 ? setClassActive(block_3_count[i]) : setClassPassive(block_3_count[i]);

        }else if (target > 4 && target <= 8 ){
            i === 2 ? setClassActive(block_3_count[i]) : setClassPassive(block_3_count[i]);
        }else{
            i === 3 ? setClassActive(block_3_count[i]) : setClassPassive(block_3_count[i]);
        }
    }
}

function sliderCurrentPositionBlock_4(target){
    let block_4_count = document.getElementsByClassName("block_4_count");
    for (let i = 0; i < block_4_count.length; i++){
            i === target ? setClassActive(block_4_count[i]) : setClassPassive(block_4_count[i]);
    }
}

function sliderCurrentPositionBlock_5(target){
    let block_5_count = document.getElementsByClassName("block_5_count");
    for (let i = 0; i < block_5_count.length; i++){
            i === target ? setClassActive(block_5_count[i]) : setClassPassive(block_5_count[i]);

    }
}
