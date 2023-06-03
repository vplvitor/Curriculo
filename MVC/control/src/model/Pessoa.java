package model;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;

public class Pessoa {
	int id;
	String nome;
	String email;
	
	public Pessoa(String nome, String email) {
		this.nome = nome;
		this.email = email;
	}
	
	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public void inserirPessoa(Connection con) {
		String sql = "INSERT INTO pessoa (nome, email) VALUES (?, ?)";
		try {
			PreparedStatement ps = con.prepareStatement(sql);
			ps.setString(1, this.nome);
			ps.setString(2, this.email);
			boolean insert = ps.execute();
			if(!insert) {
				System.out.println("Inserido com sucesso");
			}else {
				System.out.println("Erro no comando INSERT");
			}
		} catch (SQLException e) {
			e.printStackTrace();
			System.out.println("Erro ao inserir pessoa");
		}
	}
	
	public ArrayList<Pessoa> listarPessoas(Connection con) {
		ArrayList<Pessoa> listaPessoa = new ArrayList<>();
		try {
			PreparedStatement ps = con.prepareStatement(
					"SELECT * FROM pessoa");
			ResultSet resultado = ps.executeQuery();
			while(resultado.next()) {
				Pessoa pTemp = new Pessoa(
						resultado.getString("nome"),
						resultado.getString("email"));
				pTemp.id = resultado.getInt("id");
				listaPessoa.add(pTemp);
			}
		}catch(SQLException ex) {
			ex.printStackTrace();
			System.out.println("Erro ao listar pessoas");
		}
		return listaPessoa;
	}
	
	public String toString() {
		return "Id: "+this.id + 
				"Nome: "+ this.nome +
				"E-mail: " + this.email;
	}

}
