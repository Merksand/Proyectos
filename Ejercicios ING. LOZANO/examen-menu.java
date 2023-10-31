package com.mycompany.mavenproject1;
import java.util.Scanner;
public class exa {
    public static Scanner Teclado = new Scanner(System.in);
    public static int[][] Matriz = new int[3][3];
    public static int[] Vector = new int[10];

    public static void main(String[] args) {
        int opcion;
        do {
            mostrarMenuPrincipal();
            opcion = Teclado.nextInt();
            switch (opcion) {
                case 1:
                    menuMatrices();
                    break;
                case 2:
                    menuVectores();
                    break;
                case 0:
                    System.out.println("Fuera del menu");
                    break;
                default:
                    System.out.println("Opcion incorrecta");
            }
        } while (opcion != 0);
    }

    public static void mostrarMenuPrincipal() {
        System.out.println("------------------------");
        System.out.println("Menú Principal");
        System.out.println(" 1 Matrices");
        System.out.println(" 2 Vectores");
        System.out.println(" 0 Salir");
        System.out.print("Elija una opción: ");
    }
    public static void menuMatrices() {
        int opcion;
        do {
            System.out.println("        Sub menú Matrices");
            System.out.println("        1. Cargar Matriz");
            System.out.println("        2. Listar Diagonal Principal");
            System.out.println("        9. Volver");
            System.out.print("      Elija una opción: ");
            opcion = Teclado.nextInt();
            switch (opcion) {
                case 1:
                    cargarMatriz();
                    break;
                case 2:
                    listarDiagonalPrincipal();
                    break;
                case 9:
                    break;
                default:
                    System.out.println("Opcion incorrecta");
            }
        } while (opcion != 9);
    }

    public static void cargarMatriz() {
        System.out.println("Cargar Matriz");

        for (int i = 0; i < Matriz.length; i++) {
            for (int j = 0; j < Matriz[i].length; j++) {
                System.out.print("Ingrese el elemento [" + i + "][" + j + "]: ");
                Matriz[i][j] = Teclado.nextInt();
            }
        }
    }

    public static void listarDiagonalPrincipal() {
        System.out.println("Listar Diagonal Principal");
        for (int i = 0; i < Matriz.length; i++) {
            for (int j = 0; j < Matriz[i].length; j++) {
                if (i == j) {
                    System.out.print(Matriz[i][j] + " ");
                }
            }
        }
        System.out.println();
    }

    public static void menuVectores() {
        int opcion;
        do {
            System.out.println("Sub menú Vector");
            System.out.println("        1 Iterativos");
            System.out.println("        2 Recursivos");
            System.out.println("        9 Volver");
            System.out.print("      Elija una opción: ");
            opcion = Teclado.nextInt();
            switch (opcion) {
                case 1:
                    menuIterativos();
                    break;
                case 2:
                    menuRecursivos();
                    break;
                case 9:
                    break;
                default:
                    System.out.println("Opcion incorrecta");
            }
        } while (opcion != 9);
    }

    public static void menuIterativos() {
        int opcion;
        do {
            System.out.println("            Sub menú Iterativos");
            System.out.println("            1 Cargar el vector");
            System.out.println("            2 Listar Pares");
            System.out.println("            99 Volver");
            System.out.print("          Elija una opción: ");
            opcion = Teclado.nextInt();
            switch (opcion) {
                case 1:
                    cargarVector();
                    break;
                case 2:
                    listarPares();
                    break;
                case 99:
                    break;
                default:
                    System.out.println("Opcion incorrecta");
            }
        } while (opcion != 99);
    }

    public static void cargarVector() {
        System.out.println("Cargar el Vector");

        for (int i = 0; i < Vector.length; i++) {
            System.out.print("Ingrese el elemento en la posición " + i + ": ");
            Vector[i] = Teclado.nextInt();
        }
    }

    public static void listarPares() {
        System.out.println("Listar Pares");
        for (int i = 0; i < Vector.length; i++) {
            if (Vector[i] % 2 == 0) {
                System.out.print(Vector[i] + " ");
            }
        }
        System.out.println();
    }

    public static void menuRecursivos() {
        int opcion;
        do {
            System.out.println("            Sub menú Recursivos");
            System.out.println("            1 Listar Impares");
            System.out.println("            2 Factorial de cada elemento");
            System.out.println("           99 Volver");
            System.out.print("Elija una opción: ");
            opcion = Teclado.nextInt();
            switch (opcion) {
                case 1:
                    listarImpares();
                    break;
                case 2:
                    factorialElementos();
                    break;
                case 99:
                    break;
                default:
                    System.out.println("Opcion incorrecta");
            }
        } while (opcion != 99);
    }

    public static void listarImpares() {
        System.out.println("Listar Impares");
        for (int i = 0; i < Vector.length; i++) {
            if (Vector[i] % 2 != 0) {
                System.out.print(Vector[i] + " ");
            }
        }
        System.out.println();
    }

    public static int factorialElemento(int numero) {
        int factorial = 1;
        for (int i = 1; i <= numero; i++) {
            factorial *= i;
        }
        return factorial;
    }

    public static void factorialElementos() {
        System.out.println("Factorial de cada elemento");

        for (int i = 0; i < Vector.length; i++) {
            int elemento = Vector[i];
            int factorial = factorialElemento(elemento);
            System.out.println("Factorial de " + elemento + " es: " + factorial);
        }
    }
}
