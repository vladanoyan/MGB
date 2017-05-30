// Menu
$(document).ready(function () {


    /** Refresh Modal Window Content */
    $(document).on('hidden.bs.modal', function (e) {
        $(e.target).removeData('bs.modal');
    });

/*__________Tooltip Initialization Starts__________*/
var startTooltip= function() {
    var hideAllTooltips = function() {
        $('[data-toggle="tooltip"]').each(function() {
            $(this).tooltip('hide');
            $(this).attr('data-visible',false);
        });
    };

    $('[data-toggle="tooltip"]').tooltip();
    $('[data-toggle="tooltip"]').bind('click', function(e) {

        e.preventDefault();
        e.stopPropagation();
        if($(this).attr('data-visible')=='true')
        {
            $(this).tooltip('hide');
            $(this).attr('data-visible',false);
        }
        else
        {
            $(this).tooltip('show');
            $(this).attr('data-visible',true);
        }

    });

    $(document).click(function (e) {
        $('[data-toggle="tooltip"]').attr('data-visible',false);
    });
}

$(function() {
    startTooltip();
});
$(document).ajaxComplete(function() {
    startTooltip();
});
/*__________Tooltip Initialization Ends__________*/


/*_________Changing Toggle Button Active State Starts__________*/
$(".navbar-toggle").click(function(){
    if($("div .navbar-collapse").attr("aria-expanded")=="true")
    {
        $(".navbar-toggle .icon-bar").addClass('navbar-toggle-normal');
        $(".navbar-toggle .icon-bar").removeClass('navbar-toggle-active');
    }
    else
    {
        $(".navbar-toggle .icon-bar").removeClass('navbar-toggle-normal');
        $(".navbar-toggle .icon-bar").addClass('navbar-toggle-active');
    }

});
/*_________Changing Toggle Button Active State Ends__________*/




    
    $('.menuToggle').click(function () {
        $('.mainNavbarMenu').slideToggle(500, function () {
        });
    });
});
// /Menu

// Carousels
$('.mainSlider').owlCarousel({
    loop:true,
    nav:false,
    items: 1,
    autoplay: true,
    autoplayTimeout: 5000,
    animateOut: 'fadeOut',
    smartSpeed: 450,
});
$('.coupsDeCoeurSlider').owlCarousel({
    loop:true,
    autoplay:true,
    autoplayTimeout:5000,
    margin:50,
    nav:true,
    navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
    responsiveClass:true,
    responsive: {
        0: {
            items: 1
        },
        768: {
            items: 2
        },
        992: {
            items: 3
        },
        1200: {
            items: 4
        }
    }
});
$('.ficheItemCoverImage').owlCarousel({
    items:1,
    center:true,
    URLhashListener:true,
    startPosition: 'URLHash',
    dots:false,
    nav:true,
    navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
});
// /Carousels

var inputs = document.querySelectorAll( '.fileUpload' );
Array.prototype.forEach.call( inputs, function( input )
{
	var label	 = ('.fileUploadLabel'),
		labelVal = label.innerHTML;

	input.addEventListener( 'change', function( e )
	{
		var fileName = '';

		if( fileName )
			label.querySelector( 'span' ).innerHTML = fileName;
		else
			label.innerHTML = labelVal;
	});


    

    /*__________DPE GES Hover Effect Starts________*/
    $(document).on({
        mouseenter: function(e) {
            $(".btn-hover-container").not(this).find(".hover-content").stop(true, true).delay(300).slideUp(300);
            $(this).find(".hover-content").stop(true, true).delay(400).slideToggle(400);
        },
        mouseleave: function(e) {
            $(this).find(".hover-content").stop(true, true).delay(300).slideUp(300);
        },
    }, '.no-touchevents .btn-hover-container');

    $(document).on('click','.touchevents .btn-hover-container',function(e){
        e.stopPropagation();
        $(".btn-hover-container").not(this).find(".hover-content").stop(true, true).slideUp(400);
        $(this).find(".hover-content").stop(true, true).slideToggle(400);
    });
    $(document).on("click", function(e) {
        $(".hover-content").stop(true, true).slideUp(400);
    });
    /*__________DPE GES Hover Effect Ends________*/

});
/*
 * Haytech Front End Model Core v.2.2.3
 * Copyright 2016, Haytech Solutions
 * Custom Functions
 */

/*__________Tooltip Initialization Starts__________*/
var startTooltip= function() {
     var hideAllTooltips = function() {
       $('[data-toggle="tooltip"]').each(function() {
            $(this).tooltip('hide');
            $(this).attr('data-visible',false);
        });  
    };
    
    $('[data-toggle="tooltip"]').tooltip();
    $('[data-toggle="tooltip"]').bind('click', function(e) {
        
        e.preventDefault(); 
        e.stopPropagation();
        if($(this).attr('data-visible')=='true')
        {
            $(this).tooltip('hide');
            $(this).attr('data-visible',false);
        }
        else
        {
            $(this).tooltip('show');
            $(this).attr('data-visible',true);
        }
    
    });

    $(document).click(function (e) {
        $('[data-toggle="tooltip"]').attr('data-visible',false);
    });
}

$(function() {
    startTooltip();
});
$(document).ajaxComplete(function() {
    startTooltip();
});
/*__________Tooltip Initialization Ends__________*/


/*_________Changing Toggle Button Active State Starts__________*/
$(".navbar-toggle").click(function(){
    if($("div .navbar-collapse").attr("aria-expanded")=="true")
    {
        $(".navbar-toggle .icon-bar").addClass('navbar-toggle-normal');
        $(".navbar-toggle .icon-bar").removeClass('navbar-toggle-active');
    }
    else    
    {
        $(".navbar-toggle .icon-bar").removeClass('navbar-toggle-normal');
        $(".navbar-toggle .icon-bar").addClass('navbar-toggle-active');
    }
        
});
/*_________Changing Toggle Button Active State Ends__________*/


/*_________One Item Image Slider Starts__________*/
if($(".one-item-image-slider-m1").length)
    $(document).ready(function() {
        var owl=$(".one-item-image-slider-m1");
        
        if (getInternetExplorerVersion() <= 9) {
            owl.owlCarousel({
                singleItem:true,
                navigation: true,
                loop:true,
                autoPlay:true,
                autoPlayTimeout:5000,
                autoplaySpeed:5000
            });
        }
        else {
            owl.owlCarousel({
                singleItem:true,
                navigation: true,
                loop:true,
                autoPlay:true,
                autoPlayTimeout:5000,
                autoplaySpeed:5000,
                /* Is not supportted by IE9 */
                transitionStyle : "fade",/* backSLide, goDown, fadeUp  */
            });
        
        }
        
        $( ".owl-next" ).empty();
        $( ".owl-prev" ).empty();
    });
/*_________One Item Image Slider Ends__________*/


/*_________Multi Item Image Slider Starts__________*/
/* Multi Item Image Slider Version1 */
if($(".multi-item-image-slider-m1").length)
    $(document).ready(function() {
        var owl=$(".multi-item-image-slider-m1");
        
        owl.owlCarousel({
              autoPlay: false,
              pagination: false,
              scrollPerPage : true,
              itemsCustom : [
                [0, 1],
                [480, 1],
                [650, 1],
                [768, 2],
                [992, 2],
                [1350, 3]
              ],
              navigation : true,
              transitionStyle : "fade",
              slideSpeed : 1000
        });
        
        $( ".owl-next" ).empty();
        $( ".owl-prev" ).empty();
        
        /* Remove transition hover shaking of owl item in IE */
        $(".no-touchevents .multi-item-slider-caption figcaption").hover(
            function() { 
                if(getInternetExplorerVersion()!=-1)
                    $(".owl-item").addClass("owl-item-no-transform");
            }
        )
        
    });

/* Multi Item Image Slider Version2 */
if($(".multi-item-image-slider-m2").length)
    $(document).ready(function() {
        var owl=$(".multi-item-image-slider-m2");

        owl.owlCarousel({
            autoPlay: false,
            pagination: false,
            scrollPerPage : true,
            itemsCustom : [
                [0, 1],
                [480, 1],
                [650, 2],
                [768, 2],
                [992, 2],
                [1350, 2]
            ],
            navigation : true,
            transitionStyle : "fade",
            slideSpeed : 1000
        });

        $( ".owl-next" ).empty();
        $( ".owl-prev" ).empty();

        /* Remove transition hover shaking of owl item in IE */
        $(".no-touchevents .multi-item-slider-caption figcaption").hover(
            function() {
                if(getInternetExplorerVersion()!=-1)
                    $(".owl-item").addClass("owl-item-no-transform");
            }
        )

    });

/* Multi Item Image Slider Version3 */
if($(".multi-item-image-slider-m3").length)
    $(document).ready(function() {
        var owl=$(".multi-item-image-slider-m3");

        owl.owlCarousel({
            autoPlay: false,
            pagination: false,
            scrollPerPage : true,
            itemsCustom : [
                [0, 1],
                [480, 1],
                [650, 2],
                [768, 2],
                [992, 2],
                [1350, 2]
            ],
            navigation : true,
            transitionStyle : "fade",
            slideSpeed : 1000
        });

        $( ".owl-next" ).empty();
        $( ".owl-prev" ).empty();

        /* Remove transition hover shaking of owl item in IE */
        $(".no-touchevents .multi-item-slider-caption figcaption").hover(
            function() {
                if(getInternetExplorerVersion()!=-1)
                    $(".owl-item").addClass("owl-item-no-transform");
            }
        )

    });
/*_________Multi Item Image Slider Ends__________*/


/*__________Flex Slider Starts ________*/

/* Function for Flex Slider Initialization */
$(window).load(function(){
if($('#thumbnails').length)
 $('#thumbnails').flexslider({
    animation: "slide",
    controlNav: false,
    animationLoop: false,
    slideshow: false,
    itemWidth: 94,
    itemMargin: 2,
    asNavFor: '#slider'
  });

if($('#slider').length)
    $('#slider').flexslider({
    animation: "slide",
    controlNav: false,
    animationLoop: true,
    slideshow: false,
    sync: "#thumbnails",
    start: function(slider){
      $('body').removeClass('loading');
    }
  });
     
});

/* Function for Adding Listing Item Details Gallery Thumbnails Starts */
function addFakeThumbs() {
    
    $('#thumbnails').css('width', 'auto');
    
    var curThumbCnt=$('.real-thumb').length; 
    
    var thumbContWidth=$('#thumbnails').outerWidth()-36; 
    var fitThumbCnt=thumbContWidth/96; 
    var addThumbCnt=Math.floor(fitThumbCnt-curThumbCnt);
    
    //$('#test-val').html(curThumbCnt + '--'+thumbContWidth+'--'+fitThumbCnt+'--'+addThumbCnt);
    for(i=0; i<addThumbCnt; i++)
    {
        if(i==0)
            $('.real-thumb').last().
            after('<li style="width: 94px; margin-right: 2px; float: left; display: block;" class="fake-thumb"><div class="row-col lst-itm-dtl-thumb" ></div></li>');
        else
            $('.fake-thumb').last().
            after('<li style="width: 94px; margin-right: 2px; float: left; display: block;" class="fake-thumb"><div class="row-col lst-itm-dtl-thumb" ></div></li>');
    }
    if(addThumbCnt>0)
        $('#thumbnails .flex-direction-nav').css('display','none');
    
    $('.fake-thumb').unbind('click');
};

$(function(){
    addFakeThumbs(); 
});
$(window).bind('resize', function() {
    addFakeThumbs();
    
});
$(window).load(function(){
    addFakeThumbs(); 
});

/*__________Flex SLider Ends ________*/


/*__________Preventing Default Behaviour of Empty Links Starts ________*/
var fixFocusOfEmptyLinks= function() {
    $('a[href="#"]').click(function(event){
    event.preventDefault();
});
}

$(function() {
    fixFocusOfEmptyLinks();
});
$(document).ajaxComplete(function() {
    fixFocusOfEmptyLinks();
});
/*__________Preventing Default Behaviour of Empty Links Ends ________*/


/*__________Lightbox Gallery Starts________*/
$(function(){
    if($('.gallery').length)
    {
        var gallery = $('.gallery .gal-class').simpleLightbox({
        navText:['',''],
        })
        var gallery1 = $('.gallery .gal-class1').simpleLightbox({
        navText:['',''],
        })
            
        var galCustomStyleForNav=function(){
            var imgWidth = $('.sl-image').width();
            var windowWidth = window.innerWidth;
            var marg=(windowWidth-imgWidth)/2;
            $('.sl-prev').css('left', marg);
            $('.sl-next').css('right', marg);
            $('.sl-prev').css('visibility', 'visible');
            $('.sl-next').css('visibility', 'visible');
        };
        
        $('.gallery .gal-class').on('shown.simplelightbox', function () {
            galCustomStyleForNav();
        });
        $('.gallery .gal-class1').on('shown.simplelightbox', function () {
            galCustomStyleForNav();
        });
        $(window).bind('resize', function(){
            galCustomStyleForNav();
        });
        
        
    }
});
/*__________Lightbox Gallery Ends________*/


/*__________Listing Item Functions Start_________*/

/* Match Item heights for Listing Item */
var matchHeightLstItm=function(){
    if(window.innerWidth>992)
    {
        if($('.listing-item-content').length)
            $('.listing-item-content').css('height', 'auto');
        
        if($('.listing-item-img').length)
            $('.listing-item-img').outerHeight($('.listing-item-content').outerHeight());
    }
    else
        $('.listing-item-img').css('height','auto');
};

/* DPE, GES Hover Effect Starts */
$(document).on({
    mouseenter: function(e) {
        $(".hover-btn-container").not(this).find(".hover-content").stop(true, true).slideUp(400);
        $(this).find(".hover-content").stop(true, true).slideToggle(400);
    },
    mouseleave: function(e) {
        $(this).find(".hover-content").stop(true, true).slideUp(400);
    },
}, '.no-touchevents .hover-btn-container');


$(document).on('click','.touchevents .hover-btn-container',function(e){
    e.stopPropagation();
    $(".hover-btn-container").not(this).find(".hover-content").stop(true, true).slideUp(400);
    $(this).find(".hover-content").stop(true, true).slideToggle(400);
});
$(document).on("click", function(e) {
    $(".hover-content").stop(true, true).slideUp(400);
});
/* DPE, GES Hover Effect Ends */

/* This functions should be called after initializing ajax */           
//$(document).ajaxComplete(function() {
    /* Fix Focus of Empty Links */
    //fixFocusOfEmptyLinks();

    /* Match Item heights for Listing Item */
   // matchHeightLstItm();

    /* Center Listing Item Image */
    //centerImage('.listing-item-img-container > a');
//});

/* Listing Item: Ready, Resize and Load Functions Start */
$(function(){
    /* Match Item heights for Listing Item */
    matchHeightLstItm();
    
    /* Center Listing Item Image */
    centerImage('.listing-item-img-container > a');
    centerImage('.listing-section-m2 .listing-item-img-container');
});

$(window).resize(function(){
    /* Match Item heights for Listing Item */
    matchHeightLstItm();
    
    /* Center Listing Item Image */
    centerImage('.listing-item-img-container > a ');
    centerImage('.listing-section-m2 .listing-item-img-container');
});

$(window).bind('load',function(){
    /* Match Item heights for Listing Item */
    matchHeightLstItm();
    
    /* Center Listing Item Image */
    centerImage('.listing-item-img-container > a');
    centerImage('.listing-section-m2 .listing-item-img-container');
});
/* Listing Item: Ready, Resize and Load Functions End */

/*__________Listing Item Functions End_________*/


/*__________Listing Item Details Functions Start_________*/

/* Fix Height and Alignment of Listing Item Details Contact Block Starts */
var applyFixForLstDtlContactImage = function(idClass) {

    if($('.lst-itm-dtl-contacts-img').length)
    {
        $('.lst-itm-dtl-contacts-img').css('height','auto');
        $('.lst-itm-dtl-contacts-txt').css('height','auto');
        $(idClass).css('line-height','normal');

        $('.lst-itm-dtl-contacts-col').matchHeight();
        $(idClass).css('line-height',$(idClass).height()-10+"px");
    }
}
/* Fix Height and Alignment of Listing Item Details Contact Block Ends */

/*__ Set Listing Item Details Cols Heights Starts __*/

/* Sets Cols Heights for Listing Item Details Model1 */
var setListItmColsHeightM1 =function()
{
    var leftOuterWidth=$('#thumbnails').outerHeight();
    var rightOuterWidth=$('.lst-itm-dtl-header').outerHeight()+$('.lst-itm-dtl-actions').outerHeight()
        +$('.lst-itm-dtl-desc-header').outerHeight()+$('.lst-itm-dtl-note-txt').outerHeight()+21;
    setListItmColsHeight(leftOuterWidth, rightOuterWidth );
}

/* Sets Cols Heights for Listing Item Details Model2 */
var setListItmColsHeightM2 =function()
{
    var leftOuterWidth=0;
    var rightOuterWidth=$('.lst-itm-dtl-actions').outerHeight()+$('.lst-itm-dtl-desc-header').outerHeight()+$('.lst-itm-dtl-note-txt').outerHeight();
    setListItmColsHeight(leftOuterWidth, rightOuterWidth );

    $('.thumbnails-wrapper').css('height','auto');
    $('.lst-itm-dtl-params').css('height','auto');
    if(window.innerWidth>=1200)
    {
        var maxHeight=Math.max($('.thumbnails-wrapper').outerHeight(),$('.lst-itm-dtl-params').outerHeight());
        $('.thumbnails-wrapper').outerHeight(maxHeight+18);
        $('.lst-itm-dtl-params').outerHeight(maxHeight);
        //$('.lst-itm-dtl-params').height(maxHeight);
    }

}


/* General Function for setting Listing Item Details Cols Heights
 *  - Equals Listing Item Details left and right cols
 *  - Sets description height */
var setListItmColsHeight= function(leftOuterWidth, rightOuterWidth) {
    if($('.lst-itm-dtl-content').length)
    {
        $('.lst-itm-dtl-content').css('height','auto');
        $('.lst-itm-dtl-img').css('height','auto');
        $('.lst-itm-dtl-header').css('height','auto');
        if(window.innerWidth>=1200)
        {
            // Get height of slider image based on the width it takes
            // This is necessary because at this point flexslider is not initialized
            // and therefore height of slider image is unknown
            var theImage = new Image();
            theImage.src = $('.lst-itm-dtl-img img').attr("src");
            var imageWidth = theImage.width;
            var imageHeight = theImage.height;
            var imgColWidth=$('.lst-itm-dtl-img').width();
            var actHeight=0;
            var actDif=imgColWidth/imageWidth;
            imgActHeight=imageHeight *actDif;

            // Set height for right col based on left col
            var sliderClass=$('#slider').attr('class').toString();
            if(sliderClass.indexOf("slider-no-img")>=0)
                contentColHeight=imgActHeight+"px";
            else
                contentColHeight=imgActHeight+leftOuterWidth+"px";
            console.log(contentColHeight);
            $('.lst-itm-dtl-content').outerHeight(contentColHeight);

            // Set Description allowable max height for scrolling
            var descMaxHeight=$('.lst-itm-dtl-content').height()-rightOuterWidth+"px";
            $('.lst-itm-dtl-desc-content').css('max-height',descMaxHeight);
            $('.lst-itm-dtl-desc-content').css('min-height',descMaxHeight);
        }
        else
        {
            $('.lst-itm-dtl-desc-content').css('min-height','auto');
            $('.lst-itm-dtl-desc-content').css('max-height','none');
        }
    }

}

/*__ Set Listing Item Details Description Ends __*/

/* Listing Item Details: Ready, Resize and Load Functions Start */
$(function(){
    /* Equal GES-DPE Block Headers */
    if($('.header-equal').length)
        $('.header-equal').matchHeight();

    if($('.listing-details-section-m1').length)
        setListItmColsHeightM1();

    if($('.listing-details-section-m2').length)
        setListItmColsHeightM2();
});

$(window).resize(function(){
    /* Equal GES-DPE Block Headers */
    if($('.header-equal').length)
        $('.header-equal').matchHeight();

    if($('.listing-details-section-m1').length)
        setListItmColsHeightM1();

    if($('.listing-details-section-m2').length)
        setListItmColsHeightM2();

});

$(window).load(function(){
    /* Equal GES-DPE Block Headers */
    if($('.header-equal').length)
        $('.header-equal').matchHeight();

    if($('.listing-details-section-m1').length)
        setListItmColsHeightM1();

    if($('.listing-details-section-m2').length)
        setListItmColsHeightM2();
});
/* Listing Item Details: Ready, Resize and Load Functions End */

/*__________Listing Item Details Functions End_________*/


/*__________Match Heights for Form Block Cols Starts________*/

/* Form: Function for Headers Matching Starts */
var matchHeightForFormBlckCols=function() {
    $('.form-header').css('height','auto');
    $('.form-header-txt-blck').css('height','auto');
    $('.form-header').each(function() {
        $(this).height($(this).find('.form-header-txt-blck').height()+20);
    });
    
    if(window.innerWidth>768)
    {
        equalHeightsSimple('.form-header1-col2', '.form-header2-col2','');
    }
    if(window.innerWidth>768 && window.innerWidth<=992)
    {
        equalHeightsSimple('.form-header1-col3', '.form-header2-col3','');
        equalHeightsSimple('.form-header1-col4', '.form-header2-col4','');
        equalHeightsSimple('.form-header3-col4', '.form-header4-col4','');
    }
    if(window.innerWidth>992)
    {
        equalHeightsSimple('.form-header1-col3', '.form-header2-col3','.form-header3-col3');
        equalHeightsSimple('.form-header1-col4', '.form-header2-col4','.form-header3-col4');
    }
};
/* Form: Function for Headers Matching Ends */

/* Form: Ready, Resize and Load Functions Start */
$(function(){
    /* Match Height for Form Block Headers */   
    matchHeightForFormBlckCols();
    
});

$(window).resize(function(){
    /* Match Height for Form Block Headers */   
    matchHeightForFormBlckCols();
});

$(window).load(function(){
    /* Match Height for Form Block Headers */   
    matchHeightForFormBlckCols();
});
/* Form: Ready, Resize and Load Functions End */

/*__________Match Heights for Form Block Cols Ends__________*/


/*__________Match Heights for Header Cols Starts________*/
$(function(){
    if(window.innerWidth>768)
    {
        if($('.header-col').length)
            $('.header-col').matchHeight();
    }
    
});
/*__________Match Heights for Header Cols Ends________*/


/*__________Functions for Multiselect Starts__________*/

/* Function for Search Block Multiselect Starts */
var setSelMultiselectForSearchBlck= function(){
    if(window.innerWidth<992)
    {
        if($('.custom-multiselect1').length)
        {
            $('.custom-multiselect1').multiselect('destroy');
            $('.custom-multiselect1').multiselect({
                buttonWidth: '75%',
                buttonClass: 'custom-multiselect-btn',
                includeSelectAllOption: true,
                selectAllText:'Tout sélectionner',
                allSelectedText:'Tout sélectionné',
                numberDisplayed: 2,
                nSelectedText: 'Sélectionné',
            });
        }
        
    }
    else
    {
        if($('.custom-multiselect1').length)
        {
            $('.custom-multiselect1').multiselect('destroy');
            $('.custom-multiselect1').multiselect({
                buttonWidth: '100%',
                buttonClass: 'custom-multiselect-btn',
                includeSelectAllOption: true,
                selectAllText:'Tout sélectionner',
                allSelectedText:'Tout sélectionné',
                numberDisplayed: 2,
                nSelectedText: 'Sélectionné',
            });
        }
    
    }
    
}
/* Function for Search Block Multiselect Ends */

/* Function for Full Width Multiselect Starts */
var generalMultiSel= function() {
    if($('.custom-multiselect').length)
    {
        $('.custom-multiselect').multiselect({
            buttonWidth: '100%',
            buttonClass: 'custom-multiselect-btn',
            includeSelectAllOption: true,
            selectAllText:'Tout sélectionner',
            allSelectedText:'Tout sélectionné',
            numberDisplayed: 2,
            nSelectedText: 'Sélectionné',
        });
    }
}
/* Function for Full Width Multiselect Ends */

/* Multiselect: Ready, Resize and Load Functions Start */
$(function(){
    /* General Multiselect Styles */
    generalMultiSel();
    
    /* Multiselect Styles for Search Block */
    setSelMultiselectForSearchBlck();
    
});

$(window).resize(function(){
    /* General Multiselect Styles */
    generalMultiSel();
    
    /* Multiselect Styles for Search Block */
    setSelMultiselectForSearchBlck();
});

$(window).load(function(){
    /* General Multiselect Styles */
    generalMultiSel();
    
    /* Multiselect Styles for Search Block */
    setSelMultiselectForSearchBlck();
});

/* Multiselect: Ready, Resize and Load Functions End */

/*__________Functions for Select/Multiselect Ends__________*/


/*__________Home Page: Ready, Resize and Load Functions Start________*/
$(function(){
    /* Center Home Page Slider Image */
    centerImage('.one-item-image-slider-container');
});

$(window).resize(function(){
    /* Center Home Page Slider Image */
    centerImage('.one-item-image-slider-container');
});

$(window).load(function(){
    /* Center Home Page Slider Image */
    centerImage('.one-item-image-slider-container');
});
/*__________Home Page: Ready, Resize and Load Functions End_________*/


/*__________File Input Elipsis Functions Start__________*/
var setFileInputTextElipsis=function(cur) {
    var filename = $(cur).val().split('\\').pop();
    if(filename=='')
        filename=$(cur).attr('data-placeholder');
    var allowableWidth=$(cur).parent().find(".file-custom").outerWidth()-$(cur).parent().find( ".file-custom-txt" ).outerWidth()-5;
    $(cur).parent().find( ".file-name" ).text(middleElipsis(filename,allowableWidth));
    $(cur).parent().find( ".file-custom" ).css('padding-left',$(cur).parent().find( ".file-custom-txt").outerWidth()+5);
};

$('.file-input').change(function() {
    setFileInputTextElipsis(this);  
});

$(function(){
    $('.file-input').each(function(index, element) {
        setFileInputTextElipsis(this);
    });
});

$(window).resize(function(){
    $('.file-input').each(function(index, element) {
        setFileInputTextElipsis(this);
    });
});

$(window).load(function(){
    $('.file-input').each(function(index, element) {
        setFileInputTextElipsis(this);
    });
});
/*__________File Input Elipsis Functions End__________*/

/*__________Select2 Select Functions Start__________*/

/* Select2 select initialization for modal starts */
$('#contactModal').on('shown.bs.modal', function (e) {
    /* Select2 Modal Version open function for setting dropdown container */
    if($(".select2-sel-v1-modal").length)
        $(".select2-sel-v1-modal").select2().on("select2:open", function() {
            if($(this).parent().children().find('.select2-selection').hasClass('select2-sel-v1-modal-container'))
            {
                $('.select2-search__field').addClass('select2-search__field-v1');
                $('.select2-container--open').addClass('select2-container--open-v1-modal');
            }

        })

    /* General Select Styles */
    setSelV1ModalFunc();
})
/* Select2 select initialization for modal ends */

/*-- Select2 Select Versions Start --*/
/* Select2 Version with arrow for small data starts */  
var setSelV1Func=function(){
    if($(".select2-sel-v1").length)
        $(".select2-sel-v1").select2({
                      width: '100%',
          containerCssClass: "select2-sel-v1-container",
                   language: {
                       noResults: function() {
                       return "Aucun résultat trouvé";
                     },
                     searching: function() {
                       return "Recherche...";
                     }
                   },
        });
}
if($(".select2-sel-v1").length)
    $(".select2-sel-v1").select2().on("select2:open", function() {
        if($(this).parent().children().find('.select2-selection').hasClass('select2-sel-v1-container'))
            $('.select2-search__field').addClass('select2-search__field-v1');

    })

$(function(){
    setSelV1Func();
})
/* Select2 Version with arrow for small data ends */

/* Select2 Version with arrow for modal starts */
var setSelV1ModalFunc = function() {
    if($(".select2-sel-v1-modal").length)
       $(".select2-sel-v1-modal").select2({
                       width: '100%',
           containerCssClass: "select2-sel-v1-modal-container",
                    language: {
                               noResults: function() {
                               return "Aucun résultat trouvé";
                             },
                             searching: function() {
                               return "Recherche...";
                             }
                           },
      });
}     
/* Select2 Version with arrow for modal ends */
 
/*-- Select2 Select Versions End --*/

/* Select2 Select For Search Block Starts */
var setSelForSearchBlck=function(){
    /* This version is considered for search block */
    if(window.innerWidth<992)
    {
        if($(".select2-sel-v1-1").length)
            $(".select2-sel-v1-1").select2({
                width: '75%',
                containerCssClass: "select2-sel-v1-container",
                language: {
                    noResults: function() {
                        return "Aucun résultat trouvé";
                    },
                    searching: function() {
                        return "Recherche...";
                    }
                },
            });

    }
    else
    {
        if($(".select2-sel-v1-1").length)
            $(".select2-sel-v1-1").select2({
                          width: '100%',
              containerCssClass: "select2-sel-v1-container",
                       language: {
                           noResults: function() {
                           return "Aucun résultat trouvé";
                         },
                         searching: function() {
                           return "Recherche...";
                         }
                       },
            });
    }
}

if($(".select2-sel-v1-1").length)
    $(".select2-sel-v1-1").select2().on("select2:open", function() {
        if($(this).parent().children().find('.select2-selection').hasClass('select2-sel-v1-container'))
            $('.select2-search__field').addClass('select2-search__field-v1');

    })

$(function(){
    setSelForSearchBlck();
})
$(window).resize(function(){
    setSelForSearchBlck();
})
$(window).load(function(){
    setSelForSearchBlck();
})
/* Select2 Select For Search Block Ends */

/* Select2 Select General Functions Start */
if($(".select2-sel").length) {
    $(".select2-sel").select2().on("select2:open", function() {
        if($('.custom-multiselect').length)
            $('.custom-multiselect1').multiselect('refresh');

    })
    $(".select2-sel").select2().on("select2:close", function() {
        if($('.custom-multiselect1').length)
            $('.custom-multiselect1').multiselect('refresh');

    })
}
/* Select2 Select General Functions End */

/* This is for fixing form error icon positioning problem when 
the drop down is opened above and the form tooltip  is under it */
if($("#location").length)
    $("#location").select2().on("select2:open", function() {
        if($('.select2-dropdown').hasClass('select2-dropdown--above'))
        {
            $('.form-error-blck-pos-fix').removeClass('form-error-blck-pos-fix');
        }
    })
/*__________Select2 Select Functions End__________*/

/*__________Legale Page Functions Start__________*/
var setLegalePageColHeights= function () {
    $('.legal-blck-col-itm').css('height','auto');
    if(window.innerWidth > 768)
        equalHeightByColRows('.legal-blck-col-left','.legal-blck-col-right','.legal-blck-col-itm');
}

$(function(){
    setLegalePageColHeights();
});
$(window).resize(function(){
    setLegalePageColHeights();
})
$(window).load(function(){
    setLegalePageColHeights();
})
/*__________Legale Page Functions End__________*/

/*_________Multi Col Wrapper Equal Heights Starts __________*/
if($(".multi-cl-wrapper-col").length)
    $(function(){
        $(".multi-cl-wrapper-col").matchHeight();
    })
/*_________Multi Col Wrapper Equal Heights Ends __________*/




/*_________ Toggle Plus Button Starts __________*/
$(document).ready(function(){
    $(".toggle_container").hide();
    $(".standard-btn-plus").click(function(){
        $(this).toggleClass("active").next().slideToggle("fast");

        if ($.trim($(this).text()) === 'Plus de critères') {
            $(this).html('Moins de critères <i class="fa fa-minus circled-icon circled-icon-border marg-left10"></i>');
            $(".toggle_container").fadeIn();
        } else {
            $(this).html('Plus de critères <i class="fa fa-plus circled-icon circled-icon-border marg-left10"></i>');
            $(".toggle_container").fadeOut();
        }

        return false;
    });
    $("a[href='" + window.location.hash + "']").parent(".reveal").click();
});
/*_________ Toggle Plus Button Starts __________*/


