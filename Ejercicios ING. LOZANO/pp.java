import java.util.Scanner;

public class pp {
    public static Scanner Teclado = new Scanner(System.in);
    public static int Max = 20;
    public static int[] Vector = new int[Max];
    public static int CantElem;

    /**
     * @param args the command line arguments
     */
    public static void main(String[] args) {
        int Opcion = 1;
        int Multiplo, Cantidad;
        while (Opcion != 0) {
            System.out.println(" -------------------");
            System.out.println("    Menu principal");
            System.out.println(" -------------------");
            System.out.println("1.- Cargar un Vector");
            System.out.println("2.- Buscar Un elemento");
            System.out.println("3.- Listar todos los elementos");
            System.out.println("4.- Encontrar el elemento Mayor y Menor");
            System.out.println("5.- Encontrar los multiplos de un Nro. almacenado en el Vector");
            System.out.println("6.- Ordenar el Vector Metodo Burbuja");
            System.out.println("7.- Factorial de cada elemento del Vector");
            System.out.println("8.- Encontrar la Moda de un Vector");
            System.out.println("9.- Listar un Vector ascendente y descendente");
            System.out.println("10.- Invertir un Vector");
            System.out.println("11.- Llenar en vector con serie Fibonacci");
            System.out.println("12.- Ordenar por desplazamiento e insersión");
            System.out.println("99.- Adicionar elemento unico");
            System.out.println("--------------------------------");
            System.out.println("0.- Salir del Programa");
            System.out.println("-------------------------------");
            System.out.println("-------Cantidad Acutal Elementos<" + CantElem + ">----------");
            System.out.println("-------------------------------");

            System.out.println("Elija una opcion");
            Opcion = Teclado.nextInt();

            if (Opcion == 1) {
                System.out.println("****************");
                System.out.println("Cargar el Vector");
                System.out.println("****************");
                System.out.println("Digite la cantidad de Elementos");
                Cantidad = Teclado.nextInt();
                CargarElementosVector(Cantidad);

            }

            if (Opcion == 2) {
                System.out.println("Mostrar elemento");
            }
            if (Opcion == 3) {
                System.out.println("****************");
                System.out.println("Vector listado");
                System.out.println("****************");
                ListarElementosVector();
            }
            if (Opcion == 4) {
                System.out.println("****************");
                System.out.println("Elemento y Menor del Vector");
                System.out.println("****************");
                ElementoMayorMenorVector();
            }
            if (Opcion == 5) {
                System.out.println("****************");
                System.out.println("Multiplos de un número");
                System.out.println("****************");
                Multiplo = Teclado.nextInt();
                MultiplosDeUnNro(Multiplo);
            }
            if (Opcion == 6) {
                System.out.println("****************");
                System.out.println("Ordenado por metodo burbuja");
                System.out.println("****************");
                // Multiplo = Teclado.nextInt();
                metodoBuruja();
            }
            if (Opcion == 7) {
                System.out.println("****************");
                System.out.println("Factorial de cada elemento");
                System.out.println("****************");
                // Cantidad = Teclado.nextInt();
                factorialElemento();
                // devolverFactorial();q1
            }
            if(Opcion == 99){
                System.out.println("****************");
                System.out.println("Adicion de elementos");
                System.out.println("****************");
                System.out.println("Introduce un número");
                Cantidad = Teclado.nextInt();
                IntroducirElementoUnico(Cantidad);
            }

        }

    }

    static void CargarElementosVector(int Cant) {
        int i = 0;
        int ele;
        while (i < Cant) {
            System.out.print("Digite el elemento en posicion<" + i + ">:");
            ele = Teclado.nextInt();
            Vector[i] = ele;
            i++;
            CantElem++;
        }
    }

    static void ListarElementosVector() {
        int i = 0;
        while (i < CantElem) {
            System.out.println("Elemento Posicion<" + i + ">" + Vector[i]);
            i++;
        }
    }

    static void ElementoMayorMenorVector() {
        int i = 0;
        int May = Vector[0];
        int Men = Vector[0];

        while (i < CantElem) {
            if (May < Vector[i]) {
                May = Vector[i];
            }
            if (Men > Vector[i]) {
                Men = Vector[i];
            }
            i++;
        }
        System.out.println("Elemento Mayor es: " + May);
        System.out.println("Elemento Menor es: " + Men);
        System.out.println("*********************");
    }

    static void MultiplosDeUnNro(int prmNro) {
        int i = 0;
        while (i < CantElem) {
            if (esMultiplo(Vector[i], prmNro)) {
                System.out.println("Elemento<" + i + ">: " + Vector[i]);
            }
            i++;
        }
    }

    static boolean esMultiplo(int prmElemento, int prm2Multiplo) {
        while (prmElemento > 0) {
            prmElemento = prmElemento - prm2Multiplo;
        }
        if (prmElemento == 0) {
            return true;
        } else {
            return false;
        }
    }

    static void metodoBuruja() {
        int aux;
        for (int i = 0; i < CantElem;i++) {
            for (int j = i + 1; j < CantElem; j++) {
                if (Vector[i] > Vector[j]) {
                    aux = Vector[i];
                    Vector[i] = Vector[j];
                    Vector[j] = aux;
                }
            }
        }
        for (int k = 0; k < CantElem; k++) {
            System.out.println(Vector[k]);
        }

    }

    static void devolverFactorial(int factorial){
       int i = 0;
       while(i < CantElem){
           i++;
        }
    }
    static void factorialElemento(){
        int factorial = 0;
        while(CantElem > 0){
            for(int i = 0; i < CantElem; i++){
                factorial = factorial * Vector[i];
                System.out.println(factorial);
            } 
            CantElem--;
            System.out.println();  
            // devolverFactorial(factorial);
        }
    }
    








    static void IntroducirElementoUnico(int prmElemento){
        Vector[CantElem] = prmElemento;
        CantElem++;
        System.out.println("Elemento adicionado" );

    }

    

}
