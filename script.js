var qtyPlus = document.getElementById('qty-plus');
var qtyMoins = document.getElementById('qty-moins');

var qty = document.getElementById('qty');
var ctp = parseInt(qty.value);


qtyPlus.addEventListener('click',function(){
	ctp = ctp+1;
	qty.value = ctp;
	total();
});

qtyMoins.addEventListener('click',function(){
	ctp = ctp-1;
	qty.value = ctp;
	total();
});


var faHeart = document.getElementById('heart');
console.log(faHeart)
faHeart.addEventListener('click',function(){
	
	
	if(faHeart.style.color = "black") {
		faHeart.style.color = "red"
	}
	else( faHeart.style.color = "black")

});
var prix = parseInt(document.getElementById('prix').innerText);
	var qty = parseInt(document.getElementById('qty').innerText);
	var sommeT = prix*qty;
	console.log(sommeT)
	total.addEventListener('sommeT',function(){
		document.getElementById('sommeT').innerText = sommeT +' fr';
	});



