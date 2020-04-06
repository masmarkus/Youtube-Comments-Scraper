


function delCells(sheetName="Internal-Kanal") {

  var ss = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(sheetName);
  var range = ss.getRange("A5:D5");
  range.deleteCells(SpreadsheetApp.Dimension.COLUMNS);


}


//Deleting Cells
delCells();
