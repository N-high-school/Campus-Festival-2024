$(document).ready(function() {
    var pagetop = $('.pagetop');
      $(window).scroll(function () {
         if ($(this).scrollTop() > 100) {
              pagetop.fadeIn();
         } else {
              pagetop.fadeOut();
              }
         });
         pagetop.click(function () {
             $('body, html').animate({ scrollTop: 0 }, 500);
                return false;
     });
  });
  window.addEventListener("load", function() {
     const loadingScreen = document.getElementById("loading-screen");
     loadingScreen.classList.add("fade-out");

     // フェードアウトが完了したらロード画面を非表示に
     setTimeout(function() {
         loadingScreen.style.display = "none";
     }, 2000); // フェードアウトの時間（1秒）
 });

// ロードの進行をシミュレート
let progressPercentage = 0;
const interval = setInterval(() => {
if (progressPercentage < 100) {
 progressPercentage += 10;
 updateProgress(progressPercentage);
} else {
 clearInterval(interval);
}
}, 500);