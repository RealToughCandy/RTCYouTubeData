
    
var channelName = 'realtoughcandy'

$(document).ready(function() {
	$.get(
		'https://www.googleapis.com/youtube/v3/channels', {
			part: 'contentDetails',
			forUsername: channelName,
			key: 'RealToughCandy Key (masked for security)' },
			function(data){
				$.each(data.items, function(i, item){
					console.log(item);
					pid = item.contentDetails.relatedPlaylists.uploads;
					getVids(pid);
				});
			}
		);

	function getVids(pid) {

		$.get(
		'https://www.googleapis.com/youtube/v3/playlistItems', {
			part: 'snippet',
			maxResults: 10,
			playlistId: pid,
			key: 'RealToughCandy Key (masked for security)' },

			function(data){
				$.each(data.items, function(i, item){
					console.log(item);
					vidTitle = item.snippet.title;

					output = '<li>'+vidTitle+'</li>';

					//Append to results listStyleType

					$('#results').append(output);
				});
			}
		);


	}

});
