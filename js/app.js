(function()
{

//Modules
var app = angular.module('store',[]); //module for example 0
var app = angular.module('gemStore',[]); //module for gem store

//Objects
var gem = 
{
	name: 'Dodecahedron',
	price: 2.95,
	description: '. . .',
}

//Controllers
app.controller('StoreController', function()
{
	this.product = gem;
});


});

