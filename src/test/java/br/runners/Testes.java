package br.runners;

import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Date;

public class Testes {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		
		//testes de codigo
		Date data = new Date();
		DateFormat dateFormat = new SimpleDateFormat("dd-MM-yyyy-HH.mm.ss");
		System.out.println("data 1 - " + dateFormat.format(data));
		
	}

}
