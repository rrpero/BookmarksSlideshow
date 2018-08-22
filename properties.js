/*global define*/
define( [
    'jquery',
    'underscore',
    'qlik',
    'ng!$http',
    'ng!$q'

], function ($, _, qlik, $http, $q) {

    var app = qlik.currApp();

    // ****************************************************************************************
    // Helper Promises
    // ****************************************************************************************
    var getBookmarkList = function () {
        var defer = $q.defer();

        app.getList( 'BookmarkList', function ( items ) {
            defer.resolve( items.qBookmarkList.qItems.map( function ( item ) {
                return {
                    value: item.qInfo.qId,
                    label: item.qData.title
                }
            } )
                         );
        } );
        return defer.promise;
    };

    var getSheetList = function () {

        var defer = $q.defer();

        app.getAppObjectList( function ( data ) {
            var sheets = [];
            var sortedData = _.sortBy( data.qAppObjectList.qItems, function ( item ) {
                return item.qData.rank;
            } );
            _.each( sortedData, function ( item ) {
                sheets.push( {
                    value: item.qInfo.qId,
                    label: item.qMeta.title
                } );
            } );
            return defer.resolve( sheets );
        } );

        return defer.promise;
    };

    // ****************************************************************************************
    // Layout
    // ****************************************************************************************

    var refreshInterval = {
        ref: "props.refreshInterval",
        type: "integer",
        label: "Refresh Interval (milliseconds)",
        defaultValue: 5000
    };

    var noOfSlides = {
        ref: "props.noOfSlides",
        component: "dropdown",
        type: "integer",
        label: "No. of Slides",
        options: [
            {value: 2,
             label: "2 Slides"},
            {value: 3,
             label: "3 Slides"},
            {value: 4,
             label: "4 Slides"},
            {value: 5,
             label: "5 Slides"},
            {value: 6,
             label: "6 Slides"},
            {value: 7,
             label: "7 Slides"},
            {value: 8,
             label: "8 Slides"},
            {value: 9,
             label: "9 Slides"},
            {value: 10,
             label: "10 Slides"},
			 
			 {value: 11,
             label: "11 Slides"},
			 {value: 12,
             label: "12 Slides"},
			 {value: 13,
             label: "13 Slides"},
			 {value: 14,
             label: "14 Slides"},
			 {value: 15,
             label: "15 Slides"},
			 {value: 16,
             label: "16 Slides"},
			 {value: 17,
             label: "17 Slides"},
			 {value: 18,
             label: "18 Slides"},
			 {value: 19,
             label: "19 Slides"},
			 {value: 20,
             label: "20 Slides"},
			 {value: 21,
             label: "21 Slides"},
			 {value: 22,
             label: "22 Slides"},
			 {value: 23,
             label: "23 Slides"},
			 {value: 24,
             label: "24 Slides"},
			 {value: 25,
             label: "25 Slides"},
			 {value: 26,
             label: "26 Slides"},
			 {value: 27,
             label: "27 Slides"},
			 {value: 28,
             label: "28 Slides"},
			 {value: 29,
             label: "29 Slides"},
			 {value: 30,
             label: "30 Slides"}
        ],
        defaultValue: 3
    };

    var bookmark1 = {
        type: "string",
        component: "dropdown",
        label: "Bookmark 1:",
        ref: "props.bookmark1",
        options: function () {
            return getBookmarkList()
                .then( function ( items ) {
                return items;
            });
        },
        show: function ( data ) {
            return data.props.noOfSlides >= 2;
        }
    };

    var sheet1 = {
        type: "string",
        component: "dropdown",
        label: "Sheet 1:",
        ref: "props.sheet1",
        options: function () {
            return getSheetList().then( function ( items ) {
                return items;
            } );
        },
        show: function ( data ) {
            return data.props.noOfSlides >= 2;
        }
    };

    var bookmark2 = {
        type: "string",
        component: "dropdown",
        label: "Bookmark 2:",
        ref: "props.bookmark2",
        options: function () {
            return getBookmarkList()
                .then( function ( items ) {
                return items;
            });
        },
        show: function ( data ) {
            return data.props.noOfSlides >= 2;
        }
    };

    var sheet2 = {
        type: "string",
        component: "dropdown",
        label: "Sheet 2:",
        ref: "props.sheet2",
        options: function () {
            return getSheetList().then( function ( items ) {
                return items;
            } );
        },
        show: function ( data ) {
            return data.props.noOfSlides >= 2;
        }
    };

    var bookmark3 = {
        type: "string",
        component: "dropdown",
        label: "Bookmark 3:",
        ref: "props.bookmark3",
        options: function () {
            return getBookmarkList()
                .then( function ( items ) {
                return items;
            });
        },
        show: function ( data ) {
            return data.props.noOfSlides >= 3;
        }
    };

    var sheet3 = {
        type: "string",
        component: "dropdown",
        label: "Sheet 3:",
        ref: "props.sheet3",
        options: function () {
            return getSheetList().then( function ( items ) {
                return items;
            } );
        },
        show: function ( data ) {
            return data.props.noOfSlides >= 3;
        }
    };

    var bookmark4 = {
        type: "string",
        component: "dropdown",
        label: "Bookmark 4:",
        ref: "props.bookmark4",
        options: function () {
            return getBookmarkList()
                .then( function ( items ) {
                return items;
            });
        },
        show: function ( data ) {
            return data.props.noOfSlides >= 4;
        }
    };

    var sheet4 = {
        type: "string",
        component: "dropdown",
        label: "Sheet 4:",
        ref: "props.sheet4",
        options: function () {
            return getSheetList().then( function ( items ) {
                return items;
            } );
        },
        show: function ( data ) {
            return data.props.noOfSlides >= 4;
        }
    };

    var bookmark5 = {
        type: "string",
        component: "dropdown",
        label: "Bookmark 5:",
        ref: "props.bookmark5",
        options: function () {
            return getBookmarkList()
                .then( function ( items ) {
                return items;
            });
        },
        show: function ( data ) {
            return data.props.noOfSlides >= 5;
        }
    };

    var sheet5 = {
        type: "string",
        component: "dropdown",
        label: "Sheet 5:",
        ref: "props.sheet5",
        options: function () {
            return getSheetList().then( function ( items ) {
                return items;
            } );
        },
        show: function ( data ) {
            return data.props.noOfSlides >= 5;
        }
    };

    var bookmark6 = {
        type: "string",
        component: "dropdown",
        label: "Bookmark 6:",
        ref: "props.bookmark6",
        options: function () {
            return getBookmarkList()
                .then( function ( items ) {
                return items;
            });
        },
        show: function ( data ) {
            return data.props.noOfSlides >= 6;
        }
    };

    var sheet6 = {
        type: "string",
        component: "dropdown",
        label: "Sheet 6:",
        ref: "props.sheet6",
        options: function () {
            return getSheetList().then( function ( items ) {
                return items;
            } );
        },
        show: function ( data ) {
            return data.props.noOfSlides >= 6;
        }
    };

    var bookmark7 = {
        type: "string",
        component: "dropdown",
        label: "Bookmark 7:",
        ref: "props.bookmark7",
        options: function () {
            return getBookmarkList()
                .then( function ( items ) {
                return items;
            });
        },
        show: function ( data ) {
            return data.props.noOfSlides >= 7;
        }
    };

    var sheet7 = {
        type: "string",
        component: "dropdown",
        label: "Sheet 7:",
        ref: "props.sheet7",
        options: function () {
            return getSheetList().then( function ( items ) {
                return items;
            } );
        },
        show: function ( data ) {
            return data.props.noOfSlides >= 7;
        }
    };

    var bookmark8 = {
        type: "string",
        component: "dropdown",
        label: "Bookmark 8:",
        ref: "props.bookmark8",
        options: function () {
            return getBookmarkList()
                .then( function ( items ) {
                return items;
            });
        },
        show: function ( data ) {
            return data.props.noOfSlides >= 8;
        }
    };

    var sheet8 = {
        type: "string",
        component: "dropdown",
        label: "Sheet 8:",
        ref: "props.sheet8",
        options: function () {
            return getSheetList().then( function ( items ) {
                return items;
            } );
        },
        show: function ( data ) {
            return data.props.noOfSlides >= 8;
        }
    };

    var bookmark9 = {
        type: "string",
        component: "dropdown",
        label: "Bookmark 9:",
        ref: "props.bookmark9",
        options: function () {
            return getBookmarkList()
                .then( function ( items ) {
                return items;
            });
        },
        show: function ( data ) {
            return data.props.noOfSlides >= 9;
        }
    };

    var sheet9 = {
        type: "string",
        component: "dropdown",
        label: "Sheet 9:",
        ref: "props.sheet9",
        options: function () {
            return getSheetList().then( function ( items ) {
                return items;
            } );
        },
        show: function ( data ) {
            return data.props.noOfSlides >= 9;
        }
    };

    var bookmark10 = {
        type: "string",
        component: "dropdown",
        label: "Bookmark 10:",
        ref: "props.bookmark10",
        options: function () {
            return getBookmarkList()
                .then( function ( items ) {
                return items;
            });
        },
        show: function ( data ) {
            return data.props.noOfSlides >= 10;
        }
    };

    var sheet10 = {
        type: "string",
        component: "dropdown",
        label: "Sheet 10:",
        ref: "props.sheet10",
        options: function () {
            return getSheetList().then( function ( items ) {
                return items;
            } );
        },
        show: function ( data ) {
            return data.props.noOfSlides >= 10;
        }
    };
	
	var bookmark11 = {
        type: "string",
        component: "dropdown",
        label: "Bookmark 11:",
        ref: "props.bookmark11",
        options: function () {
            return getBookmarkList()
                .then( function ( items ) {
                return items;
            });
        },
        show: function ( data ) {
            return data.props.noOfSlides >= 11;
        }
    };

    var sheet11 = {
        type: "string",
        component: "dropdown",
        label: "Sheet 11:",
        ref: "props.sheet11",
        options: function () {
            return getSheetList().then( function ( items ) {
                return items;
            } );
        },
        show: function ( data ) {
            return data.props.noOfSlides >= 11;
        }
    };
	
	var bookmark12 = {
        type: "string",
        component: "dropdown",
        label: "Bookmark 12:",
        ref: "props.bookmark12",
        options: function () {
            return getBookmarkList()
                .then( function ( items ) {
                return items;
            });
        },
        show: function ( data ) {
            return data.props.noOfSlides >= 12;
        }
    };

    var sheet12 = {
        type: "string",
        component: "dropdown",
        label: "Sheet 12:",
        ref: "props.sheet12",
        options: function () {
            return getSheetList().then( function ( items ) {
                return items;
            } );
        },
        show: function ( data ) {
            return data.props.noOfSlides >= 12;
        }
    };
	
	var bookmark13 = {
        type: "string",
        component: "dropdown",
        label: "Bookmark 13:",
        ref: "props.bookmark13",
        options: function () {
            return getBookmarkList()
                .then( function ( items ) {
                return items;
            });
        },
        show: function ( data ) {
            return data.props.noOfSlides >= 13;
        }
    };

    var sheet13 = {
        type: "string",
        component: "dropdown",
        label: "Sheet 13:",
        ref: "props.sheet13",
        options: function () {
            return getSheetList().then( function ( items ) {
                return items;
            } );
        },
        show: function ( data ) {
            return data.props.noOfSlides >= 13;
        }
    };
	
	var bookmark14 = {
        type: "string",
        component: "dropdown",
        label: "Bookmark 14:",
        ref: "props.bookmark14",
        options: function () {
            return getBookmarkList()
                .then( function ( items ) {
                return items;
            });
        },
        show: function ( data ) {
            return data.props.noOfSlides >= 14;
        }
    };

    var sheet14 = {
        type: "string",
        component: "dropdown",
        label: "Sheet 14:",
        ref: "props.sheet14",
        options: function () {
            return getSheetList().then( function ( items ) {
                return items;
            } );
        },
        show: function ( data ) {
            return data.props.noOfSlides >= 14;
        }
    };
	
	var bookmark15 = {
        type: "string",
        component: "dropdown",
        label: "Bookmark 15:",
        ref: "props.bookmark15",
        options: function () {
            return getBookmarkList()
                .then( function ( items ) {
                return items;
            });
        },
        show: function ( data ) {
            return data.props.noOfSlides >= 15;
        }
    };

    var sheet15 = {
        type: "string",
        component: "dropdown",
        label: "Sheet 15:",
        ref: "props.sheet15",
        options: function () {
            return getSheetList().then( function ( items ) {
                return items;
            } );
        },
        show: function ( data ) {
            return data.props.noOfSlides >= 15;
        }
    };
	
	var bookmark16 = {
        type: "string",
        component: "dropdown",
        label: "Bookmark 16:",
        ref: "props.bookmark16",
        options: function () {
            return getBookmarkList()
                .then( function ( items ) {
                return items;
            });
        },
        show: function ( data ) {
            return data.props.noOfSlides >= 16;
        }
    };

    var sheet16 = {
        type: "string",
        component: "dropdown",
        label: "Sheet 16:",
        ref: "props.sheet16",
        options: function () {
            return getSheetList().then( function ( items ) {
                return items;
            } );
        },
        show: function ( data ) {
            return data.props.noOfSlides >= 16;
        }
    };
	
	var bookmark17 = {
        type: "string",
        component: "dropdown",
        label: "Bookmark 17:",
        ref: "props.bookmark17",
        options: function () {
            return getBookmarkList()
                .then( function ( items ) {
                return items;
            });
        },
        show: function ( data ) {
            return data.props.noOfSlides >= 17;
        }
    };

    var sheet17 = {
        type: "string",
        component: "dropdown",
        label: "Sheet 17:",
        ref: "props.sheet17",
        options: function () {
            return getSheetList().then( function ( items ) {
                return items;
            } );
        },
        show: function ( data ) {
            return data.props.noOfSlides >= 17;
        }
    };
	
	var bookmark18 = {
        type: "string",
        component: "dropdown",
        label: "Bookmark 18:",
        ref: "props.bookmark18",
        options: function () {
            return getBookmarkList()
                .then( function ( items ) {
                return items;
            });
        },
        show: function ( data ) {
            return data.props.noOfSlides >= 18;
        }
    };

    var sheet18 = {
        type: "string",
        component: "dropdown",
        label: "Sheet 18:",
        ref: "props.sheet18",
        options: function () {
            return getSheetList().then( function ( items ) {
                return items;
            } );
        },
        show: function ( data ) {
            return data.props.noOfSlides >= 18;
        }
    };
	
	var bookmark19 = {
        type: "string",
        component: "dropdown",
        label: "Bookmark 19:",
        ref: "props.bookmark19",
        options: function () {
            return getBookmarkList()
                .then( function ( items ) {
                return items;
            });
        },
        show: function ( data ) {
            return data.props.noOfSlides >= 19;
        }
    };

    var sheet19 = {
        type: "string",
        component: "dropdown",
        label: "Sheet 19:",
        ref: "props.sheet19",
        options: function () {
            return getSheetList().then( function ( items ) {
                return items;
            } );
        },
        show: function ( data ) {
            return data.props.noOfSlides >= 19;
        }
    };
	
	var bookmark20 = {
        type: "string",
        component: "dropdown",
        label: "Bookmark 20:",
        ref: "props.bookmark20",
        options: function () {
            return getBookmarkList()
                .then( function ( items ) {
                return items;
            });
        },
        show: function ( data ) {
            return data.props.noOfSlides >= 20;
        }
    };

    var sheet20 = {
        type: "string",
        component: "dropdown",
        label: "Sheet 20:",
        ref: "props.sheet20",
        options: function () {
            return getSheetList().then( function ( items ) {
                return items;
            } );
        },
        show: function ( data ) {
            return data.props.noOfSlides >= 20;
        }
    };
	
	var bookmark21 = {
        type: "string",
        component: "dropdown",
        label: "Bookmark 21:",
        ref: "props.bookmark21",
        options: function () {
            return getBookmarkList()
                .then( function ( items ) {
                return items;
            });
        },
        show: function ( data ) {
            return data.props.noOfSlides >= 21;
        }
    };

    var sheet21 = {
        type: "string",
        component: "dropdown",
        label: "Sheet 21:",
        ref: "props.sheet21",
        options: function () {
            return getSheetList().then( function ( items ) {
                return items;
            } );
        },
        show: function ( data ) {
            return data.props.noOfSlides >= 21;
        }
    };
	
	var bookmark22 = {
        type: "string",
        component: "dropdown",
        label: "Bookmark 22:",
        ref: "props.bookmark22",
        options: function () {
            return getBookmarkList()
                .then( function ( items ) {
                return items;
            });
        },
        show: function ( data ) {
            return data.props.noOfSlides >= 22;
        }
    };

    var sheet22 = {
        type: "string",
        component: "dropdown",
        label: "Sheet 22:",
        ref: "props.sheet22",
        options: function () {
            return getSheetList().then( function ( items ) {
                return items;
            } );
        },
        show: function ( data ) {
            return data.props.noOfSlides >= 22;
        }
    };
	
	var bookmark23 = {
        type: "string",
        component: "dropdown",
        label: "Bookmark 23:",
        ref: "props.bookmark23",
        options: function () {
            return getBookmarkList()
                .then( function ( items ) {
                return items;
            });
        },
        show: function ( data ) {
            return data.props.noOfSlides >= 23;
        }
    };

    var sheet23 = {
        type: "string",
        component: "dropdown",
        label: "Sheet 23:",
        ref: "props.sheet23",
        options: function () {
            return getSheetList().then( function ( items ) {
                return items;
            } );
        },
        show: function ( data ) {
            return data.props.noOfSlides >= 23;
        }
    };
	
	var bookmark24 = {
        type: "string",
        component: "dropdown",
        label: "Bookmark 24:",
        ref: "props.bookmark24",
        options: function () {
            return getBookmarkList()
                .then( function ( items ) {
                return items;
            });
        },
        show: function ( data ) {
            return data.props.noOfSlides >= 24;
        }
    };

    var sheet24 = {
        type: "string",
        component: "dropdown",
        label: "Sheet 24:",
        ref: "props.sheet24",
        options: function () {
            return getSheetList().then( function ( items ) {
                return items;
            } );
        },
        show: function ( data ) {
            return data.props.noOfSlides >= 24;
        }
    };
	
	var bookmark25 = {
        type: "string",
        component: "dropdown",
        label: "Bookmark 25:",
        ref: "props.bookmark25",
        options: function () {
            return getBookmarkList()
                .then( function ( items ) {
                return items;
            });
        },
        show: function ( data ) {
            return data.props.noOfSlides >= 25;
        }
    };

    var sheet25 = {
        type: "string",
        component: "dropdown",
        label: "Sheet 25:",
        ref: "props.sheet25",
        options: function () {
            return getSheetList().then( function ( items ) {
                return items;
            } );
        },
        show: function ( data ) {
            return data.props.noOfSlides >= 25;
        }
    };
	
	var bookmark26 = {
        type: "string",
        component: "dropdown",
        label: "Bookmark 26:",
        ref: "props.bookmark26",
        options: function () {
            return getBookmarkList()
                .then( function ( items ) {
                return items;
            });
        },
        show: function ( data ) {
            return data.props.noOfSlides >= 26;
        }
    };

    var sheet26 = {
        type: "string",
        component: "dropdown",
        label: "Sheet 26:",
        ref: "props.sheet26",
        options: function () {
            return getSheetList().then( function ( items ) {
                return items;
            } );
        },
        show: function ( data ) {
            return data.props.noOfSlides >= 26;
        }
    };
	
	var bookmark27 = {
        type: "string",
        component: "dropdown",
        label: "Bookmark 27:",
        ref: "props.bookmark27",
        options: function () {
            return getBookmarkList()
                .then( function ( items ) {
                return items;
            });
        },
        show: function ( data ) {
            return data.props.noOfSlides >= 27;
        }
    };

    var sheet27 = {
        type: "string",
        component: "dropdown",
        label: "Sheet 27:",
        ref: "props.sheet27",
        options: function () {
            return getSheetList().then( function ( items ) {
                return items;
            } );
        },
        show: function ( data ) {
            return data.props.noOfSlides >= 27;
        }
    };
	
	var bookmark28 = {
        type: "string",
        component: "dropdown",
        label: "Bookmark 28:",
        ref: "props.bookmark28",
        options: function () {
            return getBookmarkList()
                .then( function ( items ) {
                return items;
            });
        },
        show: function ( data ) {
            return data.props.noOfSlides >= 28;
        }
    };

    var sheet28 = {
        type: "string",
        component: "dropdown",
        label: "Sheet 28:",
        ref: "props.sheet28",
        options: function () {
            return getSheetList().then( function ( items ) {
                return items;
            } );
        },
        show: function ( data ) {
            return data.props.noOfSlides >= 28;
        }
    };
	
	var bookmark29 = {
        type: "string",
        component: "dropdown",
        label: "Bookmark 29:",
        ref: "props.bookmark29",
        options: function () {
            return getBookmarkList()
                .then( function ( items ) {
                return items;
            });
        },
        show: function ( data ) {
            return data.props.noOfSlides >= 29;
        }
    };

    var sheet29 = {
        type: "string",
        component: "dropdown",
        label: "Sheet 29:",
        ref: "props.sheet29",
        options: function () {
            return getSheetList().then( function ( items ) {
                return items;
            } );
        },
        show: function ( data ) {
            return data.props.noOfSlides >= 29;
        }
    };
	
	var bookmark30 = {
        type: "string",
        component: "dropdown",
        label: "Bookmark 30:",
        ref: "props.bookmark30",
        options: function () {
            return getBookmarkList()
                .then( function ( items ) {
                return items;
            });
        },
        show: function ( data ) {
            return data.props.noOfSlides >= 30;
        }
    };

    var sheet30 = {
        type: "string",
        component: "dropdown",
        label: "Sheet 30:",
        ref: "props.sheet30",
        options: function () {
            return getSheetList().then( function ( items ) {
                return items;
            } );
        },
        show: function ( data ) {
            return data.props.noOfSlides >= 30;
        }
    };
	
    var showTopBars = {
        ref: "props.showTopBars",
        type: "string",
        label: "Show Top Bars",
        defaultValue: "block",
		component: "dropdown",
	    options: function () {
            var opcoes = [{
                    value: "none",
                    label: "Hide"
                },{
                    value: "block",
                    label: "Show"
                }];
			
			return opcoes;
        }
    };	

    // ****************************************************************************************
    // Setup
    // ****************************************************************************************
    var settings = {
        uses: "settings",
        items: {
            general: {
                items: {
                    showTitles: {
                        defaultValue: false
                    }
                }
            },
            bookmarkSettings: {
                type: "items",
                label: "Settings",
                items: {
                    showTopBars: showTopBars,
					refreshInterval: refreshInterval,
                    noOfSlides: noOfSlides,
                    bookmark1: bookmark1,
                    sheet1: sheet1,
                    bookmark2: bookmark2,
                    sheet2: sheet2,
                    bookmark3: bookmark3,
                    sheet3: sheet3,
                    bookmark4: bookmark4,
                    sheet4: sheet4,
                    bookmark5: bookmark5,
                    sheet5: sheet5,
                    bookmark6: bookmark6,
                    sheet6: sheet6,
                    bookmark7: bookmark7,
                    sheet7: sheet7,
                    bookmark8: bookmark8,
                    sheet8: sheet8,
                    bookmark9: bookmark9,
                    sheet9: sheet9,
                    bookmark10: bookmark10,
                    sheet10: sheet10,
					
					bookmark11: bookmark11,
                    sheet11: sheet11,
					bookmark12: bookmark12,
                    sheet12: sheet12,
					bookmark13: bookmark13,
                    sheet13: sheet13,
					bookmark14: bookmark14,
                    sheet14: sheet14,
					bookmark15: bookmark15,
                    sheet15: sheet15,
					bookmark16: bookmark16,
                    sheet16: sheet16,
					bookmark17: bookmark17,
                    sheet17: sheet17,
					bookmark18: bookmark18,
                    sheet18: sheet18,
					bookmark19: bookmark19,
                    sheet19: sheet19,
					bookmark20: bookmark20,
                    sheet20: sheet20,
					bookmark21: bookmark21,
                    sheet21: sheet21,
					bookmark22: bookmark22,
                    sheet22: sheet22,
					bookmark23: bookmark23,
                    sheet23: sheet23,
					bookmark24: bookmark24,
                    sheet24: sheet24,
					bookmark25: bookmark25,
                    sheet25: sheet25,
					bookmark26: bookmark26,
                    sheet26: sheet26,
					bookmark27: bookmark27,
                    sheet27: sheet27,
					bookmark28: bookmark28,
                    sheet28: sheet28,
					bookmark29: bookmark29,
                    sheet29: sheet29,
					bookmark30: bookmark30,
                    sheet30: sheet30
					
					
                }
            }
        }
    };

    var panelDefinition = {
        type: "items",
        component: "accordion",
        items: {
            settings: settings
        }
    };

    // ****************************************************************************************
    // Return Values
    // ****************************************************************************************
    return panelDefinition;
});