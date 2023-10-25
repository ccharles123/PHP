jQuery(document).ready(listo);


function listo() 
{//*despliega el menú hamburguesa y se le coloca la "X" de cerrar*/
    jQuery(".hamb").click(function(e){
        e.preventDefault();
        jQuery("header .container nav").toggleClass("open");
        jQuery(".hamb i").toggleClass("fa-times");
    });

    /*nos trae el href al que le estamos haciendo click, este valor lo buscar en el body del html y hace scoll hasta ahí*/
    jQuery("header .container nav a").click(function(e){

        jQuery("header .container nav").removeClass("open");
        jQuery(".hamb i").removeClass("fa-times");
        var dev = jQuery(this).attr("href");

        jQuery("html, body").animate({
            "scrollTop": jQuery(dev).offset().top - 76
        })
    });
}
