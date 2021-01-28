let casesItem = document.querySelectorAll('.cases-sidebar__item');


for (let i = 0; i < casesItem.length; i++) {
   casesItem[i].onclick = () => {                      // при нажатии на строку - выделяем красным
      for (let k = 0; k < casesItem.length; k++) {
         if (casesItem[k].classList.contains('active')) {
            casesItem[k].classList.remove('active');
         }
      }
      casesItem[i].classList.add('active');

      document.querySelector('.cases-img > img').src = `img/cases-${i+1}.png`; //меняем картинку
   }
}



let headerNav = document.querySelector('.header-nav');
let burger = document.querySelector('.header__burger');
let activeArr = [headerNav, burger];

burger.onclick = () => {
   for (let key of activeArr){
      key.classList.toggle('active');
   }
};