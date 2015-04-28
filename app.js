$(document).ready(function(){
		$("#angular").click(function() {
			 window.location.href = "asd.html";
						localStorage.setItem('penz', 100);
		});
		$("#about").click(function() {
			 window.location.href = "about.html";
		});
		$("#backIndex").click(function() {
			 window.location.href = "index.html";
			 localStorage.setItem('penz', 100);
		});
		
		$("#back").click(function() {
			 window.location.href = "options.html";
		});
		
		$("#back1").click(function() {
			  betolt();
		});
		
		$("#RandomGenerate").click(function() {
			betolt();
			document.getElementById("penz").innerHTML = localStorage.getItem('penz');
			localStorage.setItem('kovetkezo',0);
			randomGenerator(); 
		});
		
		$("#addItem").click(function() {
			  ment();
		});	
		$("#kiirat").click(function() {
			  var button = document.getElementById("kiirat");
				button.style.visibility = 'hidden';
				ujkor();
				document.getElementById("penz").innerHTML = localStorage.getItem('penz');
				location.reload();
				document.getElementById("penz").innerHTML = localStorage.getItem('penz');
				
		});	
	
		$("#megall").click(function() {
				lap = 6;
			var button = document.getElementById("megall");
				button.style.visibility = 'hidden';
			
			  button = document.getElementById("RandomGenerate");
				button.style.visibility = 'hidden';
			
			  bankLapok();
			  button = document.getElementById("kiirat");
				button.style.visibility = 'visible';

			
					penzJatekos = localStorage.getItem('penz');
			
				  if(eredmenyBank > 21) {
						  penzJatekos = parseInt(penzJatekos) + tet;
								document.getElementById("nyertes").innerHTML = "Jatekos nyert!";
					}
					else if(eredmeny > eredmenyBank) {
							penzJatekos = parseInt(penzJatekos) + tet;
							document.getElementById("nyertes").innerHTML = "Jatekos nyert!"
					}
					else {
							penzJatekos = parseInt(penzJatekos) - tet;
						document.getElementById("nyertes").innerHTML = "Jatekos veszitett!"
					}
					localStorage.setItem('penz',penzJatekos);
					document.getElementById("penz").innerHTML = penzJatekos;
		});	
	
	betolt();
	ujkor();

	nehezseg = penzJatekos = localStorage.getItem('nehez');

	if(nehezseg == "1")	{	
		 tet = 10;
	}
	else if(nehezseg == "2"){
		 tet = 20;
	}
	else{
		 tet = 50;
	}
	penzJatekos = localStorage.getItem('penz');
	document.getElementById("penz").innerHTML = penzJatekos;	
});


function bankLapok() {
	
	while(eredmenyBank < 18) {
		var szam = Math.floor((Math.random()*8)+0);
		var szin = Math.floor((Math.random()*4)+0);


		while(!(kartya[szin][szam] == 0)) {
				var szam = Math.floor((Math.random()*8)+0);
				var szin = Math.floor((Math.random()*4)+0);
		}

		switch (szam) {
			case 0: eredmenyBank = eredmenyBank + 11;
				break;
			case 1: eredmenyBank = eredmenyBank + 4;
				break;
			case 2: eredmenyBank = eredmenyBank + 3;
				break;
			case 3: eredmenyBank = eredmenyBank + 2;
				break;
			case 4: eredmenyBank = eredmenyBank + 10;
				break;
			case 5: eredmenyBank = eredmenyBank + 9;
				break;
			case 6: eredmenyBank = eredmenyBank + 8;
				break;
			case 7: eredmenyBank = eredmenyBank + 7;
				break;
		}

		kartya[szin][szam] = 1;
		lap = lap + 1;
		var kep = "layer"+lap;
		var img = document.getElementById(kep);
		img.src = lapok[szin][szam];
		img.style.visibility = 'visible';
		img.style.left = '185px';
	}
		document.getElementById("bank").innerHTML = eredmenyBank;
}

function ment() {
	  nev = $("#nev").val();
	  email = $("#email").val();
	  kor = $("#kor").val();
	  var rate_value;

	  if (document.getElementById('r1').checked) {
		  rate_value = document.getElementById('r1').value;
	  } 
	  if (document.getElementById('r2').checked) {
		  rate_value = document.getElementById('r2').value;
	  } 
	  if (document.getElementById('r3').checked) {
		  rate_value = document.getElementById('r3').value;
	  }
	  
	  if (window.localStorage) {
		  localStorage.setItem('nev',nev);
	    localStorage.setItem('email',email);
		  localStorage.setItem('kor',kor);
		  localStorage.setItem('nehez',rate_value);
		  alert("Adatok elmentve");
	  }
}
var tet=1;
var lapok = new Array(1);
var kartya = new Array(1);
		  for (var i = 0; i < 4; i++) {
			kartya[i] = new Array(9);
			lapok[i] = new Array(9);
}

function ujkor() {

	for(var i = 0; i < 4; i++) {
			for(var j = 0; j < 9; j++){
				kartya[i][j] = 0;	
			}
	}
}
	

		lapok[0][0] = 'Kartyak/makdiszno.png';
		lapok[0][1] = 'Kartyak/makcsiko.png';
		lapok[0][2] = 'Kartyak/makfelso.png';
		lapok[0][3] = 'Kartyak/makalso.png';
		lapok[0][4] = 'Kartyak/maktiz.png';
		lapok[0][5] = 'Kartyak/makkilenc.png';
		lapok[0][6] = 'Kartyak/maknyolc.png';
		lapok[0][7] = 'Kartyak/makhet.png';
		lapok[1][0] = 'Kartyak/pirosdisz.png';
		lapok[1][1] = 'Kartyak/piroscsiko.png';
		lapok[1][2] = 'Kartyak/pirosfelso.png';
		lapok[1][3] = 'Kartyak/pirosalso.png';
		lapok[1][4] = 'Kartyak/pirostiz.png';
		lapok[1][5] = 'Kartyak/piroskilenc.png';
		lapok[1][6] = 'Kartyak/pirosnyolc.png';
		lapok[1][7] = 'Kartyak/piroshet.png';
		lapok[2][0] = 'Kartyak/tokdiszno.png';
		lapok[2][1] = 'Kartyak/tokcsiko.png';
		lapok[2][2] = 'Kartyak/tokfelso.png';
		lapok[2][3] = 'Kartyak/tokalso.png';
		lapok[2][4] = 'Kartyak/toktiz.png';
		lapok[2][5] = 'Kartyak/tokkilenc.png';
		lapok[2][6] = 'Kartyak/toknyolc.png';
		lapok[2][7] = 'Kartyak/tokhet.png';
		lapok[3][0] = 'Kartyak/zolddiszno.png';
		lapok[3][1] = 'Kartyak/zoldcsiko.png';
		lapok[3][2] = 'Kartyak/zoldfelso.png';
		lapok[3][3] = 'Kartyak/zoldalso.png';
		lapok[3][4] = 'Kartyak/zoldtiz.png';
		lapok[3][5] = 'Kartyak/zoldkilenc.png';
		lapok[3][6] = 'Kartyak/zoldnyolc.png';
		lapok[3][7] = 'Kartyak/zoldhet.png';

var lap = 0;
var eredmeny = 0;
var eredmenyBank =0;
var penzJatekos = 100;


function randomGenerator() {
	
	// Megvan a 4x12 tömb evvel ellenőrzöm h kiosztottam e már a lapot.

	
	var szam = Math.floor((Math.random()*8)+0);
	var szin = Math.floor((Math.random()*4)+0);
		
	
	while(!(kartya[szin][szam] == 0)) {
			var szam = Math.floor((Math.random()*8)+0);
			var szin = Math.floor((Math.random()*4)+0);
	}
	
	switch (szam) {
		case 0: eredmeny = eredmeny + 11;
			break;
		case 1: eredmeny = eredmeny + 4;
			break;
		case 2: eredmeny = eredmeny + 3;
			break;
		case 3: eredmeny = eredmeny + 2;
			break;
		case 4: eredmeny = eredmeny + 10;
			break;
		case 5: eredmeny = eredmeny + 9;
			break;
		case 6: eredmeny = eredmeny + 8;
			break;
		case 7: eredmeny = eredmeny + 7;
			break;
	}

//	console.log(szin, szam);
	
	kartya[szin][szam] = 1;
	lap = lap + 1;
	var kep = "layer"+lap;
	var img = document.getElementById(kep);
	img.src = lapok[szin][szam];
	img.style.visibility = 'visible';

	
	if(eredmeny > 15) {
		var button = document.getElementById("megall");
				button.style.visibility = 'visible';
/*		var button = document.getElementById("kiirat");
				button.style.visibility = 'hidden';*/
		
	}
	
	if(eredmeny > 21) {
		var button = document.getElementById("kiirat");
				button.style.visibility = 'hidden';
				ujkor();	
				alert("Tullepted a 21-t \n A pontod :" + eredmeny);
				penzJatekos = localStorage.getItem('penz');
				penzJatekos = penzJatekos - tet;
				localStorage.setItem('penz',penzJatekos);
				document.getElementById("nyertes").innerHTML = "Jatekos veszitett!"
				location.reload();
	}	
	
	document.getElementById("jatekos").innerHTML = eredmeny;

	/*$("#aze").value = Math.floor((Math.random()*13)+1);
	$("#eze").value = Math.floor((Math.random()*13)+1);*/
	
}

function betolt() {
			document.getElementById("az").innerHTML = localStorage.getItem('nev');
}
