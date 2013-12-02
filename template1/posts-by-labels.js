   imgr = new Array();

imgr[0] = &quot;http://4.bp.blogspot.com/-RTySAAJZPog/UpeD-gbK7sI/AAAAAAAAE38/qjxIE1RTAmw/s1600/no_image.png&quot;;
showRandomImg = true;
aBold = true;

summaryPost1 = 206; 
summaryPost = 60; 
summaryTitle = 25; 

summaryPost2 = 380; 
summaryPost3 = 380; 
summaryTitle = 25; 

numposts = 4; 
numposts1 = 5; 
numposts2 = 2; 
numposts3 = 1; 
numpostsx = 3; 

label1 = &quot;lorem ipsum&quot;;
Title1 = &quot;Featured&quot;;

label0 = &quot;lorem ipsum&quot;;
Title0 = &quot;View all&quot;;

label2 = &quot;test 2&quot;;
Title2 = &quot;Title&quot;;

label3 = &quot;test 1&quot;;
Title3 = &quot;Title 1&quot;;

label4 = &quot;test 2&quot;;
Title4 = &quot;Title 2&quot;;

label5 = &quot;test 3&quot;;
Title5 = &quot;Title 3&quot;;

Title6 = &quot;Latest Posts&quot;;


function removeHtmlTag(strx,chop){
	var s = strx.split(&quot;&lt;&quot;);
	for(var i=0;i&lt;s.length;i++){
		if(s[i].indexOf(&quot;&gt;&quot;)!=-1){
			s[i] = s[i].substring(s[i].indexOf(&quot;&gt;&quot;)+1,s[i].length);
		}
	}
	s =  s.join(&quot;&quot;);
	s = s.substring(0,chop-1);
	return s;
}

function showrecentposts5(json) {
j = (showRandomImg) ? Math.floor((imgr.length+1)*Math.random()) : 0;
	img  = new Array();

  	for (var i = 0; i &lt; numpostsx; i++) {
    	var entry = json.feed.entry[i];
    	var posttitle = entry.title.$t;
		var pcm;
    	var posturl;
    	if (i == json.feed.entry.length) break;
    	for (var k = 0; k &lt; entry.link.length; k++) {
      		if (entry.link[k].rel == &#39;alternate&#39;) {
        		posturl = entry.link[k].href;
        		break;
      		}
    	}
		
		for (var k = 0; k &lt; entry.link.length; k++) {
      		if (entry.link[k].rel == &#39;replies&#39; &amp;&amp; entry.link[k].type == &#39;text/html&#39;) {
        		pcm = entry.link[k].title.split(&quot; &quot;)[0];
        		break;
      		}
    	}
		
    	if (&quot;content&quot; in entry) {
      		var postcontent = entry.content.$t;}
    	else
    	if (&quot;summary&quot; in entry) {
      		var postcontent = entry.summary.$t;}
    	else var postcontent = &quot;&quot;;
    	
    	postdate = entry.published.$t;
	
	if(j&gt;imgr.length-1) j=0;
	img[i] = imgr[j];
	
	s = postcontent	; a = s.indexOf(&quot;&lt;img&quot;); b = s.indexOf(&quot;src=\&quot;&quot;,a); c = s.indexOf(&quot;\&quot;&quot;,b+5); d = s.substr(b+5,c-b-5);

	if((a!=-1)&amp;&amp;(b!=-1)&amp;&amp;(c!=-1)&amp;&amp;(d!=&quot;&quot;)) img[i] = d;

	//cmtext = (text != &#39;no&#39;) ? &#39;&lt;i&gt;&lt;font color=&quot;&#39;+acolor+&#39;&quot;&gt;(&#39;+pcm+&#39; &#39;+text+&#39;)&lt;/font&gt;&lt;/i&gt;&#39; : &#39;&#39;;


	var month = [1,2,3,4,5,6,7,8,9,10,11,12];
	var month2 = [&quot;Jan&quot;,&quot;Feb&quot;,&quot;Mar&quot;,&quot;Apr&quot;,&quot;May&quot;,&quot;Jun&quot;,&quot;Jul&quot;,&quot;Aug&quot;,&quot;Sep&quot;,&quot;Oct&quot;,&quot;Nov&quot;,&quot;Dec&quot;];

	var day = postdate.split(&quot;-&quot;)[2].substring(0,2);
	var m = postdate.split(&quot;-&quot;)[1];
	var y = postdate.split(&quot;-&quot;)[0];

	for(var u2=0;u2&lt;month.length;u2++){
		if(parseInt(m)==month[u2]) {
			m = month2[u2] ; break;
		}
	}

	var daystr = day+ &#39; &#39; + m + &#39; &#39; + y ;

if (i==0) {
	var trtd = &#39;&lt;div id=&quot;latestposts&quot;&gt;&lt;div class=&quot;largethumb2&quot;&gt;&lt;a href=&quot;&#39;+posturl+&#39;&quot;&gt;&lt;img src=&quot;&#39;+img[i]+&#39;&quot;/&gt;&lt;/a&gt;&lt;/div&gt;&lt;h2&gt;&lt;a href=&quot;&#39;+posturl+&#39;&quot;&gt;&#39;+posttitle+&#39;&lt;/a&gt;&lt;/h2&gt;&lt;p&gt;&#39;+removeHtmlTag(postcontent,summaryPost2)+&#39;...&lt;/p&gt;&lt;span &gt;&#39;+daystr+&#39; | &lt;a href=&quot;&#39;+posturl+&#39;&quot;&gt;&#39;+pcm+&#39; Comments&lt;/a&gt; &lt;a class=&quot;readmorebutton&quot; href=&quot;&#39;+posturl+&#39;&quot;&gt;Read More &lt;/a&gt;&lt;/span&gt;&lt;/div&gt;&lt;div id=&quot;latestposts&quot;&gt;&#39;;
	document.write(trtd);
}
					
 if ((i&gt;0)&amp;&amp;(i&lt;numpostsx))
    {
   var trtd = &#39;&lt;div id=&quot;latestposts&quot;&gt; &lt;div class=&quot;largethumb2&quot;&gt;&lt;a href=&quot;&#39;+posturl+&#39;&quot;&gt; &lt;img src=&quot;&#39;+img[i]+&#39;&quot;/&gt; &lt;/a&gt; &lt;/div&gt;&lt;h2&gt; &lt;a href=&quot;&#39;+posturl+&#39;&quot;&gt;&#39;+posttitle+&#39;&lt;/a&gt; &lt;/h2&gt; &lt;p&gt;&#39;+removeHtmlTag(postcontent,summaryPost3)+&#39;...&lt;/p&gt;&lt;span &gt;&#39;+daystr+&#39; | &lt;a href=&quot;&#39;+posturl+&#39;&quot;&gt;&#39;+pcm+&#39; Comments&lt;/a&gt; &lt;a class=&quot;readmorebutton&quot; href=&quot;&#39;+posturl+&#39;&quot;&gt;Read More &lt;/a&gt;&lt;/span&gt;&lt;/div&gt;&#39;;
	document.write(trtd);
}


	j++;
}
document.write(&#39;&lt;/div&gt;&#39;);

}

function showrecentposts1(json) {
j = (showRandomImg) ? Math.floor((imgr.length+1)*Math.random()) : 0;
	img  = new Array();

  	for (var i = 0; i &lt; numposts; i++) {
    	var entry = json.feed.entry[i];
    	var posttitle = entry.title.$t;
		var pcm;
    	var posturl;
    	if (i == json.feed.entry.length) break;
    	for (var k = 0; k &lt; entry.link.length; k++) {
      		if (entry.link[k].rel == &#39;alternate&#39;) {
        		posturl = entry.link[k].href;
        		break;
      		}
    	}
		
		for (var k = 0; k &lt; entry.link.length; k++) {
      		if (entry.link[k].rel == &#39;replies&#39; &amp;&amp; entry.link[k].type == &#39;text/html&#39;) {
        		pcm = entry.link[k].title.split(&quot; &quot;)[0];
        		break;
      		}
    	}
		
    	if (&quot;content&quot; in entry) {
      		var postcontent = entry.content.$t;}
    	else
    	if (&quot;summary&quot; in entry) {
      		var postcontent = entry.summary.$t;}
    	else var postcontent = &quot;&quot;;
    	
    	postdate = entry.published.$t;
	
	if(j&gt;imgr.length-1) j=0;
	img[i] = imgr[j];
	
	s = postcontent	; a = s.indexOf(&quot;&lt;img&quot;); b = s.indexOf(&quot;src=\&quot;&quot;,a); c = s.indexOf(&quot;\&quot;&quot;,b+5); d = s.substr(b+5,c-b-5);

	if((a!=-1)&amp;&amp;(b!=-1)&amp;&amp;(c!=-1)&amp;&amp;(d!=&quot;&quot;)) img[i] = d;

	//cmtext = (text != &#39;no&#39;) ? &#39;&lt;i&gt;&lt;font color=&quot;&#39;+acolor+&#39;&quot;&gt;(&#39;+pcm+&#39; &#39;+text+&#39;)&lt;/font&gt;&lt;/i&gt;&#39; : &#39;&#39;;


	var month = [1,2,3,4,5,6,7,8,9,10,11,12];
	var month2 = [&quot;Jan&quot;,&quot;Feb&quot;,&quot;Mar&quot;,&quot;Apr&quot;,&quot;May&quot;,&quot;Jun&quot;,&quot;Jul&quot;,&quot;Aug&quot;,&quot;Sep&quot;,&quot;Oct&quot;,&quot;Nov&quot;,&quot;Dec&quot;];

	var day = postdate.split(&quot;-&quot;)[2].substring(0,2);
	var m = postdate.split(&quot;-&quot;)[1];
	var y = postdate.split(&quot;-&quot;)[0];

	for(var u2=0;u2&lt;month.length;u2++){
		if(parseInt(m)==month[u2]) {
			m = month2[u2] ; break;
		}
	}

	var daystr = day+ &#39; &#39; + m + &#39; &#39; + y ;
 
 
if (i==0) {
	var trtd = &#39;&lt;div id=&quot;featuredleft&quot;&gt;&lt;div class=&quot;largethumb&quot;&gt;&lt;a href=&quot;&#39;+posturl+&#39;&quot;&gt;&lt;img src=&quot;&#39;+img[i]+&#39;&quot;/&gt;&lt;/a&gt;&lt;/div&gt;&lt;h2&gt;&lt;a href=&quot;&#39;+posturl+&#39;&quot;&gt;&#39;+posttitle+&#39;&lt;/a&gt;&lt;/h2&gt;&lt;p&gt;&#39;+removeHtmlTag(postcontent,summaryPost1)+&#39;...&lt;/p&gt;&lt;span class=&quot;featuredPostMeta&quot;&gt;&#39;+daystr+&#39; / &lt;a href=&quot;&#39;+posturl+&#39;&quot;&gt;&#39;+pcm+&#39; Comments&lt;/a&gt; / &lt;a href=&quot;&#39;+posturl+&#39;&quot;&gt;Read More &lt;/a&gt;&lt;/span&gt;&lt;/div&gt;&lt;div id=&quot;featuredright&quot;&gt;&#39;;
	document.write(trtd);
}

					
 if ((i&gt;0)&amp;&amp;(i&lt;numposts))
    {
	var trtd = &#39;&lt;div id=&quot;featuredpost&quot;&gt; &lt;div class=&quot;thumb&quot;&gt;&lt;a href=&quot;&#39;+posturl+&#39;&quot;&gt; &lt;img src=&quot;&#39;+img[i]+&#39;&quot;/&gt; &lt;/a&gt; &lt;/div&gt;&lt;h2&gt; &lt;a href=&quot;&#39;+posturl+&#39;&quot;&gt;&#39;+posttitle+&#39;&lt;/a&gt; &lt;/h2&gt; &lt;p&gt;&#39;+removeHtmlTag(postcontent,summaryPost)+&#39;...&lt;/p&gt;&lt;span class=&quot;featuredPostMeta&quot;&gt;&#39;+daystr+&#39; / &lt;a href=&quot;&#39;+posturl+&#39;&quot;&gt;&#39;+pcm+&#39; Comments&lt;/a&gt; / &lt;a href=&quot;&#39;+posturl+&#39;&quot;&gt;Read More &lt;/a&gt;&lt;/span&gt;&lt;/div&gt;&#39;;
	document.write(trtd);
}

	j++;
}
document.write(&#39;&lt;/div&gt;&#39;);

}


function showrecentposts2(json) {
	j = (showRandomImg) ? Math.floor((imgr.length+1)*Math.random()) : 0;
	img  = new Array();
     
  	for (var i = 0; i &lt; numposts1; i++) {
    	var entry = json.feed.entry[i];
    	var posttitle = entry.title.$t;
		var pcm;
    	var posturl;
    	if (i == json.feed.entry.length) break;
    	for (var k = 0; k &lt; entry.link.length; k++) {
      		if (entry.link[k].rel == &#39;alternate&#39;) {
        		posturl = entry.link[k].href;
        		break;
      		}
    	}
		
		for (var k = 0; k &lt; entry.link.length; k++) {
      		if (entry.link[k].rel == &#39;replies&#39; &amp;&amp; entry.link[k].type == &#39;text/html&#39;) {
        		pcm = entry.link[k].title.split(&quot; &quot;)[0];
        		break;
      		}
    	}
		
    	if (&quot;content&quot; in entry) {
      		var postcontent = entry.content.$t;}
    	else
    	if (&quot;summary&quot; in entry) {
      		var postcontent = entry.summary.$t;}
    	else var postcontent = &quot;&quot;;
    	
    	postdate = entry.published.$t;
	
	if(j&gt;imgr.length-1) j=0;
	img[i] = imgr[j];
	
	s = postcontent	; a = s.indexOf(&quot;&lt;img&quot;); b = s.indexOf(&quot;src=\&quot;&quot;,a); c = s.indexOf(&quot;\&quot;&quot;,b+5); d = s.substr(b+5,c-b-5);

	if((a!=-1)&amp;&amp;(b!=-1)&amp;&amp;(c!=-1)&amp;&amp;(d!=&quot;&quot;)) img[i] = d;

	//cmtext = (text != &#39;no&#39;) ? &#39;&lt;i&gt;&lt;font color=&quot;&#39;+acolor+&#39;&quot;&gt;(&#39;+pcm+&#39; &#39;+text+&#39;)&lt;/font&gt;&lt;/i&gt;&#39; : &#39;&#39;;


	var month = [1,2,3,4,5,6,7,8,9,10,11,12];
	var month2 = [&quot;Jan&quot;,&quot;Feb&quot;,&quot;Mar&quot;,&quot;Apr&quot;,&quot;May&quot;,&quot;Jun&quot;,&quot;Jul&quot;,&quot;Aug&quot;,&quot;Sep&quot;,&quot;Oct&quot;,&quot;Nov&quot;,&quot;Dec&quot;];

	var day = postdate.split(&quot;-&quot;)[2].substring(0,2);
	var m = postdate.split(&quot;-&quot;)[1];
	var y = postdate.split(&quot;-&quot;)[0];

	for(var u2=0;u2&lt;month.length;u2++){
		if(parseInt(m)==month[u2]) {
			m = month2[u2] ; break;
		}
	}

	var daystr = day+ &#39; &#39; + m + &#39; &#39; + y ;
	
	var trtd = &#39;&lt;div class=&quot;featuredPost&quot;&gt;&lt;a href=&quot;&#39;+posturl+&#39;&quot;&gt;&lt;img width=&quot;75&quot; height=&quot;50&quot; class=&quot;alignleft&quot; src=&quot;&#39;+img[i]+&#39;&quot;/&gt;&lt;/a&gt;&lt;h2 class=&quot;spostTitle&quot;&gt;&lt;a href=&quot;&#39;+posturl+&#39;&quot;&gt;&#39;+posttitle+&#39;&lt;/a&gt;&lt;/h2&gt;&lt;div class=&quot;clear&quot;&gt;&lt;/div&gt;&lt;/div&gt;&#39;;					 
		document.write(trtd);       
				
			  j++;
	}
	
}

function showrecentposts3(json) {
	j = (showRandomImg) ? Math.floor((imgr.length+1)*Math.random()) : 0;
	img  = new Array();

  	for (var i = 0; i &lt; numposts; i++) {
    	var entry = json.feed.entry[i];
    	var posttitle = entry.title.$t;
		var pcm;
    	var posturl;
    	if (i == json.feed.entry.length) break;
    	for (var k = 0; k &lt; entry.link.length; k++) {
      		if (entry.link[k].rel == &#39;alternate&#39;) {
        		posturl = entry.link[k].href;
        		break;
      		}
    	}
		
		for (var k = 0; k &lt; entry.link.length; k++) {
      		if (entry.link[k].rel == &#39;replies&#39; &amp;&amp; entry.link[k].type == &#39;text/html&#39;) {
        		pcm = entry.link[k].title.split(&quot; &quot;)[0];
        		break;
      		}
    	}
		
    	if (&quot;content&quot; in entry) {
      		var postcontent = entry.content.$t;}
    	else
    	if (&quot;summary&quot; in entry) {
      		var postcontent = entry.summary.$t;}
    	else var postcontent = &quot;&quot;;
    	
    	postdate = entry.published.$t;
	
	if(j&gt;imgr.length-1) j=0;
	img[i] = imgr[j];
	
	s = postcontent	; a = s.indexOf(&quot;&lt;img&quot;); b = s.indexOf(&quot;src=\&quot;&quot;,a); c = s.indexOf(&quot;\&quot;&quot;,b+5); d = s.substr(b+5,c-b-5);

	if((a!=-1)&amp;&amp;(b!=-1)&amp;&amp;(c!=-1)&amp;&amp;(d!=&quot;&quot;)) img[i] = d;

	//cmtext = (text != &#39;no&#39;) ? &#39;&lt;i&gt;&lt;font color=&quot;&#39;+acolor+&#39;&quot;&gt;(&#39;+pcm+&#39; &#39;+text+&#39;)&lt;/font&gt;&lt;/i&gt;&#39; : &#39;&#39;;


	var month = [1,2,3,4,5,6,7,8,9,10,11,12];
	var month2 = [&quot;Jan&quot;,&quot;Feb&quot;,&quot;Mar&quot;,&quot;Apr&quot;,&quot;May&quot;,&quot;Jun&quot;,&quot;Jul&quot;,&quot;Aug&quot;,&quot;Sep&quot;,&quot;Oct&quot;,&quot;Nov&quot;,&quot;Dec&quot;];

	var day = postdate.split(&quot;-&quot;)[2].substring(0,2);
	var m = postdate.split(&quot;-&quot;)[1];
	var y = postdate.split(&quot;-&quot;)[0];

	for(var u2=0;u2&lt;month.length;u2++){
		if(parseInt(m)==month[u2]) {
			m = month2[u2] ; break;
		}
	}

	var daystr = day+ &#39; &#39; + m + &#39; &#39; + y ;

 
	

var daystr = day+ &#39; &#39; + m + &#39; &#39; + y ;
var trtd = &#39;&lt;li class=&quot;item&quot;&gt;&lt;a href=&quot;&#39;+posturl+&#39;&quot;&gt;&lt;img width=&quot;125&quot; height=&quot;80&quot; src=&quot;&#39;+img[i]+&#39;&quot;/&gt;&lt;/a&gt;&lt;span&gt;&lt;h2&gt;&lt;a href=&quot;&#39;+posturl+&#39;&quot;&gt;&#39;+posttitle+&#39;&lt;/a&gt;&lt;/h2&gt;&lt;/span&gt;&lt;/a&gt;&lt;/li&gt;&#39;;
	document.write(trtd);


	j++;
}

}

function showrecentposts4(json) {
	j = (showRandomImg) ? Math.floor((imgr.length+1)*Math.random()) : 0;
	img  = new Array();

  	for (var i = 0; i &lt; numposts; i++) {
    	var entry = json.feed.entry[i];
    	var posttitle = entry.title.$t;
		var pcm;
    	var posturl;
    	if (i == json.feed.entry.length) break;
    	for (var k = 0; k &lt; entry.link.length; k++) {
      		if (entry.link[k].rel == &#39;alternate&#39;) {
        		posturl = entry.link[k].href;
        		break;
      		}
    	}
		
		for (var k = 0; k &lt; entry.link.length; k++) {
      		if (entry.link[k].rel == &#39;replies&#39; &amp;&amp; entry.link[k].type == &#39;text/html&#39;) {
        		pcm = entry.link[k].title.split(&quot; &quot;)[0];
        		break;
      		}
    	}
		
    	if (&quot;content&quot; in entry) {
      		var postcontent = entry.content.$t;}
    	else
    	if (&quot;summary&quot; in entry) {
      		var postcontent = entry.summary.$t;}
    	else var postcontent = &quot;&quot;;
    	
    	postdate = entry.published.$t;
	
	if(j&gt;imgr.length-1) j=0;
	img[i] = imgr[j];
	
	s = postcontent	; a = s.indexOf(&quot;&lt;img&quot;); b = s.indexOf(&quot;src=\&quot;&quot;,a); c = s.indexOf(&quot;\&quot;&quot;,b+5); d = s.substr(b+5,c-b-5);

	if((a!=-1)&amp;&amp;(b!=-1)&amp;&amp;(c!=-1)&amp;&amp;(d!=&quot;&quot;)) img[i] = d;

	//cmtext = (text != &#39;no&#39;) ? &#39;&lt;i&gt;&lt;font color=&quot;&#39;+acolor+&#39;&quot;&gt;(&#39;+pcm+&#39; &#39;+text+&#39;)&lt;/font&gt;&lt;/i&gt;&#39; : &#39;&#39;;


	var month = [1,2,3,4,5,6,7,8,9,10,11,12];
	var month2 = [&quot;Jan&quot;,&quot;Feb&quot;,&quot;Mar&quot;,&quot;Apr&quot;,&quot;May&quot;,&quot;Jun&quot;,&quot;Jul&quot;,&quot;Aug&quot;,&quot;Sep&quot;,&quot;Oct&quot;,&quot;Nov&quot;,&quot;Dec&quot;];

	var day = postdate.split(&quot;-&quot;)[2].substring(0,2);
	var m = postdate.split(&quot;-&quot;)[1];
	var y = postdate.split(&quot;-&quot;)[0];

	for(var u2=0;u2&lt;month.length;u2++){
		if(parseInt(m)==month[u2]) {
			m = month2[u2] ; break;
		}
	}

	var daystr = day+ &#39; &#39; + m + &#39; &#39; + y ;

 if (i==0) {
	var trtd = &#39;&lt;li class=&quot;clear&quot; style=&quot;border-top: 0pt none;&quot;&gt;&lt;a href=&quot;&#39;+posturl+&#39;&quot;&gt;&lt;img width=&quot;40&quot; height=&quot;40&quot; src=&quot;&#39;+img[i]+&#39;&quot;/&gt;&lt;/a&gt;&lt;div class=&quot;info&quot;&gt;&lt;a href=&quot;&#39;+posturl+&#39;&quot;&gt;&#39;+posttitle+&#39;&lt;/a&gt;&lt;span class=&quot;meta&quot;&gt;&#39;+daystr+&#39;&lt;/span&gt;&lt;/div&gt;&lt;/li&gt;&#39;;
	document.write(trtd);
}
 if ((i&gt;0)&amp;&amp;(i&lt;numposts))
    {
	var trtd = &#39;&lt;li class=&quot;clear&quot;&gt;&lt;a href=&quot;&#39;+posturl+&#39;&quot;&gt;&lt;img width=&quot;40&quot; height=&quot;40&quot; src=&quot;&#39;+img[i]+&#39;&quot;/&gt;&lt;/a&gt;&lt;div class=&quot;info&quot;&gt;&lt;a href=&quot;&#39;+posturl+&#39;&quot;&gt;&#39;+posttitle+&#39;&lt;/a&gt;&lt;span class=&quot;meta&quot;&gt;&#39;+daystr+&#39;&lt;/span&gt;&lt;/div&gt;&lt;/li&gt;&#39;;
	document.write(trtd);
}

	j++;
}


}
