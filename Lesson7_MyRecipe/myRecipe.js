/*
Program Name: Recipe Display Application

Author:Hunter Vaughan 

Date:4.3/18 

Filename: myRecipe.j
*/

/* global $ */


    //displays the next element after the current target

        function display(event) {
            
            $(event.currentTarget) .next().fadeIn("fast");
            
    }//end of display

    //attach event listener to h3 elements to invoke display function when clicked

            $("h3").click(display);
            
            
      //displays and animates the next element after the current target
                
            function display2(event) {
                
            $(event.currentTarget).next().animate( {height: '300px'}, "fast");
                
                
}//end of display2

//attach event listener to h3 elements to invoke display function when clicked

$("h3").click(display2);



//example 2 

//change the background color h3 element when mouse hovers over it

        $("ul").hover(function(){
            
        $(this).css("background-color", "red");
        
        }, function(){
            
        $(this).css("background-color", "blue");
});
 $("h3").hover(function(){
            
        $(this).css("background-color", "green");
        
        }, function(){
            
        $(this).css("background-color", "blue");
});

//example 3 



//hover() will trigger display2 method each time mouse hovers over header
        
        $("h3").hover(display2);
