
function start()
{
     var a =prompt("enter username");
     var b= prompt("enter description");
    
    var image1 = document.getElementById("pp");
     var url = prompt("change image",pp.src);   
     pp.src= url;
     var image2 = document.getElementById("ch");
     var url2 = prompt("change image",ch.style.backgroundImage);   
     ch.style.backgroundImage= url2;
     
     
  if (a!= null)
           {
            document.getElementById("na").innerHTML = a;
           }
if(b!=null)
           {
            document.getElementById("des").innerHTML = b;   
           }
                
        }
            

        function start2()
        {    var a= prompt("enter comment");            
            
            $("#feed").clone().prependTo($("#ulg"));
             $("#txt").text(a);
            
        }
                