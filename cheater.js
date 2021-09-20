function timeClick()
{
	var elementos = document.querySelectorAll(".enabled:not(.toggledOff) .content .price");
	var nomes = document.querySelectorAll(".product.enabled:not(.toggledOff) .content .title:not(.owned)");
	
	var total = elementos.length;
  var minimum = (minimumBuy - 1);
  minimum = (minimum <= 0) ? 1 : minimum; // in case you try to break the var by using a smaller number

	if(total > minimum)
	{
		var indice = total - 1;
		var price = elementos[indice].innerHTML.replaceAll(',','');
		var name = nomes[indice].innerHTML;
		elementos[indice].click();
		console.log(name);
		console.log(price);
	}

	var time = 2000;

	if(autoFTW)
	{
		setTimeout(function(){ timeClick(); }, time);
	}
}

function clickBig()
{
	document.getElementById('bigCookie').click();

	if(autoFTW)
	{
		setTimeout(function(){ clickBig(); }, clickSpeed );
	}
}

function clickGold()
{
	var gold = document.querySelector(".shimmer");
	if(gold)
	{
		gold.click();
	}
	
	var time = 100;

	if(autoFTW)
	{
		setTimeout(function(){ clickGold(); }, time );
	}
}

var autoFTW = false;
var minimumBuy = 1;
var clickSpeed = 5;

function startAuto()
{
	autoFTW = true;
	timeClick();
	clickBig();
	clickGold();
}

function stopAuto(){
	autoFTW = false;
}

startAuto();
