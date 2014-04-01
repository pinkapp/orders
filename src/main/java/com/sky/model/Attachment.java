package com.sky.model;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name = "t_attachment")
public class Attachment {
	@Id
	@GeneratedValue
	private Integer id;
	private String name;
	private String contentType;
	@ManyToOne(targetEntity = Tdoc.class, cascade = { CascadeType.MERGE,
			CascadeType.PERSIST })
	@JoinColumn(name = "doc_id")
	private Tdoc doc;

	// 保存文件名
	private String savedName;

	public static Attachment create(String name, String contentType,
			String savedName) {
		Attachment attachment = new Attachment();
		attachment.setName(name);
		attachment.setContentType(contentType);
		attachment.setSavedName(savedName);
		return attachment;
	}

	public String getSavedName() {
		return savedName;
	}

	public void setSavedName(String savedName) {
		this.savedName = savedName;
	}

	public String getContentType() {
		return contentType;
	}

	public void setContentType(String contentType) {
		this.contentType = contentType;
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public Tdoc getDoc() {
		return doc;
	}

	public void setDoc(Tdoc doc) {
		this.doc = doc;
	}

}
