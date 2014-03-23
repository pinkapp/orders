package com.service;

import java.sql.ResultSet;

import com.dao.DB;
import com.orm.Tzhuanye;

public class liuService
{
	public static String getZhuanyeName(int id)
	{
		String zhuanye_name="";
		
		String sql="select * from t_zhuanye where id="+id;
		Object[] params={};
		DB mydb=new DB();
		try
		{
			mydb.doPstm(sql, params);//进行数据库操作
			ResultSet rs=mydb.getRs();
			rs.next();
			zhuanye_name=rs.getString("name");
			rs.close();
		}
		catch(Exception e)
		{
			e.printStackTrace();
		}
		mydb.closed();
		return zhuanye_name;
	}
	
	public static String getBanjiName(int id)
	{
		String name="";
		
		String sql="select * from t_banji where id="+id;
		Object[] params={};
		DB mydb=new DB();
		try
		{
			mydb.doPstm(sql, params);
			ResultSet rs=mydb.getRs();
			rs.next();
			name=rs.getString("name");
			rs.close();
		}
		catch(Exception e)
		{
			e.printStackTrace();
		}
		mydb.closed();
		return name;
	}
	
	public static String getStuXuehao(int id)
	{
		String xuehao="";
		
		String sql="select * from t_stu where id="+id;
		Object[] params={};
		DB mydb=new DB();
		try
		{
			mydb.doPstm(sql, params);
			ResultSet rs=mydb.getRs();
			rs.next();
			xuehao=rs.getString("xuehao");
			rs.close();
		}
		catch(Exception e)
		{
			e.printStackTrace();
		}
		mydb.closed();
		return xuehao;
	}
	
	
	
	
	
	
	
	
	public static String getKechengName(int id)
	{
		String name="";
		
		String sql="select * from t_kecheng where id="+id;
		Object[] params={};
		DB mydb=new DB();
		try
		{
			mydb.doPstm(sql, params);
			ResultSet rs=mydb.getRs();
			rs.next();
			name=rs.getString("name");
			rs.close();
		}
		catch(Exception e)
		{
			e.printStackTrace();
		}
		mydb.closed();
		return name;
	}
	
	public static String getTeaName(int id)
	{
		String name="";
		
		String sql="select * from t_tea where id="+id;
		Object[] params={};
		DB mydb=new DB();
		try
		{
			mydb.doPstm(sql, params);
			ResultSet rs=mydb.getRs();
			rs.next();
			name=rs.getString("name");
			rs.close();
		}
		catch(Exception e)
		{
			e.printStackTrace();
		}
		mydb.closed();
		return name;
	}

	public static String getJiaoshiName(int id)
	{
		String name="";
		
		String sql="select * from t_jiaoshi where id="+id;
		Object[] params={};
		DB mydb=new DB();
		try
		{
			mydb.doPstm(sql, params);
			ResultSet rs=mydb.getRs();
			rs.next();
			name=rs.getString("name");
			rs.close();
		}
		catch(Exception e)
		{
			e.printStackTrace();
		}
		mydb.closed();
		return name;
	}
	
	public static boolean getTeabyjiaoshihao(String jiaoshihao)
	{
		boolean b=false;
		
		String sql="select * from t_tea where del='no' and bianhao=?";
		Object[] params={jiaoshihao};
		DB mydb=new DB();
		try
		{
			mydb.doPstm(sql, params);
			ResultSet rs=mydb.getRs();
			b=(rs==null||!rs.next()?false:true);
			rs.close();
		}
		catch(Exception e)
		{
			e.printStackTrace();
		}
		mydb.closed();
		return b;
	}
	
	
	public static boolean getStubyxuehao(String xuehao)
	{
		boolean b=false;
		
		String sql="select * from t_stu where del='no' and xuehao=?";
		Object[] params={xuehao};
		DB mydb=new DB();
		try
		{
			mydb.doPstm(sql, params);
			ResultSet rs=mydb.getRs();
			b=(rs==null||!rs.next()?false:true);
			rs.close();
		}
		catch(Exception e)
		{
			e.printStackTrace();
		}
		mydb.closed();
		return b;
	}

}
