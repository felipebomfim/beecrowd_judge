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
        
        int amountOfMoney = sc.nextInt();

        final int[] notes = {100, 50, 20, 10, 5, 2 ,1};

        int[] numOfNotes = new int[notes.length]; //automatically filled with 0
        
        System.out.println(amountOfMoney);
        for (int i = 0; i<notes.length; i++){
            while(amountOfMoney >= notes[i]){
                numOfNotes[i]++;
                amountOfMoney-=notes[i];
            }
            System.out.printf("%d nota(s) de R$ %d,00\n", numOfNotes[i], notes[i]);
        }
        

        sc.close();
    }
 
}