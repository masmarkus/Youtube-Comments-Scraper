



function clearTable(sheetName="Internal-Kanal") {

  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(sheetName);    // enter your sheet name here
  var rangesToClear = ["A2:A500","B2:B500","C2:C500","D2:D500"];       // enter all range references here
  for (var i = 0; i < rangesToClear.length; i++) {

    sheet.getRange(rangesToClear[i]).clearContent();

  }

  var range = sheet.getRange("E1:I1");
  range.deleteCells(SpreadsheetApp.Dimension.COLUMNS);
}


//Clear the table
clearTable();
