//create Addtion
  function addNum (num1 , num2){
      var num1;
      var num2;
      let add = "The addition of the two numbers is " + (num1 + num2) + "<br>";
      return add;
    };
  document.getElementById("add").innerHTML = addNum(5,6);

//create multipilication
  function multiNum (num1 , num2){
        var num1;
        var num2;
        let multi = "The multipilication of the two numbers is " + (num1 * num2) + "<br>";
        return multi;
      };
  document.getElementById("multi").innerHTML = multiNum(4,10);

//create subtraction
  function subtractNum (num1 , num2){
            var num1;
            var num2;
            let multi = "The subtraction of the two numbers is " + (num1 - num2) + "<br>";
            return multi;
          };
    document.getElementById("sub").innerHTML = subtractNum(50,20);

//create division
  function divideNum (num1 , num2){
                var num1;
                var num2;
                let div = "The division of the two numbers is " + (num1 / num2) + "<br>";
                return div;
              };
    document.getElementById("div").innerHTML = divideNum(20,5);
