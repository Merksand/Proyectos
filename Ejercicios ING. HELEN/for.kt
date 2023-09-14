fun main() {
    
    for(i in 1..5)
    {
        println("Contando $i")
    }
    for(letter in 'a'..'f') print(letter)
    println()
    
    for (letter in 'a'..'f' step 2) print(letter)
   	println()
    
    for (letter in 'f' downTo 'a') print(letter)
    println()
    
	for (letter  in 'a' until 'f') print(letter)
    
    println()
    val frutas = arrayOf("Banana","Manzana","Sandia","Durazno","Uva")
 	for (i in frutas.indices){
        println("$i, ${frutas[i]}")
    }   
    
    //Destructuracion de elementos de Array
    for((i,v) in frutas.withIndex()){
        println("[$i,$v]")
    }
    
    for (i in "Frutas"){
        println(i)
    }
    var i = 0
    var suma = 0
    while(i <= 10){
         suma += i++
    }
    println("Sumatoria $suma")
    
    for(i in 1..10){
        for(j in 1..10){
            println("$i * $j = ${i*j}")
        }
    }
    
    
    
}

///////////////
fun main() {
    var list = arrayOf(1,2,3,1,1,2,4,1,1,2,3)
    var suma = 0
    for (i in list.indices){
        if(i >= 6){
            suma += list[i]
            
        }
    }
    println("La suma es: $suma")
    println()
    /*for(i in 1..10){
        println("Tabla del $i")
        for(j in 1..10){
            println("$i * $j = ${i*j}")
        }
            println()
    }*/
    println("Tabla del 5")
  	for(i in 1..10){
        println("5 * $i = ${5*i}")        
    }
    println()
	var num = arrayOf(1,2,3,4,5,6,7,8,9,10)
    for(i in num.indices){
        println("3 * $i = ${3*i}")
           
    }
}
