function getAllSubstrings(str) {
    var i, j, result = [];
  
    for (i = 0; i < str.length; i++) {
        for (j = i + 1; j < str.length + 1; j++) {
            result.push(str.slice(i, j));
        }
    }
    return result;
  }
  
  function palindrome(str) {
    var re = /[\W_]/g;
    var lowRegStr = str.toLowerCase().replace(re, '');
    var reverseStr = lowRegStr.split('').reverse().join(''); 
    return reverseStr === lowRegStr;
  }
  
  var theString = 'sonnokk';
  var allSubstring = getAllSubstrings(theString);
  var longestPalindromeString = "";

  for (var key in allSubstring) {
    currentString = allSubstring[key]

    if(palindrome(currentString)){
      if(currentString.length>longestPalindromeString.length)
      {
        longestPalindromeString = currentString
      }
    }
  }

  console.log("The longest palindrome substring of string " + theString+" is " + longestPalindromeString)

