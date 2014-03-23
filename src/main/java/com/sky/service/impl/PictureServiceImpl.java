package com.sky.service.impl;

import java.io.File;
import java.io.FileOutputStream;

import javax.jws.WebService;

import org.apache.commons.codec.binary.Base64;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.sky.service.PictureService;

@WebService
public class PictureServiceImpl implements PictureService {
	Logger LOG = LoggerFactory.getLogger(PictureServiceImpl.class);

	@Override
	public String upload(String source, String fileName) {
		FileOutputStream fos = null;
		try {
			String userHome = System.getProperty("user.home");
			String separator = System.getProperty("file.separator");
			String toDir = String.format("%s%sresources", userHome, separator);
			if (LOG.isInfoEnabled()) {
				LOG.info(toDir);
			}
			byte[] buffer = new Base64().decode(source);
			File destDir = new File(toDir);
			if (!destDir.exists())
				destDir.mkdirs();
			fos = new FileOutputStream(new File(destDir, fileName));
			fos.write(buffer);
			fos.flush();
			fos.close();
			return "上传图片成功！" + "图片路径为：" + toDir;
		} catch (Exception e) {
			e.printStackTrace();
		}
		return "上传图片失败！";
	}

	@Override
	public String download(String key) {
		// TODO Auto-generated method stub
		return null;
	}

}
