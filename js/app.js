(function(){

//Modules
var app = angular.module('store',[]); //module for example 0
var app = angular.module('gemStore',[]); //module for gem store

//Objects
  var gems = [
    { name: 'Azurite', price: 110.50 },
    { name: 'Bloodstone', price: 22.90 },
    { name: 'Zircon', price: 1100 }
  ];
//Controllers
  app.controller('StoreController', function(){
this.products = gems;
  });



})();