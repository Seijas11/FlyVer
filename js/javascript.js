/* Modo oscuro-claro */

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

/* Fin del modo oscuro-claro */

/* Boton de lanzar */

var power=0;
    var time;
    var tirado=false;
    
    function start(){
		let finalPower;
        if(!tirado){
            time = setInterval(segundos, 10);
            tirado = true;
        } else {
            movimiento();
        }
        
    }

	function movimiento(){
		tirado = false;
            console.log(power);
			document.documentElement.style.setProperty('--midY',-power*0.2 + "vw");
			document.documentElement.style.setProperty('--midX',-power*0.3 + "vw");
			document.documentElement.style.setProperty('--finalY',-power*0.13 + "vw");
			document.documentElement.style.setProperty('--finalX',-power*0.7 + "vw");
            clearInterval(time);
            power=0;
	}

    function fixStart(){
		let finalPower;
        if(tirado){
            movimiento();
			
        }
    }
    
    function segundos(){
        power++;
        if (power > 100){
            power=0;
        }
        document.querySelector('#fuerza').value=power;
    }

/* Fin del boton de lanzar */