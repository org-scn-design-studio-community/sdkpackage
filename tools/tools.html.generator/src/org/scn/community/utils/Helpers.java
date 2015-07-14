package org.scn.community.utils;

import java.io.BufferedWriter;
import java.io.ByteArrayInputStream;
import java.io.ByteArrayOutputStream;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.FilenameFilter;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;
import java.io.Reader;
import java.io.UnsupportedEncodingException;
import java.io.Writer;
import java.nio.charset.Charset;
import java.security.MessageDigest;
import java.util.ArrayList;
import java.util.List;
import java.util.Locale;
import java.util.Properties;

public class Helpers {

	public static String resource2String(Class<?> clazz, String resourceName) {
		InputStream fileContentStream = clazz.getResourceAsStream(resourceName);

		if (fileContentStream != null) {
			try {
				byte[] content = readInputStream(fileContentStream);
				String stringContent = new String(content, "UTF-8");
				return stringContent;
			} catch (IOException e) {
				return null;
			}
		}
		return null;
	}

	public static String file2String(File file) {
		InputStream fileContentStream = file2Stream(file);

		if (fileContentStream != null) {
			try {
				byte[] content = readInputStream(fileContentStream);
				String stringContent = new String(content, "UTF-8");
				return stringContent;
			} catch (IOException e) {
				return null;
			}
		}
		return null;
	}

	public static InputStream file2Stream(File file) {
		InputStream fileContentStream;

		try {
			fileContentStream = new FileInputStream(file);
		} catch (FileNotFoundException e1) {
			return null;
		}
		return fileContentStream;
	}

	public static List<String> file2List(String iFileName) {
		iFileName = fixFileName(iFileName);

		File file = new File(iFileName);
		String content = file2String(file);

		return stringToList(content);
	}

	public static List<String> stringToList(String content) {
		if(content == null) {return new ArrayList<String>();}
		content = content.replace("\r", "");
		String[] listArray = content.split("\n");

		List<String> returnList = new ArrayList<String>();
		for (String element : listArray) {
			returnList.add(element);
		}

		return returnList;
	}

	public static String string2File(String iFileName, String iText) {
		iFileName = fixFileName(iFileName);

		FileOutputStream u = null;
		Writer out = null;
		try {
			File f = new File(iFileName);
			if (!f.exists()) {
				f.getParentFile().mkdirs();
			}

			if (f.exists() && !f.canWrite()) {
				System.err.println("Read Only. File: " + f.getAbsolutePath() + " cannot be actualized. ");
				return iFileName;
			}

			// FileWriter l = new FileWriter(iFileNameFN);
			u = new FileOutputStream(iFileName);

			out = new BufferedWriter(new OutputStreamWriter(u, "UTF-8")); //$NON-NLS-1$
			out.write(iText);
			u.flush();
			out.flush();
			out.close();
			u.close();
		} catch (Exception e) {
			try {
				if (out != null) {
					out.close();
				}
			} catch (Exception e1) {
				// nothing to do
			}
			try {
				if (u != null) {
					u.close();
				}
			} catch (Exception e1) {
				// nothing to do
			}
		}
		return iFileName;
	}
	
	public static String fixToUtf8(String iText) {
		if (iText == null) {
			return null;
		}

		byte[] bytes;
		String iText2 = null;
		try {
			bytes = iText.getBytes("UTF-8");

			iText2 = new String(bytes, "UTF-8");
		} catch (UnsupportedEncodingException e) {
			// lost, return what is there
			return iText;
		}

		if (!iText.equals(iText2)) {
			return iText2;
		}

		return iText;
	}

	public static String fixFileName(String iFileName) {
		iFileName = iFileName.replace("\\", File.separator);
		iFileName = iFileName.replace("/", File.separator);
		iFileName = iFileName.replace(File.separator + File.separator, File.separator);

		// add the second separator to the begin. \\xxx\...
		if (iFileName.startsWith(File.separator)) {
			iFileName = File.separator + iFileName;
		}

		return iFileName;
	}

	public static String file2String(String iFileName) {
		iFileName = fixFileName(iFileName);

		File file = new File(iFileName);
		return file2String(file);
	}

	/* STREAMS */

	public static byte[] readInputStream(InputStream inputStream) throws IOException {
		return readInputStream(inputStream, 1024);
	}

	public static byte[] readInputStream(InputStream inputStream, int buffer) throws IOException {
		if (buffer <= 0) {
			buffer = 4096;
		}

		ByteArrayOutputStream outputStream = new ByteArrayOutputStream();

		try {
			byte[] byteChunk = new byte[buffer]; // Or whatever size you want to read in at a time.
			int n;

			while ((n = inputStream.read(byteChunk)) > 0) {
				outputStream.write(byteChunk, 0, n);
			}
		} finally {
			if (inputStream != null) {
				inputStream.close();
			}
		}

		return outputStream.toByteArray();
	}

	public static InputStream toInputStream(String content) {
		InputStream stream = new ByteArrayInputStream(content.getBytes(Charset.forName("UTF-8")));

		return stream;
	}

	/* file search recursion */

	public static void findMatchingFiles(File f, String extension, String folderIncluded, String content, List<File> outputList) {
		if (f.isDirectory()) {
			File[] children = f.listFiles();

			for (File file : children) {
				findMatchingFiles(file, extension, folderIncluded, content, outputList);
			}
		} else if (f.isFile() & f.canRead() && f.canWrite()) {
			String absolutePath = f.getAbsolutePath();

			absolutePath = fixFileName(absolutePath);

			if (absolutePath.endsWith(extension) && absolutePath.contains(File.separator + folderIncluded + File.separator)) {
				String file2String = file2String(absolutePath);

				if (file2String.contains(content)) {
					outputList.add(f);
				}
			}
		}
	}

	/** escape */

	public static final String encodeHtml(String unescaped) {
		if (unescaped == null) {
			return null;
		}
		if (unescaped.equals("")) { //$NON-NLS-1$
			return unescaped;
		}

		StringBuilder sb = new StringBuilder();

		for (int i = 0; i < unescaped.length(); i++) {
			char c = unescaped.charAt(i);

			switch (c) {
				case ' ':
					sb.append("&nbsp;");
					break;
				case '&':
					sb.append("&amp;");
					break;
				case '\"':
					sb.append("&quot;");
					break;
				case '<':
					sb.append("&lt;");
					break;
				case '>':
					sb.append("&gt;");
					break;
				case '\r':
					break;
				case '\n':
					sb.append("<br/>");
					break;
				default:
					sb.append(c);
					break;
			}
		}

		return sb.toString();
	}
	
	public static boolean copyFileBin(File sourceFile, File targetFile) {
		// check deltas
		boolean deltas = (targetFile.lastModified() != sourceFile.lastModified());
		if (!deltas) {
			deltas = deltas || (targetFile.length() != sourceFile.length());
		}

		if (deltas) {
			if (!targetFile.exists()) {
				// create parent directory if necessary
				File parentDir = targetFile.getParentFile();
				if (!parentDir.isDirectory()) {
					if (!parentDir.mkdirs()) {
						return false;
					}
				}
			} else {
				targetFile.delete();
			}
			try {
				targetFile.createNewFile();
			} catch (IOException e) {
				return false;
			}

			FileOutputStream fileO;
			try {
				fileO = new FileOutputStream(targetFile.getAbsolutePath(), true);
			} catch (FileNotFoundException e) {
				return false;
			}
			FileInputStream fileI;
			try {
				fileI = new FileInputStream(sourceFile);
			} catch (FileNotFoundException e) {
				return false;
			}
			try {
				byte[] buf = new byte[1024];
				int len;
				while ((len = fileI.read(buf)) > 0) {
					fileO.write(buf, 0, len);
				}
				fileI.close();

				fileO.flush();
				fileO.close();
			} catch (IOException e) {
				try {
					fileI.close();
				} catch (IOException e1) {
					// ignore

				}
				try {
					fileO.close();
				} catch (IOException e1) {
					// ignore

				}
				return false;
			}

			targetFile.setLastModified(sourceFile.lastModified());
		}
		return true;
	}


	public static String makeFirstUpper(String value) {
		if(value.length() == 0) {
			return value;
		}
		
		if(value.length() == 1) {
			return value.toUpperCase(Locale.ENGLISH);	
		}
		return value.substring(0,1).toUpperCase(Locale.ENGLISH)  +value.substring(1);
	}
	
	public static String makeFirstLower(String value) {
		if(value.length() == 0) {
			return value;
		}
		
		if(value.length() == 1) {
			return value.toLowerCase(Locale.ENGLISH);	
		}
		return value.substring(0,1).toLowerCase(Locale.ENGLISH)  +value.substring(1);
	}

	public static String makeAllUpper(String value) {
		String sentence = "";
		String [] splitWords = value.split(" ");
		for (int i = 0; i < splitWords.length; i++) {
			String word = splitWords[i];
			
			word = makeFirstUpper(word);
			
			if(sentence.length()>0) {
				sentence = sentence + " ";
			}
			
			sentence = sentence + word;
		}
		
		if(sentence.contains("Color")) {
			// hack for designer bug which takes Color as type
			sentence = sentence.replace("Color", "Colour");
		}
		
		return sentence;
	}
	
	public static File[] listFiles(String iFilePath) {
		return listFiles(iFilePath, null);
	}
	
	public static File[] listFiles(String iFilePath, FilenameFilter filter) {
		File parent = new File(iFilePath);

		if (parent.exists() && parent.canRead() && parent.isDirectory()) {
			File[] children = parent.listFiles(filter);
			return children;
		}
		
		return new File[0];
	}
	
	public static String hashString(String message) {
		try {
			MessageDigest digest = MessageDigest.getInstance("MD5");
			byte[] hashedBytes = digest.digest(message.getBytes("UTF-8"));
	
			return convertByteArrayToHexString(hashedBytes);
		} catch (Exception ex) {
			throw new RuntimeException("Could not generate hash from String", ex);
		}
	}
	
	public static String convertByteArrayToHexString(byte[] arrayBytes) {
	    StringBuffer stringBuffer = new StringBuffer();
	    for (int i = 0; i < arrayBytes.length; i++) {
	        stringBuffer.append(Integer.toString((arrayBytes[i] & 0xff) + 0x100, 16)
	                .substring(1));
	    }
	    return stringBuffer.toString();
	}
	
	public static Properties loadProperties(String fileName) {
		Properties result = new Properties();
		try {
			Reader reader = new InputStreamReader(new FileInputStream(fileName), "UTF-8"); //$NON-NLS-1$
			result.load(reader);
			reader.close();
		} catch (IOException e) {
			return null;
		}
		return result;
	}

	public static void saveProperties(String iFileName, Properties properties, boolean removeComments) {
		iFileName = fixFileName(iFileName);

		try {
			File f = new File(iFileName);
			if (!f.exists()) {
				f.getParentFile().mkdirs();
			}
			OutputStreamWriter writer = new OutputStreamWriter(new FileOutputStream(iFileName), "UTF-8"); //$NON-NLS-1$
			properties.store(writer, "");
			writer.close();
		} catch (IOException e) {
			throw new RuntimeException(e);
		}

		if(removeComments) {
			List<String> new2List = new ArrayList<String>();
			List<String> file2List = file2List(iFileName);
			for (String line : file2List) {
				if(line.indexOf("#") != 0) {
					new2List.add(line);
				}
			}
			
			Helpers.list2File(iFileName, new2List, "\r\n");
		}
	}
	
	public static void list2File(String absolutePath, List<String> contentOut, String separator) {
		if (contentOut.size() == 0) {
			string2File(absolutePath, "");
			return;
		}

		StringBuffer buffer = new StringBuffer();

		int lineNumber = 1;
		for (String line : contentOut) {
			if (lineNumber > 1) {
				buffer.append(separator);
			}
			buffer.append(line);
			lineNumber++;
		}

		string2File(absolutePath, buffer.toString());
	}

	public static String makeDescription(String name) {
		String description = "";
		
		for (int i = 0; i < name.length(); i++) {
			char n = name.charAt(i);
			
			if(Character.isUpperCase(n)) {
				description = description + " ";
			}
			
			if(i == 0) {
				n = new Character(n).toUpperCase(n);
			}
			description = description + n;
		}

		if(description.contains("Color")) {
			// need a hack as the description with "Color" is taking it as type
			description = description.replace("Color", "Colour");
		}
		return description;
	}

	public static String cutLastS(String name) {
		if(name.charAt(name.length()-1) == 's') {
			name = name.substring(0, name.length() - 1);
		}
		return name;
	}

}
