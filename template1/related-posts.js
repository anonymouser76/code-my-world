function readpostlabels(e){var t,n,r,i;for(var s=0;s<e.feed.entry.length;s++){t=e.feed.entry[s];if(s==e.feed.entry.length){break}relatedTitles[relatedTitlesNum]=t.title.$t;r="";if("content"in t){r=t.content.$t}else if("summary"in t){r=t.summary.$t}relatedpSummary[relatedTitlesNum]=removetags(r,relatedmaxnum);if("media$thumbnail"in t){n=t.media$thumbnail.url}else{n=relatednoimage}relatedThumb[relatedTitlesNum]=n;for(var o=0;o<t.link.length;o++){if(t.link[o].rel=="alternate"){relatedUrls[relatedTitlesNum]=t.link[o].href;break}}relatedTitlesNum++}}function showrelated(){var e=new Array(0);var t=new Array(0);var n=new Array(0);var r=new Array(0);for(var i=0;i<relatedUrls.length;i++){if(!contains(e,relatedUrls[i])){e.length+=1;e[e.length-1]=relatedUrls[i];t.length+=1;t[t.length-1]=relatedTitles[i];n.length+=1;n[n.length-1]=relatedpSummary[i];r.length+=1;r[r.length-1]=relatedThumb[i]}}relatedTitles=t;relatedUrls=e;relatedpSummary=n;relatedThumb=r;for(var i=0;i<relatedTitles.length;i++){var s=Math.floor((relatedTitles.length-1)*Math.random());var o=relatedTitles[i];var u=relatedUrls[i];var a=relatedpSummary[i];var f=relatedThumb[i];relatedTitles[i]=relatedTitles[s];relatedUrls[i]=relatedUrls[s];relatedpSummary[i]=relatedpSummary[s];relatedThumb[i]=relatedThumb[s];relatedTitles[s]=o;relatedUrls[s]=u;relatedpSummary[s]=a;relatedThumb[s]=f}var l=0;var c=Math.floor((relatedTitles.length-1)*Math.random());var h=c;var p;var d=document.URL;while(l<relatedPostsNum){if(relatedUrls[c]!=d){p="<div class='related-posts'>";p+="<a href='"+relatedUrls[c]+"' rel='nofollow'  target='_self' title='"+relatedTitles[c]+"'><img src='"+relatedThumb[c]+"' /></a>";p+="<h6><a href='"+relatedUrls[c]+"' target='_self'>"+relatedTitles[c]+"</a></h6>";p+="<p>"+relatedpSummary[c]+" ... </p>";p+="</div>";document.write(p);l++;if(l==relatedPostsNum){break}}if(c<relatedTitles.length-1){c++}else{c=0}if(c==h){break}}}function removetags(e,t){var n=e.split("<");for(var r=0;r<n.length;r++){if(n[r].indexOf(">")!=-1){n[r]=n[r].substring(n[r].indexOf(">")+1,n[r].length)}}n=n.join("");n=n.substring(0,t-1);return n}function contains(e,t){for(var n=0;n<e.length;n++)if(e[n]==t)return true;return false}var relatedTitles=new Array;var relatedUrls=new Array;var relatedpSummary=new Array;var relatedThumb=new Array;var relatedTitlesNum=0;var relatedPostsNum=5;var relatedmaxnum=75;var relatednoimage="http://3.bp.blogspot.com/-PpjfsStySz0/UF91FE7rxfI/AAAAAAAACl8/092MmUHSFQ0/s1600/no_image.jpg"