let benefitsArr = ['.benefits__number', '.benefits__number1', '.benefits__number2']
let numbers = document.querySelectorAll(benefitsArr)
let numberBlock = document.querySelector('.experiencies__item-img')

for (let i = 0; i < benefitsArr.length; i++) {
 $(document).ready(function () {
  var show = true;
  var countbox = benefitsArr[i];
  $(window).on("scroll load resize", function () {
   if (!show) return false; // Отменяем показ анимации, если она уже была выполнена
   let b_height = $(numberBlock).outerHeight() // высота общего блока
   let w_height = $(window).height(); // Высота окна браузера
   if (numbers[i].getBoundingClientRect().top <= ((w_height / 2) + (b_height / 2))) {
    $(benefitsArr[i]).css('opacity', '1');
    $(benefitsArr[i]).spincrement({
     thousandSeparator: "",
     duration: 5000
    });
    show = false;
   }
  });
 });
}
// // //
// // //
