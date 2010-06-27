jQuery(document).ready(function () {

	jQuery(".week-list").sortable({
		placeholder: 'ui-state-highlight',
		connectWith: '.connectedSortable',
		cursor: 'move',
		handle: '.item-handle',
        stop: function(e, ui) {

            var post = ui.item[0].id;
            var date = ui.item[0].parentNode.id;

						// Javascript is ghetto and doesn't give month names; this is how we generate it
						var month_names = new Array("January", "February", "March", 
						"April", "May", "June", "July", "August", "September", 
						"October", "November", "December");
                
            // update the post record
            jQuery.post(window.location.href,
                { 
									post_id: post,
									date: date
								},
                function(data) {
									// Remove the prior message (if it exists) and append a new one
									jQuery('div#message').remove();
									date = new Date(date);
									var message = 'Item date changed to '+ month_names[date.getMonth()] + ' ' + date.getDate() + ', ' + date.getFullYear() + '.';
									jQuery('h2').after('<div id="message" class="updated below-h2"><p>'+message+'</p></div>');
                }
            );
            
        }
	});
	jQuery(".week-list").disableSelection();
});

