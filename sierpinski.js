function sierpinski(x1, y1, x2, y2, x3, y3) {
	
	var sierpinski = {};
	
	//  ______             _            
	// |  ____|           (_)           
	// | |__   _ __   __ _ _ _ __   ___ 
	// |  __| | '_ \ / _` | | '_ \ / _ \
	// | |____| | | | (_| | | | | |  __/
	// |______|_| |_|\__, |_|_| |_|\___|
	//                __/ |             
	//               |___/              
	var initialShape = shapeFactory(x1,y1,x2,y2,x3,y3);

	function shapeFactory(x1, y1, x2, y2, x3, y3) {
		return [{"x":x1,"y":y1},{"x":x2,"y":y2},{"x":x3,"y":y3}];
	};
	
	function getSons(father) {
		var son1 = shapeFactory( father[0].x, father[0].y, 
								(father[0].x + father[1].x)/2, (father[0].y + father[1].y)/2, 
								(father[0].x + father[2].x)/2, (father[0].y + father[2].y)/2);
									
		var son2 = shapeFactory((father[1].x + father[0].x)/2, (father[1].y + father[0].y)/2, 
								 father[1].x, father[1].y, 
								(father[1].x + father[2].x)/2, (father[1].y + father[2].y)/2);
													
		var son3 = shapeFactory((father[2].x + father[0].x)/2,(father[2].y + father[0].y)/2,
								(father[2].x + father[1].x)/2,(father[2].y + father[1].y)/2,
								 father[2].x, father[2].y);
		return [son1, son2, son3];
	};

	function nextGeneration(fathers) {
		var result = new Array();
		for(var i=0; i<fathers.length; i++)
			result = result.concat(getSons(fathers[i]));
		return result;
	};

	sierpinski.changeInitalShape = function(newX1, newY1, newX2, newY2, newX3, newY3) {
		initialShape = shapeFactory(newX1, newY1, newX2, newY2, newX3, newY3);
	};
	
	sierpinski.generate = function(lvl) {
		var currentLvl = 0;
		var result = [initialShape];
		while(currentLvl < lvl) {
			result = nextGeneration(result);
			currentLvl++;
		}
		return result;
	};
	
	//  _____                          
	// / ____|                         
	// | |     __ _ _ ____   ____ _ ___ 
	// | |    / _` | '_ \ \ / / _` / __|
	// | |___| (_| | | | \ V / (_| \__ \
	//  \_____\__,_|_| |_|\_/ \__,_|___/
	var colorMode = "classic";
	var classicColor = "black";
	var psychoColors = ['#ED2B49', '#FF5633', '#F79D1F', '#C2CC2F', '#A1D6AA'];

	function drawShape(ctx, shape) {
		ctx.fillStyle = getColor();
	    ctx.beginPath();
	    ctx.moveTo(shape[0].x,shape[0].y);
	    ctx.lineTo(shape[1].x,shape[1].y);
	    ctx.lineTo(shape[2].x,shape[2].y);
	    ctx.fill();
	};
	
	function getColor() {
		if(colorMode == "psycho")
			return psychoColors[Math.floor((Math.random() * psychoColors.length) + 1)];
		return classicColor;
	}
	
	sierpinski.draw = function (lvl, canvas) {
		var ctx = document.getElementById(canvas).getContext("2d");
		ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height);
		var shapes = sierpinski.generate(lvl);
		for(var i=0; i<shapes.length; i++)
			drawShape(ctx,shapes[i]);
	};
	
	sierpinski.classicModeColor = function(newColor) {
		classicColor = newColor;
	};
	
	sierpinski.enablePyschedelicMode = function() {
		colorMode = "psycho";
	};

	sierpinski.enableClassicMode = function() {
		colorMode = "classic";
	};
	
	return sierpinski;
};


