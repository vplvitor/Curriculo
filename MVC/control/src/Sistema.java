import java.sql.Connection;
import java.sql.SQLException;
import java.util.Scanner;

import model.FabricaConexao;

public class Sistema {

	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		String url = "jdbc:mysql://localhost/banco";
		String user = "root";
		String pass = "";
		FabricaConexao fc = new FabricaConexao(user, url, pass);
		try {
			Connection con = fc.getConnection();
			con.close();
			System.out.println("Digite o nome da pessoa.");
			sc.nextLine();
			String nome = sc.nextLine();
			sc.nextLine();
			String email = sc.nextLine();
			
		} catch (SQLException e) {
			e.printStackTrace();
		}
		
		
	}

}
