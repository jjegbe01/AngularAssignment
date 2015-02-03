(function(){

//Modules
var app = angular.module('store',[]); //module for example 0
var app = angular.module('gemStore',[]); //module for gem store

//Objects
  var gems = [
    { name: 'Azurite', price: 2.95 },
    { name: 'Bloodstone', price: 5.95 },
    { name: 'Zircon', price: 3.95 }
  ];
//Controllers
  app.controller('StoreController', function(){
this.products = gems;
  });



})();