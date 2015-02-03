(function(){

//Modules
var app = angular.module('store',[]); //module for example 0
var app = angular.module('gemStore',[]); //module for gem store

//Objects
 var gem = { name: 'Azurite', price: 2.95 };

//Controllers
app.controller('StoreController', function()
                 {
                   this.product = gem;
                 });



})();