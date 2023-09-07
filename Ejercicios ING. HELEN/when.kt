fun main() {
    getMonth(10)
    getSemester(9)
    getTrimestre("Abril")
    println("Miguel Ángel Mayta Cruz")
}
fun getMonth(mes:Int){
    when(mes){
        1 -> println("Enero")
        2 -> println("Febrero")
        3 -> println("Marzo")
        4 -> println("Abril")
        5 -> println("Mayo")
        6 -> println("Junio")
        7 -> println("Julio")
        8 -> println("Agosto")
        9 -> println("Septiembre")
        10 -> println("Octubre")
        11 -> println("Noviembre")
        12 -> println("Diciembre")
        else -> println("No es un mes válido")
    }
}
fun getSemester(mes:Int){
    when(mes){
        1,2,3,4,5,6 -> println("Primer semestre")
        7,8,9,10,11,12 -> println("Segundo semestre")
        else -> println("No válido")
    }
}
fun getTrimestre(mes:String){
    when(mes){
       "Enero","Febrero","Marzo" -> println("Primer Trimestre")
       "Abril","Mayo","Junio" -> println("Segundo Trimestre")
       "Julio","Agosto","Septiembre" -> println("Tercer Trimestre")
       "Octubre","Noviembre","Diciembre" -> println("Cuarto Triemestre")
    }
}
