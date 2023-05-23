$(document).ready(function(){
    calc_stats() 
});
    
function calc_stats() {
    $('.counter').each(function () {
        $(this).prop('Counter', 0).animate({
            Counter: $(this).text()
        }, {
            duration: 4000,
            easing: 'swing',
            step: function (now) {
                $(this).text(Math.ceil(now).toLocaleString('en'));
            }
        });
    });

};

/**************************************
 * WORK IN PROGGRESS
 
$(allInView);
$(window).scroll(allInView);


function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

function isScrolledIntoView(elem) {
    console.log(elem)
    
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();

    var elemTop = $(elem).offset().top;
    var elemBottom = elemTop + $(elem).height();

    return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
    
   return false
}

function allInView() {

    if (isScrolledIntoView($(".walkerlab_facts_container"))) {
        calc_stats()

    };
}
*/