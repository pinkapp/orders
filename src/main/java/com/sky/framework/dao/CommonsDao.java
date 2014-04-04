package com.sky.framework.dao;

import java.util.List;

import com.sky.model.Attachment;

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
	
	public void persist(Object entity);
	
	public void merge(Object entity);
	
	public void remove(Object entity);

	public List findZuoyeAll();

	public List findAdminAll();

}
