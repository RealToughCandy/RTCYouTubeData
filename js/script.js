
    var channelName = 'realtoughcandy'

    $(document).ready(function(){
        $.get(
            "https://www.googleapis.com/youtube/v3/channels",{
                part: 'contentDetails',
                forUsername: channelName,
                key: 'AIzaSyBTTGFTJ11S-duSJzSafRPKt5pQ-2hulPY' },
                function(data) {
                    $.each(data.items, function(i, item) {
                        console.log(item);
                        pid = item.contentDetails.relatedPlaylists.uploads;
                        getVids(pid);
                    });
                }
        );
        function getVids(pid) {
            $.get(
                "https://www.googleapis.com/youtube/v3/playlistItems",{
                    part: 'snippet',
                    maxResults: 4,
                    playlistId: pid,
                    key: 'AIzaSyBTTGFTJ11S-duSJzSafRPKt5pQ-2hulPY' },
                function(data) {
                    var output;
                    $.each(data.items, function(i, item) {
                        console.log(item);
                        videTitle = item.snippet.title;
                        videoId = item.snippet.resourceId.videoId;
                        
                        output = '<li><iframe src=\"//www.youtube.com/embed/'+videoId+'\"></iframe>'+videTitle+'</li>';
                        
                        $('#results').append(output);
                    });
                
                }
            );
        }
        
    });
