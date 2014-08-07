
context = describe;

clear_email = function(input){
	return input;
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

  it(" returns empty string if it's empty", function(){
  	var input_string = "";
  	expect(clear_email(input_string)).toBe("");
  });

  it(" returns the same string if there is no email", function(){
    var input_string = "AT"
    expect(clear_email(input_string)).toBe("AT");
  });
})