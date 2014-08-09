function replaceATandDOT(newParagraph){
  var result = newParagraph;
  var symbols = {
    '(AT)': '@',
    'DOT': '.',
    '-AT-': '@'
  }

  for (var k in symbols){
    while(result.indexOf(k)!= -1){
      result = result.replace(k, symbols[k]);
    }
  }

  return result;
};

function thereIsAnAT(newParagraph){
  return newParagraph.indexOf("@");
};

function thereIsaDOTafterAT(newParagraph, indexAT){
  return newParagraph.indexOf(".",indexAT);
};

function thereAreDOTfollowedDOT(newParagraph){
  if(newParagraph.indexOf("..") != -1){
    return false;
  }
  return true;
}

function thereAreMoreATs(newParagraph){
  if(newParagraph.indexOf("@") != newParagraph.lastIndexOf("@")){
    return false;
  }
  return true;
};

function thereIsaDOTatEND(newParagraph){
  if (newParagraph.lastIndexOf(".") == newParagraph.length-1){
    return false;
  }
  return true;
};

function parseEmailsIn(paragraph){
  var newParagraphParsed = "";
	var newParagraph = paragraph.split(" ");
  newParagraph.forEach(function(textValue,position){
    var changedParagraph = replaceATandDOT(textValue);
    var indexAT = thereIsAnAT(changedParagraph);
    var indexDOT = thereIsaDOTafterAT(changedParagraph, indexAT);
    var DOTsTogether = thereAreDOTfollowedDOT(changedParagraph);
    var moreATs = thereAreMoreATs(changedParagraph);
    var DOTatEND = thereIsaDOTatEND(changedParagraph);
    if ((indexAT > 0) && (indexDOT > 0) && (moreATs) && (DOTatEND) && (DOTsTogether)) {
      newParagraphParsed += changedParagraph + " ";
    }
    else{
      newParagraphParsed += textValue + " ";
    }
  })

	return newParagraphParsed.trim();
};