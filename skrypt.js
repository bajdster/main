window.onload= function()
{
	
			var typing = document.getElementById("typing");
			var currentIndex = 0;

		var startTyping = function(text)
		{
		var interwal = setInterval(function()
			{
				if(text.length>currentIndex)
				{
					typing.innerHTML +=text[currentIndex];
					currentIndex++;
				}
				else
				{
					clearInterval(interwal)
				}
				
			}, 100)	
		}

	startTyping("$ Witaj, tu zagrasz w ruletkę o wielkie wygrane");


	//obkret kołem o losową wartośc stopni 


	var przycisk = document.getElementById("obstawianie").krec;//formularz obstawianie
	var sprawdz = document.getElementById("sprawdz");

	przycisk.onclick = function(e)
	{
		
		
		var kolo = document.getElementById("kolo");
		var stopnie = Math.floor((Math.random()*720)+2500);// kolo obkreci sie przynajmniej raz
		kolo.style.animation = "obkret 3s ease-in-out";// funkcja przy kliknieciu wywoluje animacje obrotu od 0deg do stopnie+deg stopni w 3 sekundy rozpedzajac sie
		kolo.style.transform = "rotate("+ stopnie +"deg)";// funkcja sprawia ze kolo pozostaje w miejscu gdzie zdołało się obrócić o ilosc stopni podanych w zmiennej stopnie
		
		
		// wylosowanie losowej liczby z ruletki i sprawdzenie jej z liczba usera
		var losowaLiczba = Math.round(Math.random()*37);
		var typ = document.getElementById("obstawianie").liczba.value;
		
		if(losowaLiczba == typ) 
		{
			sprawdz.innerHTML = "Wygrana: " + losowaLiczba;
			sprawdz.style.backgroundColor = "#33FF00";
		}
		else 
		{
			sprawdz.innerHTML = "Porażka: " + losowaLiczba;
			sprawdz.style.backgroundColor = "#990000";
		}
		e.preventDefault();
		
	
		
			
		
		
	}

}




//<span style="color:black">
//var RandomFieldNumber = Math.floor((Math.random() * <span style="color:red">15</span>) + <span //style="color:red">1</span>); </span>