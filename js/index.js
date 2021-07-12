$(window).scroll(function ()
{
	if ($(window).scrollTop() > $('#title').height())
	{
		$("nav").removeClass("sticky-top");
		$("nav").addClass("fixed-top");
		$("nav").css("padding", "0 10.74%");
	}
	else
	{
		$("nav").removeClass("fixed-top");
		$("nav").addClass("sticky-top");
		$("nav").css("padding", "0");
	}
});