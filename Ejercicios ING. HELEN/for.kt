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
    fun main() {
    val numeros = listOf(1, 2, 3, 1, 2, 4, 1, 1, 2, 3)
    var suma = 0

    for (i in numeros.indices) {
        if (i >= numeros.size - 5) {
            suma += numeros[i]
        }
    }
    println("La suma de los últimos 5 valores es: $suma")
}

    fun main() {
    var numero =5
    for(i in 1..10){
        println(numero*i)
    }
}
    fun main() {
    val num = arrayOf(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)
    val numeroElegido = num[2]
    for (i in 1..12) {
        println(numeroElegido * i)
    }
}
    fun main() {
    var numeros = arrayOf(5, -11, 15, 20, -25, 30, 35, -37, 45, 50)
    var positivos=0
    var negativos=0
    var multiplosDe15 =0
    var acumuladoPares=0
    for(i in numeros){
        if(i<0) negativos++
        else positivos++
        if(i%15==0) multiplosDe15++
        if(i%2==0) acumuladoPares+=i 
    }
    println("Cantidad de valores negativos: $negativos")
    println("Cantidad de valores positivos: $positivos")
    println("Cantidad de múltiplos de 15: $multiplosDe15")
    println("Valor acumulado de números pares: $acumuladoPares")
}
}
