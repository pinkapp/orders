package com.sky.service;

import javax.jws.WebService;

@WebService
public interface PictureService {
	public String upload(String source, String fileName);

	public String download(String key);
}
