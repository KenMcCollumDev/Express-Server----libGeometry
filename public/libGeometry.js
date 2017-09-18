var libGeometry = {

volumeSphere: function(radius)
    {
	return (4 * Math.PI * Math.pow(radius, 3) / 3);
},

volumeCone: function(radius, height)
    {
	return  Math.PI * height * radius / 3;
},

volumeCylinder: function(radius, height)
	{
	return Math.pow(radius, 2) * height * Math.PI;
},

volumeRectangle: function(length, width, height)
    {
    return length * width * height;
},

volumeRectangularPrism: function(length, width, height){
return length * width * height / 2;
}

} //closes libGeometry
