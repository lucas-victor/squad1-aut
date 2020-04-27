package br.runners;

import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.time.LocalDate;
import java.util.Calendar;
import java.util.Date;

public class teste {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		
		Date data = new Date();
		DateFormat dateFormat = new SimpleDateFormat("dd-MM-yyyy-HH.mm.ss");
		System.out.println("data 1 - " + dateFormat.format(data));
		
		LocalDate data2 = LocalDate.now();
		System.out.println("data 2 - " + data2);
		
		Calendar data3 = Calendar.getInstance();
		System.out.println("data 3 - " + data3.getTime());
	}

}
