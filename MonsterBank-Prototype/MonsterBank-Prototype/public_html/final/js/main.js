$().ready( function() { 
	$("#login-pls").submit(function() {
		let isOk = true;
		if ($("#login").val().trim() == "") {		
			$("#login-err").text("Vyplňte prosím přihlašovací jméno!");
			redInput("#login", false);
			isOk = false;
		}else {
			if ($("#login").val().trim().length < 5 ) {		
				$("#login-err").text("Jméno musí mít aspoň pět znaků!");
				isOk = false;
				redInput("#login", false);
			} else {
				$("#login-err").text("");
				redInput("#login", true);
			}
		}
		
		if ($("#pwd").val().trim() == "") {		
			$("#pwd-err").text("Vyplňte prosím heslo!");
			isOk = false;
			redInput("#pwd", false);
		} else {
			if ($("#pwd").val().trim().length < 4 ) {		
				$("#pwd-err").text("Heslo musí mít aspoň čtyři znaky!");
				redInput("#pwd", false);
				isOk = false;
			} else {
				$("#pwd-err").text("");
				redInput("#pwd", true);
			}			
		}		
		
		return isOk;
	});
});

function redInput(id, remove) {
	
	if (remove && $(id).hasClass("wrong-input")){
		$(id).removeClass("wrong-input");
	}else {
		if (!remove) {
			$(id).addClass("wrong-input");
		}
	}
	
}

