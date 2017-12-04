/*
 * Add HTML markup for the switched
 */

var html = '';
html += '<div id="skin-switcher">';
html += '  <div id="skin-list">';
html += '    <ul class="skin-list-container">';
html += '      <li class="skin-item active-skin" data-skin="black"><img src="images/skins/1.png" alt="Black Skin">BLACK</li>';
html += '      <li class="skin-item" data-skin="blue"><img src="images/skins/2.png" alt="Blue Skin">BLUE</li>';
html += '      <li class="skin-item" data-skin="green"><img src="images/skins/3.png" alt="Green Skin">GREEN</li>';
html += '    </ul>';
html += '    <ul class="skin-list-container">';
html += '      <li class="skin-item" data-skin="black-boxed"><img src="images/skins/4.png" alt="Black Skin">BLACK BOXED</li>';
html += '      <li class="skin-item" data-skin="blue-boxed"><img src="images/skins/5.png" alt="Blue Skin">BLUE BOXED</li>';
html += '      <li class="skin-item" data-skin="green-boxed"><img src="images/skins/6.png" alt="Green Skin">GREEN BOXED</li>';
html += '    </ul>';
html += '    <ul class="skin-list-container">';
html += '      <li class="skin-item" data-skin="black-boxed-out"><img src="images/skins/7.png" alt="Black Skin">BLACK <br />BOXED OUT</li>';
html += '      <li class="skin-item" data-skin="blue-boxed-out"><img src="images/skins/8.png" alt="Blue Skin">BLUE <br />BOXED OUT</li>';
html += '      <li class="skin-item" data-skin="green-boxed-out"><img src="images/skins/9.png" alt="Green Skin">GREEN <br />BOXED OUT</li>';
html += '    </ul>';
html += '    <ul class="skin-list-container">';
html += '      <li class="skin-item" data-skin="black-header-out"><img src="images/skins/10.png" alt="Black Skin">BLACK <br />HEADER OUT</li>';
html += '      <li class="skin-item" data-skin="blue-header-out"><img src="images/skins/11.png" alt="Blue Skin">BLUE <br />HEADER OUT</li>';
html += '      <li class="skin-item" data-skin="green-header-out"><img src="images/skins/12.png" alt="Green Skin">GREEN <br />HEADER OUT</li>';
html += '    </ul>';
html += '    <div style="clear:both;"> </div>';
html += '    <div id="switcher-toggle"><div class="icon-toggle"></div></div>';
html += '  </div>';
html += '</div>';

/*
 * Manage Cookies with jQuery – http://www.quirksmode.org/js/cookies.html
 */

function createCookie(name,value,days) {
if (days) {
	var date = new Date();
	date.setTime(date.getTime()+(days*24*60*60*1000));
	var expires = "; expires="+date.toGMTString();
}
else var expires = "";
document.cookie = name+"="+value+expires+"; path=/";
}

function readCookie(name) {
var nameEQ = name + "=";
var ca = document.cookie.split(';');
for(var i=0;i < ca.length;i++) {
	var c = ca[i];
	while (c.charAt(0)==' ') c = c.substring(1,c.length);
	if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
}
return null;
}

function eraseCookie(name) {
createCookie(name,"",-1);
}


/*
 * Change Style Sheet Using Javascript Tutorial CSS Swap Stylesheet – http://www.developphp.com/view.php?tid=1253
 */

function swapStyleSheet(skin){
  document.getElementById('skin-style').setAttribute('href', 'stylesheets/' + skin + '/adorable-all.css');
}

jQuery.fn.skinSwitcher = function (skin) {

  switch (skin) {

    case "black":
      // Swap the stylesheet
      swapStyleSheet("black");
      $(".page-wrapper").attr("id", "").removeClass().addClass("page-wrapper");
      break;
    case "blue":
      // Swap the stylesheet
      swapStyleSheet("blue");
      $(".page-wrapper").attr("id", "").removeClass().addClass("page-wrapper");
      break;
    case "green":
      // Swap the stylesheet
      swapStyleSheet("green");
      $(".page-wrapper").attr("id", "").removeClass().addClass("page-wrapper");
      break;

    case "black-boxed":
      // Swap the stylesheet
      swapStyleSheet("black");
      $(".page-wrapper").attr("id", "boxed-layout").removeClass().addClass("page-wrapper simple-boxed");
      break;
    case "blue-boxed":
      // Swap the stylesheet
      swapStyleSheet("blue");
      $(".page-wrapper").attr("id", "boxed-layout").removeClass().addClass("page-wrapper simple-boxed");
      break;
    case "green-boxed":
      // Swap the stylesheet
      swapStyleSheet("green");
      $(".page-wrapper").attr("id", "boxed-layout").removeClass().addClass("page-wrapper simple-boxed");
      break;

    case "black-boxed-out":
      // Swap the stylesheet
      swapStyleSheet("black");
      $(".page-wrapper").attr("id", "boxed-layout").removeClass().addClass("page-wrapper boxed-out");
      break;
    case "blue-boxed-out":
      // Swap the stylesheet
      swapStyleSheet("blue");
      $(".page-wrapper").attr("id", "boxed-layout").removeClass().addClass("page-wrapper boxed-out");
      break;
    case "green-boxed-out":
      // Swap the stylesheet
      swapStyleSheet("green");
      $(".page-wrapper").attr("id", "boxed-layout").removeClass().addClass("page-wrapper boxed-out");
      break;

    case "black-header-out":
      // Swap the stylesheet
      swapStyleSheet("black");
      $(".page-wrapper").attr("id", "boxed-layout").removeClass().addClass("page-wrapper header-out");
      break;
    case "blue-header-out":
      // Swap the stylesheet
      swapStyleSheet("blue");
      $(".page-wrapper").attr("id", "boxed-layout").removeClass().addClass("page-wrapper header-out");
      break;
    case "green-header-out":
      // Swap the stylesheet
      swapStyleSheet("green");
      $(".page-wrapper").attr("id", "boxed-layout").removeClass().addClass("page-wrapper header-out");
      break;
  }
};

/*
 * Change active skin
 */

$(document).ready(function(){



  $("body").append(html);

  // Clicking on skin
  $("#skin-switcher .skin-item").click(function() {
    // Remove active class of old skin
    $("#skin-switcher .skin-item").removeClass("active-skin");
    // Get the skin attribute
    var skin = $(this).data("skin");
    // Add active-skin class to the element
    $(this).addClass("active-skin");
    // Set cookie
    createCookie("skin",skin);
    $(this).skinSwitcher(skin);
    return false;
  });

  // Check innitial color cookie
  if (readCookie("skin") != null) {
    // Remove active class of default skin
    $("#skin-switcher .skin-item").removeClass("active-skin");
    // Get the color from stored cookie
    var cookieSkin = readCookie("skin");
    // Add active-skin class to the element
    $('*[data-skin="'+cookieSkin+'"]').addClass("active-skin").skinSwitcher(cookieSkin);
  }



  // Clicking skin switcher toggle
  $('#switcher-toggle').click(function() {
    if (readCookie("switcher") != null) {
      $('#skin-switcher').animate({left: "0"}, 500);
      $('#switcher-toggle .icon-toggle').css({'transform': 'rotate(180deg)'});
      eraseCookie("switcher");
    } else {
      $('#skin-switcher').animate({left: "-360px"}, 500);
      $('#switcher-toggle .icon-toggle').css({'transform': 'rotate(0deg)'});
      createCookie("switcher",true);
    }
  });

  // Check innitial switcher visibility cookie
  if (readCookie("switcher") != null) {
    $('#skin-switcher').css({left: "-360px"});
    $('#switcher-toggle .icon-toggle').css({'transform': 'rotate(0deg)'});
  } else {
    $('#switcher-toggle .icon-toggle').css({'transform': 'rotate(180deg)'});
  }

});