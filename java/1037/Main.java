import java.io.IOException;
import java.util.Scanner;
 
/**
 * IMPORTANT: 
 *      O nome da classe deve ser "Main" para que a sua solução execute
 *      Class name must be "Main" for your solution to execute
 *      El nombre de la clase debe ser "Main" para que su solución ejecutar
 */
public class Main {
 
    public static void main(String[] args) throws IOException {
 
        /**
         * Escreva a sua solução aqui
         * Code your solution here
         * Escriba su solución aquí
         */
        Scanner sc = new Scanner(System.in);

        double input = sc.nextDouble();

        if(input<0 || input>100)
            System.out.println("Fora de intervalo");
        else if(input<=25)
            System.out.println("Intervalo [0,25]");
        else if(input<=50)
            System.out.println("Intervalo (25,50]");
        else if(input<=75)
            System.out.println("Intervalo (50,75]");
        else if(input<=100)
            System.out.println("Intervalo (75,100]");

        sc.close();
    }
 
}