package com.sky.framework.dao;

import java.util.List;

public interface CommonsDao{
	
	public String login(String userName, String userPw, int userType);

	public String adminPwEdit(String userPwNew);

	public List zhuanyeAll();

	public List banjiAll();

	public List stuAll() ;

	public List kechengAll() ;

	public List teaAll();
	
	public List gonggaoAll();
	
	public List newsAll();
	
	public List zuoyeAll();
	
	public void save(Object entity);
}
