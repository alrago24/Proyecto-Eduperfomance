import java.util.Scanner;

public class App {

    public static void main(String[] args) throws Exception {
        Scanner sc = new Scanner(System.in);
        String dataUsername = "usuario@dominio.com";
        String dataPassword = "123456";
        String username = "";
        String password = "";
        int maxAttempts = 3; // Número máximo de intentos
        int remainingAttempts = maxAttempts; // Intentos restantes
        String name = "Alison";

        System.out.println("Bienvenido a Eduperfomance");
        
        while (remainingAttempts > 0) {
            System.out.println("Por favor ingresa tu correo registrado:");
            username = sc.next();
            System.out.println("Por favor ingresa tu contraseña:");
            password = sc.next();

            if (username.equals(dataUsername) && password.equals(dataPassword)) {
                System.out.println("Bienvenido apreciado " + name);
                break; // Sale del bucle si las credenciales son correctas
            } else {
                remainingAttempts--; // Decrementa los intentos restantes
                if (remainingAttempts > 0) {
                    System.out.println("Correo o contraseña incorrectos. Intentos restantes: " + remainingAttempts);
                } else {
                    System.out.println("Has agotado tus intentos. Acceso denegado.");
                }
            }
        }

        sc.close(); // Es buena práctica cerrar el scanner
    }
}