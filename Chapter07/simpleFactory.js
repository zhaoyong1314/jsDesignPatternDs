/**
 * Created by Administrator on 2015-2-13.
 */
require(["../Introdduction/Interface.js."]);
var BicycleShop = function(){};
BicycleShop.prototype ={
  sellBicycle:function(model){
    var bicycle;
      switch (model){
          case 'Speedster':
              bicycle = new Speedster();
              break;
          case 'Lowrider':
              bicycle = new Lowrider();
              break;
          case 'flatlander':
              bicycle =new Flatlander();
              break;
      }
      var bicycleInterface = new Interface('Bicycle',['assemble','wash','ride','repair']);
      Interface.ensureImplements(bicycle,bicycleInterface);
      return bicycle;
  }
};


function Speedster(){}
Speedster.prototype = {
    //assemble:function(){
    //    console.log("Speedster assemble...");
    //},
    wash:function(){
        console.log("Speedster wash...");
    },
    ride:function(){
        console.log("Speedster repair...");
    }
};

function Lowrider(){}
Lowrider.prototype = {
    assemble:function(){
        console.log("Lowrider assemble...");
    },
    wash:function(){
        console.log("Lowrider wash...");
    },
    ride:function(){
        console.log("Lowrider repair...");
    }
};

function Flatlander(){}
Flatlander.prototype={
    assemble:function(){
        console.log("Flatlander assemble...");
    },
    wash:function(){
        console.log("Flatlander wash...");
    },
    ride:function(){
        console.log("Flatlander repair...");
    }
};



