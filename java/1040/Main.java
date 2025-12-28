import java.io.IOException;
import java.util.Scanner;

/**
 * IMPORTANT:
 * O nome da classe deve ser "Main" para que a sua solução execute
 * Class name must be "Main" for your solution to execute
 * El nombre de la clase debe ser "Main" para que su solución ejecutar
 */
public class Main {

    public static void main(String[] args) throws IOException {

        /**
         * Escreva a sua solução aqui
         * Code your solution here
         * Escriba su solución aquí
         */
        Scanner sc = new Scanner(System.in);

        double[] nota = new double[4];

        for (int i = 0; i < 4; i++) {
            nota[i] = sc.nextDouble();
        }

        double media = Math.floor(nota[0]*2 + nota[1]*3 + nota[2]*4 + nota[3]*1)/10.0 ;
        System.out.printf("Media: %.1f\n", media);
        if (media >= 7.0) {
            System.out.println("Aluno aprovado.");
            sc.close();
            return;
        }

        if (media < 5.0) {
            System.out.println("Aluno reprovado.");
            sc.close();
            return;
        }

        System.out.println("Aluno em exame.");
        double notaExame = sc.nextDouble();
        System.out.printf("Nota do exame: %.1f\n", notaExame);

        double mediaFinal = (notaExame+media)/2;

        if (mediaFinal < 5.0) {
            System.out.println("Aluno reprovado.");
        } else {
            System.out.println("Aluno aprovado.");
        }

        System.out.printf("Media final: %.1f\n",mediaFinal);

        sc.close();
    }

}