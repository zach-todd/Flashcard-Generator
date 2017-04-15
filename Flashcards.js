var question = "000000000" 
function Basic(front, back){
	this.front = front;
	this.back = back ;

}

function Cloze(text, cloze){
	this.answer = text;
	this.cloze = cloze;
	this.spCloze = this.cloze.split(" ");
	//^ used to seperate cloze in cases of several words 
	this.create= function() {
		var checkARR =	this.answer.split(" ");
		
		for (var i = 0; i < this.spCloze.length; i++) {
			//console.log(checkARR);
			if ( checkARR.includes(this.spCloze[i]) === true){
					var init = checkARR.indexOf(this.spCloze[0]);
					var tot = this.spCloze.length;
					var newARR = []; 
					for (var i = 0; i < checkARR.length; i++) {
					newARR.push(checkARR[i]);
					}
					
					newARR.splice(init,tot,"...");
					question = newARR.join(" ");

					console.log(question);
					console.log(this.cloze);
					console.log(this.answer);

			}
			else{
				console.log("cloze parameter is not inside the text");
			}

		}	

	}

}


var basic =  new Basic("Who was the first president", "George Washington");

var cloze = new Cloze("George Washington was the first president", "George Washington");

cloze.create();
console.log(basic.front);
console.log(basic.back);