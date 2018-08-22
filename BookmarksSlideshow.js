define(["jquery", "qlik", "text!./BookmarksSlideshow.css",'./properties'], function($, qlik, cssContent, properties) {
    'use strict';
    $("<style>").html(cssContent).appendTo("head");

    return {

        //define the properties panel looks like
        definition: properties,
        paint : function($element,layout) {
            //console.log("------------------------------------",layout);
            //console.log("Refresh Interval", layout.props.refreshInterval);
			//console.log(layout.props.showTopBars);
			//console.log($("#qv-toolbar-container").css());	
            var app = qlik.currApp(this);


            var BookmarkIDs = [];
            for(var i=1; i<=layout.props.noOfSlides; i++){
                BookmarkIDs.push(eval('layout.props.bookmark' + i));
            }
            //console.log('Bookmark IDs: ',BookmarkIDs);

            var SheetIDs = [];
            for(var i=1; i<=layout.props.noOfSlides; i++){
                SheetIDs.push(eval('layout.props.sheet' + i));
            }
            //console.log('Sheet IDs: ',SheetIDs);

            var html = '<html><button name="BookmarkSlideshow' + layout.qInfo.qId + '" id="bookmarkSlideshow_' + layout.qInfo.qId + '" class="bookmarkSlideshow2" type="button">Start Slideshow</button><input id="showTopBar" type="hidden" value='+layout.props.showTopBars+'><br/><button id="showTopBarButton" type="button">Show/Hide Top Bars</button></html>';
			
		
            $element.html(html);
			
			$("#showTopBarButton").click(function(  ) {

				 //event.preventDefault();
				 if($("#qv-toolbar-container").css("display") == "none"){
					//layout.props.showTopBars = "block";
					$("#qv-toolbar-container").css({display: "block"});
					$(".qv-panel-current-selections").css({display: "block"});
					//$(this).text("Hide/Sh Top Bars");
				 }
				 else{
					layout.props.showTopBars = "none";
					$("#qv-toolbar-container").css({display: "none"});
					$(".qv-panel-current-selections").css({display: "none"});
					//$(this).text("Show Top Bars");
				}
				  
			});				

            $("#bookmarkSlideshow_" + layout.qInfo.qId).on('qv-activate', function () {
                
                for(var i=0; i<layout.props.noOfSlides; i++){
                    slideshow(i, BookmarkIDs, SheetIDs, app, qlik, layout);
                }
            });
        }
    };
});

var slideshow = function (i, BookmarkIDs, SheetIDs, app, qlik, layout) {
	$("#qv-toolbar-container").css({display: layout.props.showTopBars});
	$(".qv-panel-current-selections").css({display: layout.props.showTopBars});		    
	setTimeout(function(){
		//console.log("esse é o Bookmark "+ BookmarkIDs[i] +" de tipo "+ typeof(BookmarkIDs[i]));
		if(BookmarkIDs[i]=="")
			app.clearAll();
		else
			app.bookmark.apply(BookmarkIDs[i]);
        qlik.navigation.gotoSheet(SheetIDs[i]);
        setInterval(function(){    

			//console.log("esse é o Bookmark "+ BookmarkIDs[i] +" de tipo "+ typeof(BookmarkIDs[i]));
			if(BookmarkIDs[i]=="")
				app.clearAll();
			else		
				app.bookmark.apply(BookmarkIDs[i]);
            qlik.navigation.gotoSheet(SheetIDs[i]);
        },layout.props.refreshInterval*layout.props.noOfSlides);
    },layout.props.refreshInterval*i); 
};