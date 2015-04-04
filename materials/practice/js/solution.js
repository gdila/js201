$(document).ready(function(){
	var nav = $('<nav></nav>'),
		list = $('<ul class="sorting"></ul>'),
		classes = ['berries', 'coffee', 'grapes'],
		container = $('section.photos'),
		photos = $('.photo-grid').find('li');

	list.append('<li class="all">All</li>');

	$(classes).each(function(index, value){
		list.append('<li class="' + value + '">' + capitalizeFirstLetter(value) + '</li>');
	});

	nav.append(list);
	container.prepend(nav);

	$('.sorting').find('li').on('click', function(){
		var $this = $(this),
			food = $this.attr('class');

		if ( food == 'all' ) {
			photos.fadeIn();
		} else {
			photos.hide().filter('.' + food).fadeIn();
		}
	});


});

function capitalizeFirstLetter(string) {
	return string.charAt(0).toUpperCase() + string.slice(1);
}