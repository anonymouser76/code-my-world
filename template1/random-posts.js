var rdp_numposts=5;
var rdp_snippet_length=150;
var rdp_info='yes';
var rdp_comment='Comments';
var rdp_disable='Comments Disabled';
var rdp_current=[];var rdp_total_posts=0;var rdp_current=new Array(rdp_numposts);function totalposts(json){rdp_total_posts=json.feed.openSearch$totalResults.$t}document.write('<script type=\"text/javascript\" src=\"/feeds/posts/default?alt=json-in-script&max-results=0&callback=totalposts\"><\/script>');function getvalue(){for(var i=0;i<rdp_numposts;i++){var found=false;var rndValue=get_random();for(var j=0;j<rdp_current.length;j++){if(rdp_current[j]==rndValue){found=true;break}};if(found){i--}else{rdp_current[i]=rndValue}}};function get_random(){var ranNum=1+Math.round(Math.random()*(rdp_total_posts-1));return ranNum};

function random_posts(json){for(var i=0;i<rdp_numposts;i++){var entry=json.feed.entry[i];var rdp_posttitle=entry.title.$t;if('content'in entry){var rdp_get_snippet=entry.content.$t}else{if('summary'in entry){var rdp_get_snippet=entry.summary.$t}else{var rdp_get_snippet="";}};rdp_get_snippet=rdp_get_snippet.replace(/<[^>]*>/g,"");if(rdp_get_snippet.length<rdp_snippet_length){var rdp_snippet=rdp_get_snippet}else{rdp_get_snippet=rdp_get_snippet.substring(0,rdp_snippet_length);var space=rdp_get_snippet.lastIndexOf(" ");rdp_snippet=rdp_get_snippet.substring(0,space)+"&#133;";};for(var j=0;j<entry.link.length;j++){if('thr$total'in entry){var rdp_commentsNum=entry.thr$total.$t+' '+rdp_comment}else{rdp_commentsNum=rdp_disable};if(entry.link[j].rel=='alternate'){var rdp_posturl=entry.link[j].href;var rdp_postdate=entry.published.$t;if('media$thumbnail'in entry){var rdp_thumb=entry.media$thumbnail.url}else{rdp_thumb="http://2.bp.blogspot.com/-XQt2v4x5dl8/T1zdpFh392I/AAAAAAAABUU/xMJZDedw38k/s1600/default.jpg"}}};document.write('<li>');document.write('<img alt="'+rdp_posttitle+'" src="'+rdp_thumb+'"/>');document.write('<div><a href="'+rdp_posturl+'" rel="nofollow" title="'+rdp_snippet+'">'+rdp_posttitle+'</a></div>');if(rdp_info=='yes'){document.write('<span>'+rdp_postdate.substring(8,10)+'/'+rdp_postdate.substring(5,7)+'/'+rdp_postdate.substring(0,4)+' - '+rdp_commentsNum)+'</span>'}document.write('<div style="clear:both"></div></li>')}};getvalue();for(var i=0;i<rdp_numposts;i++){document.write('<script type=\"text/javascript\" src=\"/feeds/posts/default?alt=json-in-script&start-index='+rdp_current[i]+'&max-results=1&callback=random_posts\"><\/script>')};