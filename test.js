
context = describe;

parseString = function(string){
	return string;
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

})