var mouseEvent = "empty";
var last_position_of_x, last_position_of_y;

color = "Red";
width_of_the_line = 2;

canvas.addEventListener("mousedown", my_mousedown);

function my_mousedown(e){
    color = document.getElementById("color").value;
    width_of_the_line = document.getElementById("width_of_the_line").value;
    radius = document.getElementById("radius").value;


}

canvas.addEventListener("mymousemove", my_mousemove);

function my_mousemove(e){

    var current_position_of_mouse_x = e.clientX - canvas.offsetLeft;
    var current_position_of_mouse_y = e.clientY - canvas.offsetTop;

    if(mouseEvent =="mousedown") 
    {
        console.log("Current position of x and y coordinates = ");
        console.log("x = "+ current_position_of_mouse_x + "y = "+ current_position_of_mouse_y);
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width_of_the_line ;
        ctx.arc(current_position_of_mouse_x,current_position_of_mouse_y,radius,0,2*Math.PI);
        ctx.stroke();
     }  
    }

    canvas.addEventListener("mouseup", my_mouseup);

    function my_mouseup(e){
        mouseEvent = "mouseup";
    }

    canvas.addEventListener("mouseleave", my_mouseleave);

    function my_mouseleave(e){
        mouseEvent = "mouseleave";
    }

    function clearArea()