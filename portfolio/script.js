window.onload = function()
{
	function main()
	{
		
		
		$('#logo').hide();
		$('#logo').fadeIn(1500);
		setTimeout("zmiencytat()", 2000);
		
	}

	function zmiencytat()
	{
		var opis = "<i>Zapraszam do współpracy<i>";

		document.getElementById("cytat").innerHTML = opis;

	}
	$(document).ready(main);

	
	
	
	var przycisk = document.getElementById("przycisk");

	przycisk.onclick = function()
		{
			window.scrollBy(0, -1 * window.pageYOffset);
		};

	window.onscroll = function()
		{
			var przesuniecie = window.pageYOffset;
			
			if(przesuniecie > 300)
			{
				przycisk.style.display = "block";
			}
			else
				przycisk.style.display = "none";
		};
};
