package br.utils;

public class Apoio {

	// metodo aguardar tempo em mili seconds
	public static void wait(int tempo) {

		try {
			Thread.sleep(tempo);
		} catch (InterruptedException e) {
			e.printStackTrace();
		}
	}

}
