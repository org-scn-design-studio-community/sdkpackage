package org.scn.community.utils;

import java.io.BufferedWriter;
import java.io.ByteArrayInputStream;
import java.io.ByteArrayOutputStream;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStreamWriter;
import java.io.UnsupportedEncodingException;
import java.io.Writer;
import java.nio.charset.Charset;
import java.util.ArrayList;
import java.util.List;

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
}
