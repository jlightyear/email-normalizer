context = describe;

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
  	expect(parseEmailsIn(string)).toBe("");
  });

  it("returns the same string when the input text doesn't contain an email", function(){
  	var string = "Elena";
  	expect(parseEmailsIn(string)).toBe("Elena");
  });

  it("returns the parsed string when the input text contains (AT)", function(){
  	var string = "a(AT)a.com"
  	expect(parseEmailsIn(string)).toBe("a@a.com");
  });

  it("returns the parsed string when the input text contains a DOT" , function() {
    expect(parseEmailsIn("pepe.rodriguez(AT)gmailDOTcom")).toBe("pepe.rodriguez@gmail.com");
  })

  xit("ignores trailing spaces in the input text", function(){
    expect(parseEmailsIn("      (AT)")).toBe("      (AT)");
  });

  it("returns the same string when doesn't find a dot in the input text", function() {
    expect(parseEmailsIn("a(AT)a")).toBe("a(AT)a");
  })

  it("returns the same string when it doesn't contain a DOT after the AT", function(){
    expect(parseEmailsIn("comDOTa(AT)a")).toBe("comDOTa(AT)a");
  })

  it("returns the same string when it contains two DOTs next", function(){
    expect(parseEmailsIn("comDOTa(AT)a..com")).toBe("comDOTa(AT)a..com");
  })

  it("returns the parsed string when it contains a DOT before the (AT) followed by another DOT" , function() {
    expect(parseEmailsIn("pepe.rodriguez(AT)gmail.com")).toBe("pepe.rodriguez@gmail.com");
  })

  it("returns the same string when there are more than one AT", function(){
    expect(parseEmailsIn("com(AT)DOTa(AT)a")).toBe("com(AT)DOTa(AT)a");
  })

  it("returns the same string when the DOT is at the end of the text", function(){
    expect(parseEmailsIn("comDOTa(AT)aDOT")).toBe("comDOTa(AT)aDOT");
  })

  it("returns two parsed emails in the text", function(){
    expect(parseEmailsIn("pepeDOTa(AT)aDOTcom pedro(AT)aDOTcom")).toBe("pepe.a@a.com pedro@a.com");
  })
})

describe("Testing the DOM", function(){

  it("Cleans the input text", function() {
     the_user_introduces_the_text("lalala(AT)gmailDOTcom");
     the_user_asks_the_app_to_clean_up();
     the_output_box_should_display("lalala@gmail.com");
   });

  function the_user_introduces_the_text(text) {
   var inputBox = $("#input-text");
   inputBox.html(text);
  }

  function the_user_asks_the_app_to_clean_up(){
    var button = $("#clean-button");
    button.click();
  }

  function the_output_box_should_display(text){
   var resultBox = $("#cleaned-text");
   var output_text = resultBox.html();
   expect(output_text).toBe(text);
  }

})