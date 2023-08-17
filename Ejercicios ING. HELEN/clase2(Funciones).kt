 var age3:Int = 20
 fun main() {
     
 //variableNumerica(30,15)
 //println("-------------------------------")
 //variableNumerica(14,2)
 
 variableNumerica()
 println("-------------------------------")
 println("-------------------------------")
 variableAlfanumericas()
 
}
 
fun variableNumerica(){

 var age:Int = 43
 var age2:Int = 12
    
 println("Restar")
 println(age - age2)
 
 println("Multiplicar")
 println(age * age2)
 
 println("Dividir")
 println(age / age2)
 println("Sumar")
 println(age + age2)
 
 println("Restar")
 println(age - age2)
 
 println("Multiplicar")
 println(age * age2)
 
 println("Módulo")
 println(age % age2)

 
}

fun variableAlfanumericas(){
    
    val age:Int = 20
    //val char1:Char = "e"
   // val char2:Char = "#"
   // val char3:Char = "@"
    
    val string1:String = "Tecnológico Santa Cruz"
    val string2:String = "08"
    val string3:String = "2015"
    val string4:String = "Miguel"
    
    println(string2.toInt()+string3.toInt())
    println("Hola, me llamo $string4 y tengo $age3 años")
}



fun variablesBooleanas(){
    val boolean1:Boolean = true
    val boolean2:Boolean = false
}

