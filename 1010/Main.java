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
        int[] code = new int[2];
        int[] numUnits = new int[2];
        double[] priceForUnit = new double[2];

        Scanner sc = new Scanner(System.in);
        double amountToPay = 0;

        int listSize = 2;
        for(int i = 0; i<listSize; i++){
            code[i] = sc.nextInt();
            numUnits[i] = sc.nextInt();
            priceForUnit[i] = sc.nextDouble();

            amountToPay += numUnits[i]*priceForUnit[i];
        }

        System.out.printf("VALOR A PAGAR: R$ %.2f\n", amountToPay);
        sc.close();
 
    }
 
}