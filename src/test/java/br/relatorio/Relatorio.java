package br.relatorio;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.zip.ZipEntry;
import java.util.zip.ZipOutputStream;

import com.cucumber.listener.Reporter;

import br.steps.TestRule;

public class Relatorio {
	
	public static void geraRelatorio() {
		Reporter.loadXMLConfig(new File(TestRule.getReportConfigPath()));
		Reporter.setSystemInfo("Author", "Lucas Victor");
		Reporter.setSystemInfo("User Name", "Squadra");
		Reporter.setSystemInfo("Time zone", System.getProperty("user.timezone"));
		Reporter.setSystemInfo("Selenium", "3.11.0");
		Reporter.setSystemInfo("Cucumber", "1.2.5");
		Reporter.setSystemInfo("JUnit", "1.2.6");
		Reporter.setSystemInfo("Java", "1.8.0_251");
		Reporter.setSystemInfo("Browser", "Chrome");
		
		//Gera o relatorio.
		Reporter.getExtentReport().flush();	
	}
	
	static public void zipFolder() throws Exception {

		Date date = new Date();
		DateFormat dateFormat = new SimpleDateFormat("dd-MM-yyyy-HH.mm.ss");

		String nomeDir = System.getProperty("user.dir") + "\\target\\relatorios-" + dateFormat.format(date);
		new File(nomeDir).mkdir();

		File extent = new File(System.getProperty("user.dir") + "\\target\\relatorios\\");
		
		if (extent.exists()) {
			String srcFolder = System.getProperty("user.dir") + "\\target\\relatorios";
			String destZipFile = nomeDir + "\\relatorios-" + dateFormat.format(date) + ".zip";

			ZipOutputStream zip = null;
			FileOutputStream fileWriter = null;

			fileWriter = new FileOutputStream(destZipFile);
			zip = new ZipOutputStream(fileWriter);

			addFolderToZip("", srcFolder, zip);
			zip.flush();
			zip.close();
		}
		else {
			System.out.println("Não há relatórios para backup.");
		}

	}

	static private void addFileToZip(String path, String srcFile, ZipOutputStream zip) throws Exception {

		File folder = new File(srcFile);
		if (folder.isDirectory()) {
			addFolderToZip(path, srcFile, zip);
		} else {
			byte[] buf = new byte[1024];
			int len;
			FileInputStream in = new FileInputStream(srcFile);
			zip.putNextEntry(new ZipEntry(path + "/" + folder.getName()));
			while ((len = in.read(buf)) > 0) {
				zip.write(buf, 0, len);
			}
			in.close();
		}
	}

	static private void addFolderToZip(String path, String srcFolder, ZipOutputStream zip) throws Exception {
		File folder = new File(srcFolder);

		for (String fileName : folder.list()) {
			if (path.equals("")) {
				addFileToZip(folder.getName(), srcFolder + "/" + fileName, zip);
			} else {
				addFileToZip(path + "/" + folder.getName(), srcFolder + "/" + fileName, zip);
			}
		}
	}

	public static void limparPastas() {

		File pasta1 = new File(System.getProperty("user.dir") + "/target/relatorios/screenshot");
		File pasta2 = new File(System.getProperty("user.dir") + "/target/relatorios");

		if (pasta1.exists()) {
			System.out.println("Limpando pastas de arquivos...");
			
			File[] arquivos = pasta1.listFiles();
			for (File arquivo : arquivos) {
				
				arquivo.setWritable(true);
				arquivo.delete();
				/*
				 * try { FileUtils.forceDelete(arquivo); } catch (IOException e) {
				 * e.printStackTrace(); }
				 */
			}
			
			File[] arquivos2 = pasta2.listFiles();
			for (File arquivo2 : arquivos2) {
				
				arquivo2.setWritable(true);
				arquivo2.delete();
				/*
				 * try { FileUtils.forceDelete(arquivo2); } catch (IOException e) {
				 * e.printStackTrace(); }
				 */
			}
			System.out.println("Arquivos deletados! \n");
		}		
	}
}
