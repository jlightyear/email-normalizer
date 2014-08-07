
context = describe;

parseString = function(paragraph){
	var newParagraph = paragraph.trim();
	if (newParagraph.indexOf("(AT)") > 0) {
		return paragraph.replace("(AT)", "@");
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

  xit("return the parsed string if it contains . after the (AT)", function(){
  	expect(parseString("com.a(AT)a")).toBe("com.a(AT)a");
  })

})