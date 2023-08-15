import java.util.Scanner;
public class Perro {

    public static void main(String[] args) {
    Scanner Lt = new Scanner("system.in");
        System.out.println("ingrese n numeros");
        int n=Lt.nextInt();
        int i=1;
        int sp=0;
        int ci=0;
        while(i<=n)
        {
            int e=Lt.nextInt();
            if(e%2==0)
            {
                sp=sp+e;
            }
            else
            {
                ci=ci+1;
            }
            i++;
        }
        int d=sp-ci;
        System.out.println("la diferencia es: " +d);
    }
}
