package com.sky.action;

import java.io.File;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

import org.apache.commons.io.FileUtils;
import org.apache.struts2.ServletActionContext;
import org.json.JSONArray;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Controller;

import com.sky.framework.BaseAction;
import com.sky.framework.dao.CommonsDao;
import com.sky.model.Attachment;

@Controller
@Scope("prototype")
public class UploadAction extends BaseAction {
	@Autowired
	private CommonsDao commonsDao;
	private List<File> fujian;
	private List<String> fujianFileName;
	private List<String> fujianContentType;
	private String attachments;

	public String upload() throws IOException {
		String targetDirectory = ServletActionContext.getServletContext()
				.getRealPath("/attachment");
		List<Attachment> list  = new ArrayList<Attachment>();
		for (File f : fujian) {
			String targetFileName = UUID.randomUUID().toString();
			File target = new File(targetDirectory, targetFileName);
			FileUtils.copyFile(f, target);
			int index = fujian.indexOf(f);
			Attachment attachment = Attachment.create(
					fujianFileName.get(index), fujianContentType.get(index),
					targetFileName);
			commonsDao.persist(attachment);
			list.add(attachment);
		}
		attachments = new JSONArray(list).toString();
		message = "上传成功";
		return SUCCESS;
	}

	public void setFujian(List<File> fujian) {
		this.fujian = fujian;
	}

	public void setFujianFileName(List<String> fujianFileName) {
		this.fujianFileName = fujianFileName;
	}

	public void setFujianContentType(List<String> fujianContentType) {
		this.fujianContentType = fujianContentType;
	}

	public List<String> getFujianFileName() {
		return fujianFileName;
	}

	public List<String> getFujianContentType() {
		return fujianContentType;
	}

	public String getAttachments() {
		return attachments;
	}

	

}
