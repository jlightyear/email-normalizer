
context = describe;

parseString = function(string){
	var newString = "";
	if (string.indexOf("(AT)") > -1) {
		newString = string.replace("(AT)", "@");
	} else {
		newString = string;
	}
	return newString;
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
  	var string = "a(AT)a"
  	expect(parseString(string)).toBe("a@a");
  });

})