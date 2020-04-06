




function getComments(numOfRes=100, sheetName="Internal-Kanal") {

  /*
  Args:
  :numOfRes => number of results
  :sheetName => name of your worksheet

  Return Val:
  None

  */

  var ss = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(sheetName);

  //var ss = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();

  var vid = ss.getRange(1,1).getValue();

  var data = YouTube.CommentThreads.list('snippet', {videoId : vid, maxResults : numOfRes});

  var item1 = data.nextPageToken;

  var info1 = [item1];

  ss.getRange(1,5).setValues([info1]);

  for (var row=0; row<data.items.length; row++) {

    var item = data.items[row];

    var info = [item.snippet.topLevelComment.snippet.authorDisplayName, item.snippet.topLevelComment.snippet.textDisplay, item.snippet.topLevelComment.snippet.publishedAt, item.snippet.topLevelComment.snippet.likeCount]

    ss.getRange(row+2, 1, 1, 4).setValues([info])

    }


  var nextPageToken1 = ss.getRange(1,5).getValue();

  var vid = ss.getRange(1,1).getValue();

  var data = YouTube.CommentThreads.list('snippet', {videoId : vid, maxResults : numOfRes, pageToken : nextPageToken1});

  var item3 = data.nextPageToken;

  var info3 = [item3];
  ss.getRange(1,6).setValues([info3]);

  for (var row=0; row<data.items.length; row++) {

    var item = data.items[row];

    var info = [item.snippet.topLevelComment.snippet.authorDisplayName, item.snippet.topLevelComment.snippet.textDisplay, item.snippet.topLevelComment.snippet.publishedAt, item.snippet.topLevelComment.snippet.likeCount]
    ss.getRange(row+102, 1, 1, 4).setValues([info])
    }



  var nextPageToken2 = ss.getRange(1,6).getValue();

  var vid = ss.getRange(1,1).getValue();

  var data = YouTube.CommentThreads.list('snippet', {videoId : vid, maxResults : numOfRes, pageToken : nextPageToken2});

  var item4 = data.nextPageToken;

  var info4 = [item4];

  ss.getRange(1,7).setValues([info4]);

 for (var row=0; row<data.items.length; row++) {

    var item = data.items[row];

    var info = [item.snippet.topLevelComment.snippet.authorDisplayName, item.snippet.topLevelComment.snippet.textDisplay, item.snippet.topLevelComment.snippet.publishedAt, item.snippet.topLevelComment.snippet.likeCount]
    ss.getRange(row+202, 1, 1, 4).setValues([info])
    }



}




//Get Youtube video comments from interrnal channel
getComments();
//Get Youtube video comments from external channel
getComments(30, "Eksternal-Kanal");
