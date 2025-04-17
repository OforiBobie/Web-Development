var choice=prompt("Welcome to the Perimeter Calculator.\n Please Enter your choice.\n1.Perimeter of a Rectangle.\n2.Perimeter of a triangle.\n3.Perimeter of a circle.\n4.Perimeter of a Square")
if (choice=="1"){
    var l=prompt("Enter the lenght:")
    var b=prompt("Enter the breadth:")
    var Perimeter=Number(l)+Number(l)+Number(b)+Number(b)
    alert("The Perimeter of the rectangle is:"+ Perimeter)
}
if (choice=="2"){
    var a=prompt("Enter the left side:")//a means the adjacent
    var b=prompt("Enter the base:")// b means the verically opposite
    var c=prompt("Enter the right side")//c means the hypotenose
    var Perimeter=Number(a)+Number(b)+Number(c)
    alert("The Perimeter of the triangle is:"+ Perimeter)
}
if(choice=="3"){
    var r=prompt("Enter the radius:")
    var Perimeter=2*22/7*Number(r)
    alert("The Perimeter of the circle is:"+ Perimeter)
}
if (choice=="4"){
    var l=prompt("Enter the length:")
    var Perimeter=Number(l*4)
    alert("The Perimeter of the square is:"+ Perimeter)
}