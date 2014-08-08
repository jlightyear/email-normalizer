
context = describe;

changingSymbols = function(newParagraph){
  var result = "";
  var symbols = {
    '(AT)': '@',
    'DOT': '.',
    '-AT-': '@'
  }

  for (var k in symbols){
    result = newParagraph.replace(k, symbols[k]);
  }

  return result;
}

thereIsAnAT = function(newParagraph){
  return newParagraph.indexOf("@");
}

thereIsaDOT = function(newParagraph, indexAT){
  return newParagraph.indexOf(".",indexAT);
}

parseString = function(paragraph){
	var newParagraph = paragraph.trim();
  newParagraph = changingSymbols(newParagraph);
	var indexAT = thereIsAnAT(newParagraph);
	var indexDOT = thereIsaDOT(newParagraph, indexAT);
	if ((indexAT > 0) && (indexDOT > 0)) {
		return newParagraph;
	}

	return paragraph;
}

describe("Email parser", function(){

	/*EMAILS:

	joseluis.estrach(AT)gmail.com => joseluis.estrach@gmail.com
	joseluis.estrach(AT)gmail(DOT)com => joseluis.estrach@gmail.com
	joseluis.estrach-AT-gmail-DOT-com => joseluis.estrach@gmail.com

	SAMPLE INPUT:
	I want to send an email to joseluis.estrach(AT)gmail(DOT)com

	OUTPUT:
	I want to send an email to joseluis.estrach@gmail.com*/

  it(" return empty string if it's empty", function(){
  	var string = "";
  	expect(parseString(string)).toBe("");
  });

  it(" return the same string that the input", function(){
  	var string = "Elena";
  	expect(parseString(string)).toBe("Elena");
  });

  it("return the parsed string if it contains (AT)", function(){
  	var string = "a(AT)a.com"
  	expect(parseString(string)).toBe("a@a.com");
  });

  it("ignores trailing spaces", function(){
      expect(parseString("      (AT)")).toBe("      (AT)");
  });

  it("returns the current string if it not finds a dot", function() {
  		expect(parseString("a(AT)a")).toBe("a(AT)a");
  })

  it("return the current string if it doesn't contain a . after the (AT)", function(){
  	expect(parseString("com.a(AT)a")).toBe("com.a(AT)a");
  })

  it("return the parsed string if it contains a dot before the (AT) followed by another dot" , function() {
  	expect(parseString("pepe.rodriguez(AT)gmail.com")).toBe("pepe.rodriguez@gmail.com");
  })

  it("return the parsed string if it contains a DOT" , function() {
    expect(parseString("pepe.rodriguez(AT)gmailDOTcom")).toBe("pepe.rodriguez@gmail.com");
  })

})