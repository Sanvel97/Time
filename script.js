'use strict'


// console.log(9)


let cts = document.querySelector('.citys');
let gadgetner = document.querySelector('.gadgetner');
cts.onclick = function func(){
		gadgetner.classList.add('added')
		cts.style.opacity = 0;
	}




// Yerevani jamanak


let a = new Date(),
s = a.getSeconds(),
m = a.getMinutes(),
h = a.getHours();


let gadget = document.querySelector('.gadget');
gadget.addEventListener('mouseover', func2)
let h1 = document.querySelector('.paragrap'),
spn1 = document.querySelector('.spn1'),
spn2 = document.querySelector('.spn2'),
spn3 = document.querySelector('.spn3');



function func2(){  
	gadget.removeEventListener('mouseover', func2)
	h1.style.display = 'none';
	spn1.innerHTML = 'YVN' + h + ':';
	spn2.innerHTML = m + ':';
	spn3.innerHTML = s;
	let b = setInterval(func3, 1000)
	function func3(){
		s++;
	spn3.innerHTML = s ;
	if(s < 10){
		spn3.innerHTML = '0' + s;
	}
	if(s == 60){
		s = 0;
		m++;
	spn2.innerHTML = m + ':';
	}
	if(m < 10){
		spn2.innerHTML = '0' + m + ':'
	}
	if(m == 59){
		m = 0;
		h++;
		spn1.innerHTML = 'YVN' + h + ':';
	}
	if(h < 10){
		spn1.innerHTML = 'YVN0' + h + ':'
	}
	if(h == 24){
		h = 0;
	}
}
}







// Moscow time



let a1 = new Date(),
s1 = a1.getSeconds(),
m1 = a1.getMinutes(),
hr1 = a1.getHours() -1;


let gadget2 = document.querySelector('.gadget2');
gadget2.addEventListener('mouseover', func4)
let h2 = document.querySelector('.paragrap1'),
spn4 = document.querySelector('.spn4'),
spn5 = document.querySelector('.spn5'),
spn6 = document.querySelector('.spn6');


function func4(){  
	gadget2.removeEventListener('mouseover', func4)
	h2.style.display = 'none';
	spn4.innerHTML = 'MSC' + hr1 + ':';
	spn5.innerHTML = m1 + ':';
	spn6.innerHTML = s1;
	setInterval(func5, 1000)
	function func5(){
		s1++;
	spn6.innerHTML = s1 ;
	if(s1 < 10){
		spn6.innerHTML = '0' + s1;
	}
	if(s1 == 60){
		s1 = 0;
		m1++;
	spn5.innerHTML = m1 + ':';
	}
	if(m1 < 10){
		spn5.innerHTML = '0' + m1 + ':';
	}
	if(m1 == 60){
		m1 = 0;
		hr1++;
		spn4.innerHTML = 'MSC' + hr1 + ':';
	}
	if(hr1 < 10){
		spn4.innerHTML = 'MSC0' + hr1 + ':';
	}
	if(hr1 == 24){
		hr1 = 0;
	}
}
}





// London time




let a2 = new Date(),
s2 = a2.getSeconds(),
m2 = a2.getMinutes(),
hr2 = a2.getHours() -3;


let gadget3 = document.querySelector('.gadget3');
gadget3.addEventListener('mouseover', func6)
let h3 = document.querySelector('.paragrap2'),
spn7 = document.querySelector('.spn7'),
spn8 = document.querySelector('.spn8'),
spn9 = document.querySelector('.spn9');


function func6(){  
	gadget3.removeEventListener('mouseover', func6)
	h3.style.display = 'none';
	spn7.innerHTML = 'LND' + hr2 + ':';
	spn8.innerHTML = m2 + ':';
	spn9.innerHTML = s2;
	setInterval(func7, 1000)
	function func7(){
		s2++;
	spn9.innerHTML = s2 ;
	if(s2 < 10){
		spn9.innerHTML = '0' + s2;
	}
	if(s2 == 60){
		s2 = 0;
		m2++;
	spn8.innerHTML = m2 + ':';
	}
	if(m2 < 10){
		spn8.innerHTML = '0' + m2 + ':';
	}
	if(m2 == 60){
		m2 = 0;
		hr2++;
		spn7.innerHTML = 'LND' + hr2 + ':';
	}
	if(hr2 < 10){
		spn7.innerHTML = 'LND0' + hr2 + ':';
	}
	if(hr2 == 24){
		hr2 = 0;
	}
}
}




// New York time



let a3 = new Date(),
s3 = a3.getSeconds(),
m3 = a3.getMinutes(),
hr3 = a3.getHours() -8;


let gadget4 = document.querySelector('.gadget4');
gadget4.addEventListener('mouseover', func8)
let h4 = document.querySelector('.paragrap3'),
spn10 = document.querySelector('.spn10'),
spn11 = document.querySelector('.spn11'),
spn12 = document.querySelector('.spn12');


function func8(){  
	gadget4.removeEventListener('mouseover', func8)
	h4.style.display = 'none';
	spn10.innerHTML = 'NY' + hr3 + ':';
	spn11.innerHTML = m3 + ':';
	spn12.innerHTML = s3;
	setInterval(func9, 1000)
	function func9(){
		s3++;
	spn12.innerHTML = s3 ;
	if(s3 < 10){
		spn12.innerHTML = '0' + s3;
	}
	if(s3 == 60){
		s3 = 0;
		m3++;
	spn11.innerHTML = m3 + ':';
	}
	if(m3 < 10){
		spn11.innerHTML = '0' + m3 + ':';
	}
	if(m3 == 60){
		m3 = 0;
		hr3++;
		spn10.innerHTML = 'NY' + hr3 + ':';
	}
	if(hr3 < 10){
		spn10.innerHTML = 'NY0' + hr3 + ':';
	}
	if(h3 == 24){
		hr3 = 0;
	}
}
}





// Tokyo Time




let a4 = new Date(),
s4 = a4.getSeconds(),
m4 = a4.getMinutes(),
hr4 = a4.getHours() -19;


let gadget5 = document.querySelector('.gadget5');
gadget5.addEventListener('mouseover', func10)
let h5 = document.querySelector('.paragrap4'),
spn13 = document.querySelector('.spn13'),
spn14 = document.querySelector('.spn14'),
spn15 = document.querySelector('.spn15');


function func10(){  
	gadget5.removeEventListener('mouseover', func10)
	h5.style.display = 'none';
	spn13.innerHTML = 'TKY' + hr4 + ':';
	spn14.innerHTML = m4 + ':';
	spn15.innerHTML = s4;
	setInterval(func11, 1000)
	function func11(){
		s4++;
	spn15.innerHTML = s4 ;
	if(s4 < 10){
		spn15.innerHTML = '0' + s4;
	}
	if(s4 == 60){
		s4 = 0;
		m4++;
	spn14.innerHTML = m4 + ':';
	}
	if(m4 < 10){
		spn14.innerHTML = '0' + m4 + ':';
	}
	if(m4 == 60){
		m4 = 0;
		hr4++;
		spn13.innerHTML = 'TKY' + hr4 + ':';
	}
	if(hr4 < 10){
		spn13.innerHTML = 'TKY0' + hr4 + ':';
	}
	if(h4 == 24){
		hr4 = 0;
	}
}
}





// Dubai time



let a5 = new Date(),
s5 = a5.getSeconds(),
m5 = a5.getMinutes(),
hr5 = a5.getHours();


let gadget6 = document.querySelector('.gadget6');
gadget6.addEventListener('mouseover', func12)
let h6 = document.querySelector('.paragrap5'),
spn16 = document.querySelector('.spn16'),
spn17 = document.querySelector('.spn17'),
spn18 = document.querySelector('.spn18');


function func12(){  
	gadget6.removeEventListener('mouseover', func12)
	h6.style.display = 'none';
	spn16.innerHTML = 'UAE' + hr5 + ':';
	spn17.innerHTML = m5 + ':';
	spn18.innerHTML = s5;
	setInterval(func13, 1000)
	function func13(){
		s5++;
	spn18.innerHTML = s5 ;
	if(s5 < 10){
		spn18.innerHTML = '0' + s5;
	}
	if(s5 == 60){
		s5 = 0;
		m5++;
	spn17.innerHTML = m5 + ':';
	}
	if(m5 < 10){
		spn17.innerHTML = '0' + m5 + ':';
	}
	if(m5 == 60){
		m5 = 0;
		hr5++;
		spn16.innerHTML = 'UAE' + hr5 + ':';
	}
	if(hr5 < 10){
		spn16.innerHTML = 'UAE0' + hr5 + ':';
	}
	if(h5 == 24){
		hr5 = 0;
	}
}
}





// slaqi function


let slaq = document.querySelector('.slaq'),
deg = (s/60) * 422;
setInterval(funcslaq, 1000)
function funcslaq(){
	deg += 6;
	slaq.style.transform = 'rotate(' + (deg) + 'deg)';	
}



