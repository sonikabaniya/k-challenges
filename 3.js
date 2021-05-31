// Initialize starting point for robot as (0, 0)
var x=y=0;

function distanceFromOrigin(command){

    for(i=0; i< command.length; i++){
        // if command is F change x coordinate by 1 unit
        if(command[i] == "F"){
            x+=1
        }
        // if command is rotate swap coordinate of x and y
        if(command[i] = "R"){
            let temp;
            temp = x;
            x = y;
            y = temp;
        }
    }

    //calculate distance by using distance formula i.e. root of sum of sq. of x coordinate and sq. of y coordinate

    return Math.sqrt(x*x + y*y)

}

function combine(str){
    const result = [];
    for(let i = 1; i < Math.pow(2, str.length) - 1; i++)
       result.push([...str].filter((_, pos) => (i >> pos) & 1).join(""));
   return result;
 }

  var theString = 'FFRFFFRR';
  var allSubstring = combine(theString);
  var longestdistance = 0;
  var longCommand = "";

  for (var key in allSubstring) {
    currentString = allSubstring[key]
    var distance = distanceFromOrigin(currentString)
      if(distance>longestdistance)
      {
        longestdistance = distance;
        longCommand = currentString
      }
    
  }

  console.log("The longest distance command is " + longCommand + " with distance " + longestdistance)
