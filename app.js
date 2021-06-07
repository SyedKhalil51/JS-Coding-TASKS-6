// 1) Problem Name: IntroToArrays

var games = ["Baseball"," Eight ball"," Pocket Billiards"," Carom Billiards","Golf "];
console.log(games[0]);
console.log(games[1]);
console.log(games[2]);
console.log(games[3]);
console.log(games[4]);

// 2) Problem Name: ArrayTraversal

var names = ['Ali','Khubaib','Khalil','Faheem','Fareed'];
names.forEach(function(value,index)
{
    console.log(index,value);
});

// 3) Problem Name: ArrayAccess
//Printing Of First Member 
 var colors = ['red', 'yellow', 'green', 'blue'];
 var first_Item = colors[0] ;
 document.write(first_Item +"<br>");
 var last_Item = colors[colors.length - 1];
 document.write(last_Item +"<br>");

 //4) Print The Lenght and Size Of Array
 var lenght = colors.length;
 document.write("The Lenght of Color Array is "+ lenght +"<br>");

 //size of Array

 //var size = colors.size();
 //document.write("The size of Color Array is "+ size +"<br>");
  
 //5) Problem Name: toString
    var to_String = colors.toString();
    console.log(to_String);

    // 6) i - Push Method to add POLO at the end of the Array

        var cricket_Teams = ['Pakistan','India','Srilanka','Bangladesh'];
        var push_Value = cricket_Teams.push("England");
        document.write(cricket_Teams +"<br>");

     // 6) ii - unshift Method to add POLO at the end of the Array

        
     var cricket_Teams = ['Pakistan','India','Srilanka','Bangladesh'];
     var push_Value = cricket_Teams.unshift("Australia");
     document.write(cricket_Teams +"<br>");

     // 6) iii - Remove a member of the same array from the end 
     
     cricket_Teams.pop();
     document.write(cricket_Teams +"<br>");

     // 6) iii -  Remove a member of the same array from the beginning

     
     cricket_Teams.shift();
     document.write(cricket_Teams +"<br>");

     // 7) Problem Name: Splice

        var cricket_Players = ['Kevin Pietersen','Alexander Fleeming','Ricky Ponting','Joe Root'];
        cricket_Players.splice(2,0,"Sachin Tendulkar","Inzamam Ul haq");
        document.write(cricket_Players);  

