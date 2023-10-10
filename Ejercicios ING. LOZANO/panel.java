import java.util.Scanner;

public class RecursividadLozanoOctubre {
    public static Scanner Teclado = new Scanner(System.in);

    public static void main(String[] args) {
        System.out.println("Hola mundo Cruel");
        int opcion = 1;

        while (opcion != 0) {
            System.out.println("----------------------------------------");
            System.out.println("Menu principal recursivos");
            System.out.println("------------------------------------");
            System.out.println("1.- Seriales");
            System.out.println("2.- Vectoriales");
            System.out.println("------------------------------------");
            System.out.println("0.- Salir del programa");
            System.out.println("------------------------------------");
            System.out.println("Digite la opcion ....");
            System.out.println("------------------------------------");
            opcion = Teclado.nextInt();

            if (opcion == 1) {
                SubMenuLineal();
            } else if (opcion == 2) {
                SubMenuVectorial();
            }
        }
    }

    static void SubMenuLineal() {
        int opcionL = 1;
        while (opcionL != 99) {
            System.out.println("----------------------------------------");
            System.out.println("Sub Menu Lineal");
            System.out.println("----------------------------------------");
            System.out.println("1.- Listar una Serie");
            System.out.println("2.- Calcular Factorial");
            System.out.println("----------------------------------------");
            System.out.println("99.- Volver Menu Principal");
            System.out.println("----------------------------------------");
            System.out.println("Digite la opcion ....");
            System.out.println("----------------------------------------");

            opcionL = Teclado.nextInt();
            if (opcionL == 1) {
                System.out.println("Listar una Serie");
            } else if (opcionL == 2) {
                // Lógica para calcular el factorial
            }
        }
    }
    static void listarSerie(int n){
        if(n>0){
            listarSerie(n-1);
            System.out.println(n);
        }
    }

    static void SubMenuVectorial() {
        int opcionV = 2;
        while (opcionV != 99) {
            System.out.println("----------------------------------------");
            System.out.println("Sub Menu Vectorial");
            System.out.println("----------------------------------------");
            System.out.println("1.- Listar un Vector");
            System.out.println("2.- Calcular Factorial");
            System.out.println("----------------------------------------");
            System.out.println("99.- Volver Menu Principal");
            System.out.println("----------------------------------------");
            System.out.println("Digite la opcion ....");
            System.out.println("----------------------------------------");

            opcionV = Teclado.nextInt();
            if (opcionV == 1) {
                System.out.println("Listar un Vector");
            } else if (opcionV == 2) {
                // Lógica para calcular el factorial
            }
        }
    }
    
}

