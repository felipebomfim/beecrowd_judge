
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
        Double a, b, c;

        a = sc.nextDouble();
        b = sc.nextDouble(); 
        c = sc.nextDouble();

        sc.close();
        
        Double triangleArea = a*c/2;

        final Double PI = 3.14159;        
        Double circleArea = PI*Math.pow(c, 2);

        Double trapeziumArea = (a+b)/2*c;

        Double squareArea = b*b;

        Double rectangleArea = a*b;

        System.out.printf("TRIANGULO: %.3f\n",triangleArea);
        System.out.printf("CIRCULO: %.3f\n",circleArea);
        System.out.printf("TRAPEZIO: %.3f\n",trapeziumArea);
        System.out.printf("QUADRADO: %.3f\n",squareArea);
        System.out.printf("RETANGULO: %.3f\n",rectangleArea);
        
 
    }
 
}