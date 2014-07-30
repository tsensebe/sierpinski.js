# Sierpinski triangle generator
Using recursion to build Sierpinski triangle.

http://en.wikipedia.org/wiki/Sierpinski_triangle

## API

> var sierpinski = sierpinski(x1, y1, x2, y2, x3, y3);

Return Sierpinski triangle generator with initial triangle with vertices (x1,y1), (x2,y2), (x3,y3).

> var triangles = sierpinski.generate(n);

Return triangles list after n recursion.

> sierpinski.changeInitalShape(newX1, newY1, newX2, newY2, newX3, newY3);

Change initial triangle vertices.

> sierpinski.draw(n, canvasName)

Draw Sierpinski triangle after n recursions on canvas. 

> sierpinski.classicModeColor(color)

Change color of drawing.

> sierpinski.enablePyschedelicMode

Draw with psychedelic colors.

> sierpinski.enableClassicMode

Draw with defined color (default black).

