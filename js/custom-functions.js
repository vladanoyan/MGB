/*
 * Haytech Front End Model Core v.4.8.0
 * Copyright 2016, Haytech Solutions
 * Custom Functions Main List Used in almost every Site
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


/*_________IE Nav Position Fix Starts _______________________*/
/* Can be changed later in case of finding better solution
 *  An alternative option is to use modernizer
 */
$(function()
{
	if(getInternetExplorerVersion()>0)
		$('.navbar-nav').css('margin-bottom','-0.55em');

});
/*_________IE Nav Position Fix Ends _______________________*/


/*__________Binding TouchStart Event Starts ________*/
/* For mobile IOS focus/active effects */
$('body').bind('touchstart', function() {
	/*console.log('touch');*/
});
/*__________Binding TouchStart Event Ends __________*/


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


/*__________Listing Details Slider Starts ________*/

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
				//setListItmDtlDescHeight();
			}
		});

});


/* Function for Adding Listing Details Gallery Thumbnails Starts */
function addFakeThumbs() {
	$('#thumbnails').css('width', 'auto');
	var curThumbCnt=$('.real-thumb').length;
	var thumbContWidth=$('#thumbnails').outerWidth()-36;
	var fitThumbCnt=thumbContWidth/96;
	var addThumbCnt= Math.floor(fitThumbCnt-curThumbCnt);
	for(i=0; i<addThumbCnt; i++)
	{
		if(i==0)
			$('.real-thumb').last().
			after('<li style="margin-right: 2px; float: left; display: block;" class="fake-thumb"><div class="row-col lst-itm-dtl-thumb" ></div></li>');
		else
			$('.fake-thumb').last().
			after('<li style="margin-right: 2px; float: left; display: block;" class="fake-thumb"><div class="row-col lst-itm-dtl-thumb" ></div></li>');
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

/*__________Listing Details Slider Ends ________*/


/*__________Listing Details Gallery Starts ________*/
/* Lightbox Gallery */
$(function(){
	if($('.listing-dtl-gallery').length)
	{
		var gallery = $('.listing-dtl-gallery .gal-class').simpleLightbox({
			navText:['',''],
		})
		var gallery1 = $('.listing-dtl-gallery .gal-class1').simpleLightbox({
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

		$('.listing-dtl-gallery .gal-class').on('shown.simplelightbox', function () {
			galCustomStyleForNav();
		});
		$('.listing-dtl-gallery .gal-class1').on('shown.simplelightbox', function () {
			galCustomStyleForNav();
		});
		$(window).bind('resize', function(){
			galCustomStyleForNav();
		});

	}
});
/*__________Listing Details Gallery Ends ________*/


/*__________DPE GES Hover Effect Starts ________*/
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
/*__________DPE GES Hover Effect Ends ________*/


/*__________Listing Functions Start_________*/

/* Match Item heights for Listing Item */
var matchHeightLstItm=function(){
	if(window.innerWidth>=992)
	{
		if($('.listing-item-content').length)
			$('.listing-item-content').css('height', 'auto');

		if($('.listing-item-img').length)
			$('.listing-item-img').outerHeight($('.listing-item-content').outerHeight());
	}
	else
		$('.listing-item-img').css('height','auto');
};

/*--- DPE, GES Hover Effect Starts ---*/
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
/*--- DPE, GES Hover Effect Ends ---*/

/*__________Centering Image Starts_______________*/
$(function() {
	centerImage('.centered-img-container');
});

$(window).bind('resize',function(){
	centerImage('.centered-img-container');
});

$(window).bind('load', function() {
	centerImage('.centered-img-container');
});
/*__________Centering Image Ends_______________*/


/* This functions should be called after initializing ajax */
//$(document).ajaxComplete(function() {
/* Fix Focus of Empty Links */
//fixFocusOfEmptyLinks();

/* Match Item heights for Listing Item */
// matchHeightLstItm();

/* Center Listing Item Image */
//centerImage('.listing-item-img-container > a');
//});

/*--- Listing Item: Ready, Resize and Load Functions Start ---*/
$(function(){
	/* Match Item heights for Listing Item */
	matchHeightLstItm();

	/* Center Listing Item Image */
	centerImage('.listing-item-img-container');
});

$(window).resize(function(){
	/* Match Item heights for Listing Item */
	matchHeightLstItm();

	/* Center Listing Item Image */
	centerImage('.listing-item-img-container');
});

$(window).bind('load',function(){
	/* Match Item heights for Listing Item */
	matchHeightLstItm();

	/* Center Listing Item Image */
	centerImage('.listing-item-img-container');
});
/*--- Listing Item: Ready, Resize and Load Functions End ---*/

/*__________Listing Functions End_________*/



/*__________Match Heights for Form Block Cols Starts________*/

/*--- Form: Function for Headers Matching Starts ---*/
var matchHeightForFormBlckCols=function() {
	$('.title-block').css('height','auto');

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
/*--- Form: Function for Headers Matching Ends ---*/

/*--- Form: Ready, Resize and Load Functions Start ---*/
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
/*--- Form: Ready, Resize and Load Functions End ---*/

/*__________Match Heights for Form Block Cols Ends__________*/


/*__________Match Heights for Header Cols Starts________*/
$(window).load(function(){
	$('.header-col').matchHeight();
});
$(function (){
	$('.header-col').matchHeight();
})
/*__________Match Heights for Header Cols Ends________*/


/*__________Functions for Multiselect Starts__________*/

/*--- Function for Filter Block Multiselect Starts ---*/
var setSelMultiselectForSearchBlck= function(){
	if(window.innerWidth<992)
	{
		/* Multiselect with normal(100%) data content (multiselect-container)
		 *  Default Arrow Model */
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
		/* Multiselect with normal(100%) data content (multiselect-container)
		 *  Arrow Model2 */
		if($('.custom-multiselect1.arrow-m2').length)
		{
			$('.custom-multiselect1').multiselect('destroy');
			$('.custom-multiselect1').multiselect({
				buttonWidth: '75%',
				buttonClass: 'custom-multiselect-btn arrow-m2',
				includeSelectAllOption: true,
				selectAllText:'Tout sélectionner',
				allSelectedText:'Tout sélectionné',
				numberDisplayed: 2,
				nSelectedText: 'Sélectionné',
			});
		}

		/* Multiselect with Large(150%) Data Content (multiselect-container)
		 *  Default Arrow Model */
		if($('.custom-multiselect2').length)
		{
			$('.custom-multiselect2').multiselect('destroy');
			$('.custom-multiselect2').multiselect({
				buttonWidth: '75%',
				buttonClass: 'custom-multiselect-btn custom-multiselect-btn2',
				includeSelectAllOption: true,
				selectAllText:'Tout sélectionner',
				allSelectedText:'Tout sélectionné',
				numberDisplayed: 2,
				nSelectedText: 'Sélectionné',
			});
		}
		/* Multiselect with Large(150%) Data Content (multiselect-container)
		 *  Arrow Model2 */
		if($('.custom-multiselect2.arrow-m2').length)
		{
			$('.custom-multiselect2').multiselect('destroy');
			$('.custom-multiselect2').multiselect({
				buttonWidth: '75%',
				buttonClass: 'custom-multiselect-btn custom-multiselect-btn2 arrow-m2',
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
		/* Multiselect with normal(100%) data content (multiselect-container)
		 *  Default Arrow Model */
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
		/* Multiselect with normal(100%) data content (multiselect-container)
		 *  Arrow Model2 */
		if($('.custom-multiselect1.arrow-m2').length)
		{
			$('.custom-multiselect1').multiselect('destroy');
			$('.custom-multiselect1').multiselect({
				buttonWidth: '100%',
				buttonClass: 'custom-multiselect-btn arrow-m2',
				includeSelectAllOption: true,
				selectAllText:'Tout sélectionner',
				allSelectedText:'Tout sélectionné',
				numberDisplayed: 2,
				nSelectedText: 'Sélectionné',
			});
		}

		/* Multiselect with Large(150%) Data Content (multiselect-container)
		 *  Default Arrow Model */
		if($('.custom-multiselect2').length)
		{
			$('.custom-multiselect2').multiselect('destroy');
			$('.custom-multiselect2').multiselect({
				buttonWidth: '100%',
				buttonClass: 'custom-multiselect-btn custom-multiselect-btn2',
				includeSelectAllOption: true,
				selectAllText:'Tout sélectionner',
				allSelectedText:'Tout sélectionné',
				numberDisplayed: 2,
				nSelectedText: 'Sélectionné',
			});
		}
		/* Multiselect with Large(150%) Data Content (multiselect-container)
		 *  Arrow Model2 */
		if($('.custom-multiselect2.arrow-m2').length)
		{
			$('.custom-multiselect2').multiselect('destroy');
			$('.custom-multiselect2').multiselect({
				buttonWidth: '100%',
				buttonClass: 'custom-multiselect-btn custom-multiselect-btn2 arrow-m2',
				includeSelectAllOption: true,
				selectAllText:'Tout sélectionner',
				allSelectedText:'Tout sélectionné',
				numberDisplayed: 2,
				nSelectedText: 'Sélectionné',
			});
		}

	}

}
/*--- Function for Filter Block Multiselect Ends ---*/


/*--- Function for Full Width Multiselect Starts ---*/
var generalMultiSel= function() {
	/* Default Arrow Model */
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
	/* Arrow Model2 */
	if($('.custom-multiselect.arrow-m2').length)
	{
		$('.custom-multiselect').multiselect({
			buttonWidth: '100%',
			buttonClass: 'custom-multiselect-btn arrow-m2',
			includeSelectAllOption: true,
			selectAllText:'Tout sélectionner',
			allSelectedText:'Tout sélectionné',
			numberDisplayed: 2,
			nSelectedText: 'Sélectionné',
		});
	}
}
/*--- Function for Full Width Multiselect Ends ---*/

/*--- Multiselect: Ready, Resize and Load Functions Start ---*/
$(function(){
	/* General Multiselect Styles */
	generalMultiSel();

	/* Multiselect Styles for Filter Block */
	setSelMultiselectForSearchBlck();
});

$(window).resize(function(){
	/* General Multiselect Styles */
	generalMultiSel();

	/* Multiselect Styles for Filter Block */
	setSelMultiselectForSearchBlck();
});

$(window).load(function() {
	/* General Multiselect Styles */
	generalMultiSel();

	/* Multiselect Styles for Filter Block */
	setSelMultiselectForSearchBlck();
});
/*--- Multiselect: Ready, Resize and Load Functions End ---*/

/*__________Functions for Multiselect Ends__________*/


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
	var allowableWidth=$(cur).parent().find(".file-custom").outerWidth()-$(cur).parent().find( ".file-custom-txt" ).outerWidth();
	$(cur).parent().find( ".file-name-inner" ).text(middleElipsis(filename,allowableWidth));

	$(cur).parent().find( ".file-name").outerWidth($(cur).parent().outerWidth()-$(cur).parent().find( ".file-custom-txt").outerWidth());
	if($('.file-custom-left').length)
		$(cur).parent().find( ".file-custom-left" ).css('padding-left',$(cur).parent().find( ".file-custom-txt").outerWidth());
	if($('.file-custom-right').length)
		$(cur).parent().find( ".file-custom-right" ).css('padding-right',$(cur).parent().find( ".file-custom-txt").outerWidth());
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


/*__________Select2 Select Functions Start __________*/

/*--- Select2 select initialization for modal starts ---*/
$('.modal').on('shown.bs.modal', function (e) {
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
/*--- Select2 select initialization for modal ends ---*/

/*--- Select2 Select Versions Start ---*/

/*- Select2 Version with Arrow for Small Data Starts -*/
var setSelV1Func=function(){
	/* Default Arrow Model */
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
	/* Arrow Model2 */
	if($(".select2-sel-v1.arrow-m2").length)
		$(".select2-sel-v1").select2({
			width: '100%',
			containerCssClass: "select2-sel-v1-container arrow-m2",
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
/*- Select2 Version with Arrow for Small Data Starts -*/

/*- Select2 Version with Arrow for Modal starts -*/
var setSelV1ModalFunc = function() {
	/* Default Arrow Model */
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
	/* Arrow Model2 */
	if($(".select2-sel-v1-modal.arrow-m2").length)
		$(".select2-sel-v1-modal").select2({
			width: '100%',
			containerCssClass: "select2-sel-v1-modal-container arrow-m2",
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
/*- Select2 Version with Arrow for Modal Ends -*/

/*--- Select2 Select Versions End ---*/

/*--- Select2 Select For Filter Block Starts ---*/
var setSelForSearchBlck=function(){
	if(window.innerWidth<992)
	{
		/* Arrow Model2 */
		if($(".select2-sel-v1-1.arrow-m2").length)
			$(".select2-sel-v1-1").select2({
				width: '75%',
				containerCssClass: "select2-sel-v1-container arrow-m2",
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
		/* Arrow Model2 */
		if($(".select2-sel-v1-1.arrow-m2").length)
			$(".select2-sel-v1-1").select2({
				width: '100%',
				containerCssClass: "select2-sel-v1-container arrow-m2",
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
/*--- Select2 Select For Filter Block Ends ---*/

/*--- Select2 Select General Functions Start ---*/
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
/*--- Select2 Select General Functions End ---*/

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


/*_________Multi Col Wrapper Equal Heights Starts __________*/
/* Use .multi-cl-wrapper-col if you have multiple sections in one row and
 you need to equal their heights.
 The part of owl reinit is needed only if one of the sections is carousel,
 otherwise you can remove it.
 */
var equalHeightsMultiCol=function() {
	$(".multi-cl-wrapper-col").css('height','auto');

	/* Multi Item Image Owl carousel Reinit */
	var owl=$(".multi-item-image-slider");
	owl.data('owlCarousel').reinit({
	});
	$( ".owl-next" ).empty();
	$( ".owl-prev" ).empty();

	$(".multi-cl-wrapper-col").matchHeight();
}
$(function(){
	if($(".multi-cl-wrapper-col").length)
		equalHeightsMultiCol();
})
$(window).resize(function(){
	if($(".multi-cl-wrapper-col").length)
		equalHeightsMultiCol();
})
$(window).load(function(){
	if($(".multi-cl-wrapper-col").length)
		equalHeightsMultiCol();
})
/*_________Multi Col Wrapper Equal Heights Ends __________*/

/*_________Dropdown link active state processing starts __________*/
$(".nav-dropdown .dropdown").not('.active').on("hide.bs.dropdown", function(event){
	$(this).addClass('dropdown-close');
});
$(".nav-dropdown .dropdown").not('.active').on("show.bs.dropdown", function(event){
	$(this).removeClass('dropdown-close');
});
$(".nav-dropdown > li.dropdown ").not('.active').on("mouseenter", function() {
	//alert('yes');
	$(this).removeClass('dropdown-close');
});
$(".nav-dropdown > li.dropdown ").not('.active').on("mouseleave", function() {
	if(!($(this).hasClass('open')))
		$(this).addClass('dropdown-close');
});
/*_________Dropdown link active state processing ends __________*/



/*_________Header Menu  Model2 Version5 Starts __________*/
if($('.header-menu-m2-v5').length)
	$(window).scroll(function(){
		if($(window).innerWidth() > 992)
		{
			var scrollTopHeight=120;
			if($(window).innerWidth() > 1200)
				var scrollTopHeight=195;

			if($(window).scrollTop() > scrollTopHeight)
			{
				$('.header-menu-m2-v5').css('margin-top',0);
				$('.header-menu-m2-v5').css('width','100%');
			}
			else
			{
				$('.header-menu-m2-v5').removeAttr('style');
			}
		}
	})
/*_________ Header Menu  Model2 Version5 Ends __________*/


/*_________Home Slider Model2 Version1 Starts__________*/
if($(".home-slider-m2-v1 .one-item-image-slider").length)
	$(document).ready(function() {
		var owl=$(".one-item-image-slider");

		if (getInternetExplorerVersion() <= 9) {
			owl.owlCarousel({
				singleItem:true,
				navigation: true,
				loop:true,
				autoPlay:true,
				autoPlayTimeout:5000,
				autoplaySpeed:5000,
				afterMove: function (elem) {
					centerImage('.one-item-image-slider-container');
				},
				beforeMove: function (elem) {
					centerImage('.one-item-image-slider-container');
				},
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
				afterMove: function (elem) {
					centerImage('.one-item-image-slider-container');
				},
				beforeMove: function (elem) {
					centerImage('.one-item-image-slider-container');
				},
			});

		}

		$( ".owl-next" ).empty();
		$( ".owl-prev" ).empty();
	});
/*_________Home Slider Model2 Version1 Ends__________*/



/*_________Home Ads Slider Model4 Version4 Starts__________*/
if($(".home-ads-slider-m4-v4 .multi-item-image-slider").length)
	$(document).ready(function() {
		var owl=$(".multi-item-image-slider");

		owl.owlCarousel({
			autoPlay: false,
			pagination: false,
			scrollPerPage : true,
			itemsCustom : [
				[0, 1],
				[480, 2],
				[650, 2],
				[768, 2],
				[992, 3],
				[1350, 4]
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


if($(".home-ads-slider-m4-v4 .multi-item-slider-caption header").length)
	$(function(){
		$(".home-ads-slider-m4-v4 .multi-item-slider-caption header").css('height','auto');
		$(".home-ads-slider-m4-v4 .multi-item-slider-caption header").matchHeight();
	})

if($(".home-ads-slider-m4-v4 .multi-item-slider-caption figcaption").length)
	$(function(){
		$(".home-ads-slider-m4-v4 .multi-item-slider-caption figcaption").css('height','auto');
		$(".home-ads-slider-m4-v4 .multi-item-slider-caption figcaption").matchHeight();
	})
/*_________Home Ads Slider Model4 Version4 Ends__________*/

/*__________Listing Details Functions Start_________*/

/* Gets the height that image will take based on it's container
 * colCl- selector of image container */
var getImgActualHeight =function(colCl)
{
	var theImage = new Image();
	theImage.src = $(colCl).find('img').attr("src");
	var imageWidth = theImage.width;
	var imageHeight = theImage.height;
	var imgColWidth=$(colCl).width();
	var actHeight=0;
	var actDif=imgColWidth/imageWidth;
	imgActHeight=imageHeight *actDif;
	return imgActHeight;
}

/* General Function for setting Listing Details Cols Heights
 *  - Equals Listing Details left and right cols
 *  - Sets description height */
var setListItmColsHeight= function(leftOuterWidth, rightOuterWidth) {
	if($('.lst-itm-dtl-content').length)
	{
		$('.lst-itm-dtl-content').css('height','auto');
		$('.lst-itm-dtl-img').css('height','auto');
		$('.lst-itm-dtl-header').css('height','auto');
		if(window.innerWidth>=1200)
		{
			var imgActualHeight = getImgActualHeight('.lst-itm-dtl-img');

			// Set height for right col based on left col
			var sliderClass=$('#slider').attr('class').toString();
			if(sliderClass.indexOf("slider-no-img")>=0)
				contentColHeight=imgActHeight+"px";
			else
				contentColHeight=imgActHeight+leftOuterWidth+"px";
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

/* Sets Cols Heights for Listing Details Model2 */
var setListItmColsHeightM1 =function()
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

/*--- Listing Details: Ready, Resize and Load Functions Start ---*/
$(function(){
	/* Equal GES-DPE Block Headers */
	if($('.header-equal').length)
		$('.header-equal').matchHeight();

	if($('.listing-details-m1').length)
		setListItmColsHeightM1();
});

$(window).resize(function(){
	/* Equal GES-DPE Block Headers */
	if($('.header-equal').length)
		$('.header-equal').matchHeight();

	if($('.listing-details-m1').length)
		setListItmColsHeightM1();
});

$(window).load(function(){
	/* Equal GES-DPE Block Headers */
	if($('.header-equal').length)
		$('.header-equal').matchHeight();

	if($('.listing-details-m1').length)
		setListItmColsHeightM1();
});
/*--- Listing Details: Ready, Resize and Load Functions End ---*/

/*__________Listing Details Functions End_________*/


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

/*__________Listing Model1 Functions Start_________*/
/* Match Item heights for Listing Item */
var matchHeightLstItm=function(){
	if(window.innerWidth>=992)
	{
		if($('.listing-item-content').length)
			$('.listing-item-content').css('height', 'auto');

		if($('.listing-item-img').length)
			$('.listing-item-img').outerHeight($('.listing-item-content').outerHeight());
	}
	else
		$('.listing-item-img').css('height','auto');
};

/* This functions should be called after initializing ajax */
//$(document).ajaxComplete(function() {
/* Fix Focus of Empty Links */
//fixFocusOfEmptyLinks();

/* Match Item heights for Listing Item */
// matchHeightLstItm();

/* Center Listing Item Image */
//centerImage('.listing-item-img-container > a');
//});

/*--- Listing Item: Ready, Resize and Load Functions Start ---*/
$(function(){
	/* Match Item heights for Listing Item */
	matchHeightLstItm();

	/* Center Listing Item Image */
	centerImage('.listing-item-img-container');
});

$(window).resize(function(){
	/* Match Item heights for Listing Item */
	matchHeightLstItm();

	/* Center Listing Item Image */
	centerImage('.listing-item-img-container');
});

$(window).bind('load',function(){
	/* Match Item heights for Listing Item */
	matchHeightLstItm();

	/* Center Listing Item Image */
	centerImage('.listing-item-img-container');
});
/*--- Listing Item: Ready, Resize and Load Functions End ---*/
/*__________Listing Model1 Functions End_________*/


/*_________ Form Wizard Model1 Starts __________*/
/* Form Validate Function */
var validateForm = function(tabId, sectionId) {
	switch(sectionId)
	{
		case 'property-inf-request':
			switch(tabId)
			{
				case 'tab1':
					return false;
					break;
				case 'tab2':
					return false;
					break;
				case 'tab3':
					return true;
					break;
			}
	}
	return true;
}

/* Navigate to Tab Function */
var navigateToTab = function(tabEl) {
	setTimeout(function(){
		$('.file-input').each(function(index, element) {
			setFileInputTextElipsis(this);
		});
	}, 2000);

	/*$('#form-wizard').find('li').removeClass('visited-step');*/

	/* Validation for Current Tab */
	var curTabHref=tabEl.find('>a').attr('href');
	var curTabId=curTabHref.substring(1, curTabHref.length);
	var curSectionId = tabEl.closest('section').attr('id');
	if(validateForm(curTabId, curSectionId))
	{
		/* Validation for Prevous Tabs */
		tabEl.prevAll().each(function(){
			var prevTab=$(this);
			var prevTabHref=prevTab.find('>a').attr('href');
			var tabId=prevTabHref.substring(1, prevTabHref.length);
			prevTab.addClass('visited-step');
			if(validateForm(tabId, curSectionId))
				prevTab.find('>a').html('<i class="fa fa-check"></i>');
		})
		tabEl.find('>a').html('<i class="fa fa-check"></i>');
		tabEl.addClass('visited-step');
	}
	else
		return false;
}

$(function() {
	if($('#form-wizard').length)
		$('#form-wizard').bootstrapWizard(
			{
				onNext: function(tab, navigation, index) {
					return navigateToTab(tab);
				},
				onPrevious: function(A, b, c){
					return true;
				},
				onTabChange: function(tab, navigation, index) {
					return navigateToTab(tab);
				}
			}
		);
});
/*_________ Form Wizard Model1 Ends __________*/



/*__________Modal Model2 Initialization Starts__________*/
var centerModalImg = function(el) {
	var parentSelector=$(el).attr('id');
	centerImage('#'+parentSelector + ' .modal-img-container');
}
$('.popup-contact-m2').each(function(){
	$(this).on('shown.bs.modal', function (e) {
		centerModalImg(this);
	});
	$(window).bind('resize',function(){
		centerModalImg(this);
	});
})
/*__________Modal Model2 Initialization Ends__________*/