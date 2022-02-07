$(document).ready(function () {
  console.log("doc is ready");
 
  let revName; 


  $
    ("#btnGetFacts").click(function (){

      // handle it if input is blank

      let userName = $("#userName").val();
      let coolFacts = generateCoolNameFacts(userName); 

      console.log('you clicked the button');
      console.log('from ln 12', generateCoolNameFacts(userName));
      
      $("#coolNameFactsOutput").html(coolFacts);
  


    });


});

function generateCoolNameFacts(userName) {
  let coolFacts = ''; 
  
  coolFacts = nameLength(userName);
  coolFacts += " <br> " + nameStart(userName);
  coolFacts += "<h3> " + nameEnd(userName) + "</h3>";
  
  let howLong = userName.length;
  if (howLong <= 5) {
    return "Your spirit animal is a Lion! " + coolFacts;
  } else if (howLong = 6) {
    return "Your spirit animal is a Eagle! " + coolFacts;
  } else if (howLong = 7) { 
    return "Your spirit animal is a Frog! " + coolFacts;
  } else if (howLong >= 8) {
    return "Your spirit animal is a Shark! " + coolFacts;
    
  } 


  console.log("initialized the'm coolFacts variable: " + coolFacts); 

  return coolFacts;
}

function nameLength(name) {
  return "Your name is " + name.length + " letters long!"; 
}

function nameStart(name) {
  return "the first letter of your name is " + name[0]
}

function nameEnd(name) {
  
  let lastIndex = name.length - 1

  return "the last letter of your name is " + name[lastIndex]
}


     
