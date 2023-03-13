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
			document.documentElement.style.setProperty('--firstY',-power*0.2 + "vw");
			document.documentElement.style.setProperty('--firstX',-power*0.2 + "vw");

			document.documentElement.style.setProperty('--secondY',-power*0.3 + "vw");
			document.documentElement.style.setProperty('--secondX',-power*0.3 + "vw");

			document.documentElement.style.setProperty('--thirdY',-power*0.35  + "vw");
			document.documentElement.style.setProperty('--thirdX',-power*0.4 + "vw");

			document.documentElement.style.setProperty('--forthY',-power*0.3 + "vw");
			document.documentElement.style.setProperty('--forthX',-power*0.5 + "vw");

			document.documentElement.style.setProperty('--fifthY',-power*0.2 + "vw");
			document.documentElement.style.setProperty('--fifthX',-power*0.6 + "vw");

			document.documentElement.style.setProperty('--finalY',-power*0 + "vw");
			document.documentElement.style.setProperty('--finalX',-power*0.8 + "vw");

			document.querySelector('#principal').style='display: flex; align-items: center; justify-content: space-between; transform: translateY(100px); width: 50px; height: 50px; background-color: #FC7F3D; border-radius: 50px; animation: pelota 2.5s linear 1;';
            clearInterval(time);
			setTimeout(function(){
				document.querySelector('#principal').style='display: flex; align-items: center; justify-content: space-between; transform: translateY(100px); width: 50px; height: 50px; background-color: #FC7F3D; border-radius: 50px;';
			},2500);
			
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