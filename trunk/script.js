$(function () {
         //If less than four divs Hide next button
         if($('.blog-posts.hfeed div').length < 4){
		 $('.next').hide();
		 }
		 //Also hide prev button
		 $('.prev').hide();
         i=0;//Click counter...
		
         $('.next').click(function(){
		 //Prevent animation to mess up... 
	     if($('.blog-posts.hfeed').is(':animated')){
		 return false;
		 }
		 
		 //Animate next click... 
        $('.blog-posts.hfeed').animate({marginLeft:'-=1125'},1000,function(){
         i++;//Increase Var by One...
         // Animation Callback If there are LESS than 6 divs 
		 //hide next button		 
		if($('.blog-posts.hfeed div').length <= 9){
		 $('.next').hide();
		 }
		 // Else if there are more than 6 divs
		 //show next button
		else if($('.blog-posts.hfeed div').length >= 9){
		$('.next').show();		
		}
		
	     //If first click exists show prev button
         if(i==1){        
		 $('.prev').show();
         }
		//If second click exists hide next button	 
		 else if(i==2){
		 $('.next').hide();
		 }
		 		 
        });
    });
      //on prev button click
    $('.prev').click(function(){
	    //Prevent animation to mess up... 
	    if($('.blog-posts.hfeed').is(':animated')){
		 return false;
		 }
		 //Run animation...
        $('.blog-posts.hfeed').animate({marginLeft:'+=1125'},1000,function(){
         i--;//Decrase number of clicks
		 //If on prev click counter===0 hide prev button
		 //and show next button
         if(i==0){
        
         $('.prev').hide();
		 $('.next').show();
         }
		 //Else if click===1 or click===0
        //Show next button		 
		 else if(i==1 || i==0){
		 $('.next').show();
		 }
        });
    });

});