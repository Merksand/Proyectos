
 fun main() {
    persona()
}
fun persona(){
    val edad = 20
    if(edad >= 0 && edad <= 11){
        println("1")

    }
    else if(edad >= 12 && edad <= 17){
        println("2")

    }
    else if(edad >= 19 && edad <= 29){
        println("3")
        
    }
    else if(edad >= 30 && edad <= 59){
        println("4")
        
    }
    else if(edad >= 60 ){
        println("6")
        
    }
}