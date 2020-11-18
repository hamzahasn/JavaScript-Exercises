// Your code here:
function milk ()
{
    var x = 98;
    for (var i=99; i > 0; i--)
{
    if (i>1 ) { 
    console.log (i + " bottles of milk on the wall, " + i + " bottles of milk. Take one down and pass it around, " + 
    x +  " bottle of milk on the wall.");
    x--;
}
else
 { 
    console.log (i + " bottles of milk on the wall, " + i + " bottles of milk. Take one down and pass it around, " + 
    x +  " bottle of milk on the wall.No more bottles of milk on the wall, no more bottles of milk. Go to the store and buy some more, 99 bottles of milk on the wall.");
 }

}

}
milk();