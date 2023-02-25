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