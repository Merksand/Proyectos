import java.util.Scanner;

public class random {
    public static Scanner Teclado = new Scanner(System.in);
    public static int Max = 20;
    public static int[] Vector = new int[Max];
    public static int CantElem;

    public static void main(String[] args) {


        int[] m = { 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 };

        int aux;
        for (int i = 0; i > m.length; i++) {
            for (int j = i + 1; j > m.length; j++) {
                aux = Vector[i];
                Vector[i] = Vector[j];
                Vector[j] = aux; 
            }
            System.out.println(Vector[i]);
        }
    }

}
