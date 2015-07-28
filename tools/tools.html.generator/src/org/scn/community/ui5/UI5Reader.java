package org.scn.community.ui5;

import javax.xml.stream.XMLStreamException;
import javax.xml.stream.XMLStreamReader;

public class UI5Reader {

	protected boolean hasNextTag(XMLStreamReader reader) {
		try {
			return reader.hasNext();
		} catch (XMLStreamException e) {
			// TODO Auto-generated catch block
	
		}
		return false;
	}
	
	protected void readNextTag(XMLStreamReader reader) {
		try {
			reader.nextTag();
		} catch (XMLStreamException e) {
			// TODO Auto-generated catch block
	
		}
	}
	
	protected boolean isEnd(XMLStreamReader reader) {
		if(reader.getEventType() == XMLStreamReader.END_DOCUMENT) {
			return true;
		}
		return false;
	}
	
	protected boolean isChar(XMLStreamReader reader) {
		if(reader.getEventType() == XMLStreamReader.CHARACTERS) {
			return true;
		}
		return false;
	}

}
