import java.util.Scanner;
public class pp {
    public static Scanner Teclado = new Scanner(System.in);
    public static int Max = 20;
    public static int[] Vector = new int[Max];
    public static int CantElem;
    public static void main(String[] args) {
        // TODO code application logic here
        int Opcion = 1;
        int Cantidad;
        while (Opcion != 0) {
            System.out.println(" -------------------");
            System.out.println("    Menu principal");
            System.out.println(" -------------------");
            System.out.println("1.- Cargar un Vector");
            System.out.println("2.- Buscar Un elemento");
            System.out.println("3.- Listar todos los elementos");
            System.out.println("4.- Encontrar el elemento Mayor y Menor");
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
