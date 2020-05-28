package br.utils;

import java.io.IOException;

public class DbManager {
	
	public static void backupMySql() {
		//bkp
		String dump = "cmd.exe /c mysqldump --user=root --password=root database > /backup/" + "meubkp.sql";
		Runtime bkp = Runtime.getRuntime();
		try {
			bkp.exec(dump);
		} catch (IOException e) {
			e.printStackTrace();
		}
	}

	public static void restoreMySql() {
		//restaura bkp
		String restauraBkp = "cmd.exe /c mysql --user=root --password=root database < " + "/backup/meubkp.sql";
		try {
			Runtime.getRuntime().exec(restauraBkp);
		} catch (IOException e) {
			e.printStackTrace();
		}
	}
}
