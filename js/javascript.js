function theme() {
	if (document.getElementById("body").className == "bodylight") {
		document.getElementById("body").className = "bodydark";
		document.getElementById("header").className = "header headerdark";
		document.getElementById("menu").className = "menu menudark";
		document.getElementById("submenu").className = "submenu submenudark";
		document.getElementById("redes").className = "redes redesdark";
		document.getElementById("main").className = "main maindark";
		document.getElementById("aa1").className = "article a1 articledark";
		document.getElementById("aa2").className = "article a2 articledark";
	} else {
		document.getElementById("body").className = "bodylight";
		document.getElementById("header").className = "header headerlight";
		document.getElementById("menu").className = "menu menulight";
		document.getElementById("submenu").className = "submenu submenulight";
		document.getElementById("redes").className = "redes redeslight";
		document.getElementById("main").className = "main mainlight";
		document.getElementById("aa1").className = "article a1 articlelight";
		document.getElementById("aa2").className = "article a2 articlelight";
	}
}

async function login(){
	let cuentas = [];
	let correcto = false;
	let user = document.querySelector('#user').value;
	let password = document.querySelector('#password').value;
	let usuario;
	

	await fetch('json/usuarios.json').then(Response => Response.json()).then(cuenta => cuentas = cuenta);


	if(document.querySelector('#password').value==''){
		usuario = JSON.parse(localStorage.getItem('usuario'));
		let datos= usuario.split('/');
		user = datos[0];
		password = datos[1];
		correcto = true;
		console.log("Logeando automaticamente");
	}
	

	for(var i = 0; i < cuentas.length; i++){
		if (user==cuentas[i].user && password==cuentas[i].password){
			usuario = user + "/" +password+'/'+i;
			window.location.href= 'index.html';
			correcto = true;
			localStorage.setItem('usuario',JSON.stringify(usuario));
			//localStorage.removeItem('usuario');
		}
	}
	if(!correcto){
		document.querySelector('#uincorrecto').innerHTML = "Usuario o contraseña incorrectos";
	}

}

async function autolog(){
	if(localStorage.getItem('usuario')!=null){
		let cuentas = [];
		usuario = JSON.parse(localStorage.getItem('usuario'));
		let datos= usuario.split('/');
		await fetch('json/usuarios.json').then(Response => Response.json()).then(cuenta => cuentas = cuenta);
		if (datos[0]==cuentas[datos[2]].user && datos[1]==cuentas[datos[2]].password){
			window.location.href = 'index.html';
		} else{
			localStorage.removeItem('usuario');
		}
	}

}

async function comprobadorLogin(){
	if(localStorage.getItem('usuario')!=null){
		let cuentas = [];
		usuario = JSON.parse(localStorage.getItem('usuario'));
		let datos= usuario.split('/');
		await fetch('json/usuarios.json').then(Response => Response.json()).then(cuenta => cuentas = cuenta);
		if (datos[0]!=cuentas[datos[2]].user || datos[1]!=cuentas[datos[2]].password){
			window.location.href = 'login.html';
			localStorage.removeItem('usuario');
		} 
	}else{
		window.location.href = 'login.html';
	}
}


async function register(){
	alert("añadido");
	let user = document.querySelector('#user').value;
	let password = document.querySelector('#password').value;
	let mail = document.querySelector('#mail').value;
	let cuentass = [];
	let usuario;
	

	await fetch('json/usuarios.json').then(Response => Response.json()).then(cuenta => cuentass = cuenta);

	let id = parseInt(cuentass[cuentass.length-1].id)+1;

	let cuentas = {
		"id": id,
		"user": user,
		"password": password,
		"mail": mail
	}
	
}