
context = describe;

replaceATandDOT = function(newParagraph){
  var result = newParagraph;
  var symbols = {
    '(AT)': '@',
    'DOT': '.',
    '-AT-': '@'
  }

  for (var k in symbols){
    result = result.replace(k, symbols[k]);
  }

  return result;
}

thereIsAnAT = function(newParagraph){
  return newParagraph.indexOf("@");
}

thereIsaDOTafterAT = function(newParagraph, indexAT){
  return newParagraph.indexOf(".",indexAT);
}

parseEmailsInText = function(paragraph){
	var newParagraph = paragraph.trim();
  var changedParagraph = replaceATandDOT(newParagraph);
	var indexAT = thereIsAnAT(changedParagraph);
	var indexDOT = thereIsaDOTafterAT(changedParagraph, indexAT);
	if ((indexAT > 0) && (indexDOT > 0)) {
		return changedParagraph;
	}

	return paragraph;
}

describe("Parse email in the text", function(){

	/*EMAILS:

	joseluis.estrach(AT)gmail.com => joseluis.estrach@gmail.com
	joseluis.estrach(AT)gmail(DOT)com => joseluis.estrach@gmail.com
	joseluis.estrach-AT-gmail-DOT-com => joseluis.estrach@gmail.com

	SAMPLE INPUT:
	I want to send an email to joseluis.estrach(AT)gmail(DOT)com

	OUTPUT:
	I want to send an email to joseluis.estrach@gmail.com*/

  it("returns an empty string when the input text is empty", function(){
  	var string = "";
  	expect(parseEmailsInText(string)).toBe("");
  });

  it("returns the same string when the input text doesn't contain an email", function(){
  	var string = "Elena";
  	expect(parseEmailsInText(string)).toBe("Elena");
  });

  it("returns the parsed string when the input text contains (AT)", function(){
  	var string = "a(AT)a.com"
  	expect(parseEmailsInText(string)).toBe("a@a.com");
  });

  it("returns the parsed string when the input text contains a DOT" , function() {
    expect(parseEmailsInText("pepe.rodriguez(AT)gmailDOTcom")).toBe("pepe.rodriguez@gmail.com");
  })

  it("ignores trailing spaces in the input text", function(){
      expect(parseEmailsInText("      (AT)")).toBe("      (AT)");
  });

  it("returns the same string when doesn't find a dot in the input text", function() {
      expect(parseEmailsInText("a(AT)a")).toBe("a(AT)a");
  })

  it("returns the same string when it doesn't contain a DOT after the AT", function(){
    expect(parseEmailsInText("comDOTa(AT)a")).toBe("comDOTa(AT)a");
  })

  it("returns the parsed string when it contains a DOT before the (AT) followed by another DOT" , function() {
    expect(parseEmailsInText("pepe.rodriguez(AT)gmail.com")).toBe("pepe.rodriguez@gmail.com");
  })

  it("returns the same string when there are 2 ATs", function(){
    expect(parseEmailsInText("com(AT)DOTa(AT)a")).toBe("com(AT)DOTa(AT)a");
  })


})