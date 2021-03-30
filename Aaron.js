
$( ".animation" ).delay(800).fadeOut(300).fadeIn( 400 )    ;
$( "#s1" ).fadeOut(200)  .slideDown(1000);
// 透過 arr 陣列儲存要變化的文字內容
const arr = ['Full', 'Full Stack', 'Full Stack Development']
let count = 0;
setInterval( function() { 
  count += 1;
  const typewriteAni = document.getElementById('typewrite-animated');
  const typewriteText = document.getElementById('typewrite-text');
  if (typewriteAni.classList.contains('typewrite-text')) {
    typewriteAni.classList.remove('typewrite-text');
  } else {
    typewriteAni.classList.add('typewriter');
    typewriteAni.addEventListener('animationend', function() {
      setTimeout(function() {
        typewriteText.textContent = '';
        typewriteAni.classList.remove('typewriter');
      }, 800)
    })
  }
  typewriteText.textContent = arr[count%3];
}, 2000);

var scroller = $(window).smoothDivScroll({ 
    autoScrollingMode: "always", 
    setupComplete: function() { 
     scroller.smoothDivScroll("stopAutoScrolling"); 
    } 
}); 

setTimeout(function(){ 
    scroller.smoothDivScroll("startAutoScrolling"); 
},2000) //2000 is delay in milliseconds 




$("a").each(function (index, element) {
  console.log("編號:" + index);
  
  var target= $(this).attr("data-st-target");
  var duration= $(this).attr("data-st-dutation");

  console.log("目標：" + target);
  console.log("時間：" + duration);
  var offset = $("#"+ target).offset();
  var top = offset.top;

 console.log("上方:" + top)
  

 $(this).click(function (e) { 
     e.preventDefault();
     
     $("html").animate({
         scrollTop:top
     }, parseInt(duration))
 });
});