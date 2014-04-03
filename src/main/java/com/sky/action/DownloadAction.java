package com.sky.action;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.io.InputStream;
import java.io.UnsupportedEncodingException;
import java.net.URLEncoder;

import org.apache.struts2.ServletActionContext;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Controller;

import com.sky.framework.BaseAction;

@Controller
@Scope("prototype")
public class DownloadAction extends BaseAction {

	private String fujianPath;
	private String fujianYuashiMing;

	public InputStream getInputStream() throws FileNotFoundException {
		String targetDirectory = ServletActionContext.getServletContext()
				.getRealPath("/attachment/");
		return new FileInputStream(new File(targetDirectory, fujianPath));
	}

	public String download() throws IOException {
		return SUCCESS;
	}

	public String getFujianPath() {
		return fujianPath;
	}

	public void setFujianPath(String fujianPath) {
		this.fujianPath = fujianPath;
	}

	public String getFujianYuashiMing() throws UnsupportedEncodingException {
		return fujianYuashiMing;
	}

	public void setFujianYuashiMing(String fujianYuashiMing)
			throws UnsupportedEncodingException {
		if (fujianYuashiMing != null) {
			fujianYuashiMing = URLEncoder.encode(fujianYuashiMing, "UTF-8");
		}
		this.fujianYuashiMing = fujianYuashiMing;
	}
}
