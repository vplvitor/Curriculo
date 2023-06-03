package model;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.SQLException;

public class PessoaDao {
	Pessoa pessoa;
	// insert
	public void inserirPessoa(Pessoa p, Connection con) {
		String sql = "INSERT INTO pessoa (nome, email) values(?, ?)";
		try {
			PreparedStatement ps = con.prepareStatement(sql);
			ps.setString(1, p.getNome());
			ps.setString(2, p.getEmail());
			int rowsAffected = ps.executeUpdate();
			if(rowsAffected == 1) {
				System.out.println("Sucesso ao inserir pessoa.");
			}else {
				System.out.println(rowsAffected);
			}
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			System.out.println("Erro ao inserir pessoa.");
		}
	}
	// delete
	// update
	// delete
}
