//-----Search grauates  | START -----//

function myFunction() {
    var input, filter, ul, li, a, span, i;
    input = document.getElementById('search');
    filter = input.value.toUpperCase();
    ul = document.getElementById("graduates");
    li = ul.getElementsByTagName('li');


    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}

//-----Search grauates  | END -----//




//Alfred hover block 2 | START -----//

$('#block2-section1').hover(function(){
    $('.b2-category1').toggleClass('open');
    $("#changetext2").text("Level E, West");
});

$('#block2-section3').hover(function(){
    $('.b2-category2').toggleClass('open');
    $("#changetext2").text("Level D & E");
});

$('#block2-section2').hover(function(){
    $('.b2-category3').toggleClass('open');
    $("#changetext2").text("Level E, East");
});

$('.b2-category1').hover(function(){
    $('#block2-section1').toggleClass('open');
    $("#changetext2").text("Level E, West");
});

$('.b2-category3').hover(function(){
    $('#block2-section2').toggleClass('open');
    $("#changetext2").text("Level E, East");
});

$('.b2-category2').hover(function(){
    $('#block2-section3').toggleClass('open');
    $("#changetext2").text("Level D & E");
});

//Alfred hover block 2 | END -----//

//Alfred hover block 12 | START -----//

$('#block12-section1').hover(function(){
    $('.b12-category1').toggleClass('open');
    $("#changetext").text("Level A, South");
});

$('#block12-section2').hover(function(){
    $('.b12-category2').toggleClass('open');
    $("#changetext").text("Level A, Middle");
});

$('#block12-section3').hover(function(){
    $('.b12-category3').toggleClass('open');
    $("#changetext").text("Level B, Pit");
});

$('#block12-section4').hover(function(){
    $('.b12-category4').toggleClass('open');
    $("#changetext").text("Level C, All");
});

$('#block12-section5').hover(function(){
    $('.b12-category5').toggleClass('open');
    $("#changetext").text("Level D, South");
});

$('#block12-section6').hover(function(){
    $('.b12-category6').toggleClass('open');
    $("#changetext").text("Level D, North");
});

$('#block12-section7').hover(function(){
    $('.b12-category7').toggleClass('open');
    $("#changetext").text("Level E, South");
});

$('#block12-section8').hover(function(){
    $('.b12-category8').toggleClass('open');
    $("#changetext").text("Level E, Middle");
});

$('#block12-section9').hover(function(){
    $('.b12-category9').toggleClass('open');
    $("#changetext").text("Level E, North");
});

$('.b12-category1').hover(function(){
    $('#block12-section1').toggleClass('open');
    $("#changetext").text("Level A, South");
});

$('.b12-category2').hover(function(){
    $('#block12-section2').toggleClass('open');
    $("#changetext").text("Level A, Middle");
});

$('.b12-category3').hover(function(){
    $('#block12-section3').toggleClass('open');
    $("#changetext").text("Level B, Pit");
});

$('.b12-category4').hover(function(){
    $('#block12-section4').toggleClass('open');
    $("#changetext").text("Level C, All");
});

$('.b12-category5').hover(function(){
    $('#block12-section5').toggleClass('open');
    $("#changetext").text("Level D, South");
});

$('.b12-category6').hover(function(){
    $('#block12-section6').toggleClass('open');
    $("#changetext").text("Level D, North");
});

$('.b12-category7').hover(function(){
    $('#block12-section7').toggleClass('open');
    $("#changetext").text("Level E, South");
});

$('.b12-category8').hover(function(){
    $('#block12-section8').toggleClass('open');
    $("#changetext").text("Level E, Middle");
});

$('.b12-category9').hover(function(){
    $('#block12-section9').toggleClass('open');
    $("#changetext").text("Level E, North");
});
//Alfred hover block 12 | END -----//






//-----Actives menu  | START -----//

//Click menu  

$('#toggle-menu,#toggle-menu2').click(function() {
   $(this).toggleClass('active');
    $('.menu-header').toggleClass('open');
    $('.main').toggleClass('open');
//    $('.menu-text').toggleClass('open');
  });

$(function() {
    $('#overlay').click(function() {
        $('main')
            .css('overflow', 'hidden');
    });
	$('body, .close').click(function() {
        $('body')
            .css('overflow', 'visible');
    });
});

//Student filter

$('.filter-all').click(function() {
   $(this).toggleClass('active');
    $('.visual').toggleClass('open');
    $('.art').toggleClass('open');
    $('.fashion').toggleClass('open');
    $('.photography').toggleClass('open');
    $('.textile').toggleClass('open');
    $('.spatial').toggleClass('open');
    $('.industrial').toggleClass('open');    
  });

$('.filter-visual').click(function() {
   $(this).toggleClass('active');
    $('.filter-visual').toggleClass('open');
    $('.art').toggleClass('open');
    $('.fashion').toggleClass('open');
    $('.photography').toggleClass('open');
    $('.textile').toggleClass('open');
    $('.spatial').toggleClass('open');
    $('.industrial').toggleClass('open');
  });

$('.filter-art').click(function() {
   $(this).toggleClass('active');
    $('.visual').toggleClass('open');
    $('.filter-art').toggleClass('open');
    $('.fashion').toggleClass('open');
    $('.photography').toggleClass('open');
    $('.textile').toggleClass('open');
    $('.spatial').toggleClass('open');
    $('.industrial').toggleClass('open');
  });

$('.filter-fashion').click(function() {
   $(this).toggleClass('active');
    $('.visual').toggleClass('open');
    $('.art').toggleClass('open');
    $('.filter-fashion').toggleClass('open');
    $('.photography').toggleClass('open');
    $('.textile').toggleClass('open');
    $('.spatial').toggleClass('open');
    $('.industrial').toggleClass('open');
  });

$('.filter-photography').click(function() {
   $(this).toggleClass('active');
    $('.visual').toggleClass('open');
    $('.art').toggleClass('open');
    $('.fashion').toggleClass('open');
    $('.filter-photography').toggleClass('open');
    $('.textile').toggleClass('open');
    $('.spatial').toggleClass('open');
    $('.industrial').toggleClass('open');
  });

$('.filter-textile').click(function() {
   $(this).toggleClass('active');
    $('.visual').toggleClass('open');
    $('.art').toggleClass('open');
    $('.fashion').toggleClass('open');
    $('.photography').toggleClass('open');
    $('.filter-textile').toggleClass('open');
    $('.spatial').toggleClass('open');
    $('.industrial').toggleClass('open');
  });

$('.filter-spatial').click(function() {
   $(this).toggleClass('active');
    $('.visual').toggleClass('open');
    $('.art').toggleClass('open');
    $('.fashion').toggleClass('open');
    $('.photography').toggleClass('open');
    $('.textile').toggleClass('open');
    $('.industrial').toggleClass('open');
  });

$('.filter-industrial').click(function() {
   $(this).toggleClass('active');
    $('.visual').toggleClass('open');
    $('.art').toggleClass('open');
    $('.fashion').toggleClass('open');
    $('.photography').toggleClass('open');
    $('.textile').toggleClass('open');
    $('.spatial').toggleClass('open');
  });




//hover over the names on homepage

    $('#graduates li a').hover(function(){
//        $('.student-filter').toggleClass('open');
//        $('#search').toggleClass('open');
        $('#graduates li a').toggleClass('open');
     });

    $('#1').hover(function(){
        $('.student-1').toggleClass('open');
     });
    $('#2').hover(function(){
        $('.student-2').toggleClass('open');
     });
    $('#3').hover(function(){
        $('.student-3').toggleClass('open');
     });
    $('#4').hover(function(){
        $('.student-4').toggleClass('open');
     });
    $('#5').hover(function(){
        $('.student-5').toggleClass('open');
     });
    $('#6').hover(function(){
        $('.student-6').toggleClass('open');
     });
    $('#7').hover(function(){
        $('.student-7').toggleClass('open');
     });
    $('#8').hover(function(){
        $('.student-8').toggleClass('open');
     });
    $('#9').hover(function(){
        $('.student-9').toggleClass('open');
     });
    $('#10').hover(function(){
        $('.student-10').toggleClass('open');
     });
    $('#11').hover(function(){
        $('.student-7').toggleClass('open');
     });
    $('#12').hover(function(){
        $('.student-8').toggleClass('open');
     });
    $('#13').hover(function(){
        $('.student-9').toggleClass('open');
     });
    $('#14').hover(function(){
        $('.student-10').toggleClass('open');
     });
    $('#15').hover(function(){
        $('.student-9').toggleClass('open');
     });
    $('#16').hover(function(){
        $('.student-10').toggleClass('open');
     });
    $('#17').hover(function(){
        $('.student-7').toggleClass('open');
     });
    $('#18').hover(function(){
        $('.student-8').toggleClass('open');
     });
    $('#19').hover(function(){
        $('.student-9').toggleClass('open');
     });
    $('#20').hover(function(){
        $('.student-10').toggleClass('open');
     });
    $('#21').hover(function(){
        $('.student-1').toggleClass('open');
     });
    $('#22').hover(function(){
        $('.student-2').toggleClass('open');
     });
    $('#23').hover(function(){
        $('.student-3').toggleClass('open');
     });
    $('#24').hover(function(){
        $('.student-4').toggleClass('open');
     });
    $('#25').hover(function(){
        $('.student-5').toggleClass('open');
     });
    $('#26').hover(function(){
        $('.student-6').toggleClass('open');
     });
    $('#27').hover(function(){
        $('.student-7').toggleClass('open');
     });
    $('#28').hover(function(){
        $('.student-8').toggleClass('open');
     });
    $('#29').hover(function(){
        $('.student-9').toggleClass('open');
     });
    $('#30').hover(function(){
        $('.student-10').toggleClass('open');
     });
    $('#31').hover(function(){
        $('.student-7').toggleClass('open');
     });
    $('#32').hover(function(){
        $('.student-8').toggleClass('open');
     });
    $('#33').hover(function(){
        $('.student-9').toggleClass('open');
     });
    $('#34').hover(function(){
        $('.student-10').toggleClass('open');
     });
    $('#35').hover(function(){
        $('.student-9').toggleClass('open');
     });
    $('#36').hover(function(){
        $('.student-10').toggleClass('open');
     });
    $('#37').hover(function(){
        $('.student-7').toggleClass('open');
     });
    $('#38').hover(function(){
        $('.student-8').toggleClass('open');
     });
    $('#39').hover(function(){
        $('.student-9').toggleClass('open');
     });
    $('#40').hover(function(){
        $('.student-10').toggleClass('open');
     });
    //Alternating names
    
     var quotes = $(".alternating-introtext");
    var quoteIndex = -1;
    
    function showNextQuote() {
        ++quoteIndex;
        quotes.eq(quoteIndex % quotes.length)
            .fadeIn(300)
            .delay(700)
            .fadeOut(300, showNextQuote);
    }
    
    showNextQuote();
    
    

 //-----Remove Hover for moblie | START -----//


$(function () {
var touch = 'ontouchstart' in document.documentElement
            || navigator.maxTouchPoints > 0
            || navigator.msMaxTouchPoints > 0;

if (touch) { // remove all :hover stylesheets
    try { // prevent exception on browsers not supporting DOM styleSheets properly
        for (var si in document.styleSheets) {
            var styleSheet = document.styleSheets[si];
            if (!styleSheet.rules) continue;

            for (var ri = styleSheet.rules.length - 1; ri >= 0; ri--) {
                if (!styleSheet.rules[ri].selectorText) continue;

                if (styleSheet.rules[ri].selectorText.match(':hover')) {
                    styleSheet.deleteRule(ri);
                }
            }
        }
    } catch (ex) {}
}
    });

 //-----Remove Hover for moblie | END -----//