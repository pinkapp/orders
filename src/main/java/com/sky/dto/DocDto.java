package com.sky.dto;

import java.util.Set;

import com.sky.framework.dto.CommonsDto;
import com.sky.model.Attachment;
import com.sky.model.Tdoc;

public class DocDto extends CommonsDto {
	private String id;
	private String attachmentName;
	private String attachmentSavedName;

	public DocDto() {
		super();
	}

	public DocDto(Tdoc doc) {
		this.id = doc.getId();
		setName(doc.getMingcheng());
		Set<Attachment> attachments = doc.getAttachments();
		if (!attachments.isEmpty()) {
			Attachment attachment = attachments.iterator().next();
			this.attachmentName = attachment.getName();
			this.attachmentSavedName = attachment.getSavedName();
		}

	}

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getAttachmentName() {
		return attachmentName;
	}

	public void setAttachmentName(String attachmentName) {
		this.attachmentName = attachmentName;
	}

	public String getAttachmentSavedName() {
		return attachmentSavedName;
	}

	public void setAttachmentSavedName(String attachmentSavedName) {
		this.attachmentSavedName = attachmentSavedName;
	}
}
