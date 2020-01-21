var a= prompt ("Введите цифра. Значение на (А)");
var b= prompt ("Введите цифра Значение на (B)");
var c= prompt ("Введите цифра Значение на (C)");

a = Number(a);
b = Number(b);
c = Number(c);

if ( a > b && b>c){
    alert (b);
    
}else if (c > a && a > b ){
    alert (a);

}else if (b > c && c > a ) {
    alert (c);

}else if ( a < b && b < c ){
    alert (b);

}else if ( c< a && a < b ){
    alert (a);

}else if ( c > b &&  a > c ) {
    alert (c);

}else {
    alert ("Все цифры должны быть разными ")
}

