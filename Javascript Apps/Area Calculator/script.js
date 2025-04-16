var choice=prompt("Welcome to the Area Calculator.\n Please Enter your choice.\n1.Area of a Rectangle.\n2.Area of a triangle.\n3.Area of a circle.\n4.Area of a Square")
if (choice=="1"){
    var l=prompt("Enter the lenght:")
    var b=prompt("Enter the breadth:")
    var area=Number(l)*Number(b)
    alert("The area of the rectangle is:"+area)
}
if (choice=="2"){
    var h=prompt("Enter the height:")
    var b=prompt("Enter the base:")
    var area=0.5*Number(h)*Number(b)
    alert("The area of the triangle is:"+area)
}
if(choice=="3"){
    var r=prompt("Enter the radius:")
    var area=22/7*Number(r)*Number(r)
    alert("The area of the circle is:"+area)
}
if (choice=="4"){
    var l=prompt("Enter the length:")
    var area=Number(l)*Number(l)
    alert("The area of the square is:"+area)
}