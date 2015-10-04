    window.onload=function()
    {
       //var boundaryOne = document.getElementById("boundary1");
       
       var status;
       
       var boundary = document.getElementsByClassName("boundary");
       
       var theEnd = document.getElementById("end");
       
       var restart = document.getElementById("start");
       
    /*------------------------------------------------------------------------
    
        The section above gathers eithe a class or id. the $ is not working for 
        me. 
    
    --------------------------------------------------------------------------*/ 
       (theEnd).onmouseover = function() {endWinner();};
       
       //(boundaryOne).onmouseover = function() {singleMouseOver();};
       
       (restart).onclick= function() {reStartGame();};
       
       
       for (var counter = 0; counter < boundary.length; counter++) 
		    {
		        (boundary[counter]).onmouseover= function () {multuMouseOver();};
		    }
		    
	    
		    
	    
    /*------------------------------------------------------------------------
    
        The section above invokes the functions/ methods below onto the 
        variables. 
    
    --------------------------------------------------------------------------*/ 
		
	/*	function singleMouseOver() {
				//document.getElementById
				(boundaryOne).style.backgroundColor = "#ff8888";
			}*/
			
		function multuMouseOver()
		{
		    status= "0";
		    for (var counter = 0; counter < boundary.length; counter++) 
		    {
		        boundary[counter].style.backgroundColor = "#ff8888";
		    }
		       
		}
		
		function endWinner()
		{
		    if ( status== "0")
		    {
		      document.getElementById("status").textContent="You lose, :[";
		    }
		    else
		    
		    {
		      document.getElementById("status").textContent="You Win, :]";
		    }
		        
		}
		
		function reStartGame()
		{
		  
		    location.reload();
		}
    };