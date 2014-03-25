package com.service;

import java.sql.ResultSet;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpSession;

import org.directwebremoting.WebContext;
import org.directwebremoting.WebContextFactory;
import org.springframework.orm.jpa.support.JpaDaoSupport;

import com.dao.DB;
import com.orm.TAdmin;
import com.orm.Tbanji;
import com.orm.Tkecheng;
import com.orm.Tstu;
import com.orm.Ttea;
import com.orm.Tzhuanye;

public class loginService extends JpaDaoSupport
{
	public String login(String userName,String userPw,int userType)
	{
		String result="no";
		
		if(userType==0)//系统管理员登陆
		{
			Map<String, Object> params = new HashMap<String, Object>();
			params.put("userName", userName);
			params.put("userPw", userPw);
			String hql = "select admin from TAdmin admin where admin.userName = :userName and admin.userPw = :userPw";
			List users = getJpaTemplate().findByNamedParams(hql, params);
			if(users.isEmpty()){
				result = "no";
			}else{
				WebContext ctx = WebContextFactory.get(); 
				HttpSession session=ctx.getSession(); 
	            session.setAttribute("user", users.get(0));
				result = "yes";
			}
		}else{
			Map<String, Object> params = new HashMap<String, Object>();
			params.put("loginname", userName);
			params.put("loginpw", userPw);
			params.put("type", userType);
			String hql = "select user from Tuser user where user.type = :type and user.loginname = :loginname and user.loginpw = :loginpw";
			List users = getJpaTemplate().findByNamedParams(hql, params);
			if(users.isEmpty()){
				result = "no";
			}else{
				WebContext ctx = WebContextFactory.get(); 
				HttpSession session=ctx.getSession(); 
	            session.setAttribute("user", users.get(0));
				result = "yes";
			}
		}
		return result;
	}

    public String adminPwEdit(String userPwNew)
    {
		
   	try 
		{
			Thread.sleep(700);
		} 
		catch (InterruptedException e)
		{
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		WebContext ctx = WebContextFactory.get(); 
		HttpSession session=ctx.getSession(); 
		TAdmin admin=(TAdmin)session.getAttribute("admin");	
		String sql="update t_admin set userPw=? where userId=?";
		Object[] params={userPwNew,admin.getUserId()
				};
		DB mydb=new DB();
		mydb.doPstm(sql, params);
		
		return "yes";
   }
    
  
    

    public List zhuanyeAll()
    {
    	try
		{
			Thread.sleep(700);
		} catch (InterruptedException e)
		{
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
    	
    	List zhuanyeList=new ArrayList();
		String sql="select * from t_zhuanye where del='no'";
		Object[] params={};
		DB mydb=new DB();
		try
		{
			mydb.doPstm(sql, params);
			ResultSet rs=mydb.getRs();
			while(rs.next())
			{
				Tzhuanye zhuanye=new Tzhuanye();
				zhuanye.setId(rs.getInt("id"));
				zhuanye.setName(rs.getString("name"));
				zhuanye.setJieshao(rs.getString("jieshao"));
				zhuanyeList.add(zhuanye);
		    }
			rs.close();
		}
		catch(Exception e)
		{
			e.printStackTrace();
		}
		mydb.closed();
		return zhuanyeList;
    }
    
    
    public List banjiAll()
    {
    	try
		{
			Thread.sleep(700);
		} catch (InterruptedException e)
		{
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
    	
    	List banjiList=new ArrayList();
		String sql="select * from t_banji where del='no'";
		Object[] params={};
		DB mydb=new DB();
		try
		{
			mydb.doPstm(sql, params);
			ResultSet rs=mydb.getRs();
			while(rs.next())
			{
				Tbanji banji=new Tbanji();
				banji.setId(rs.getInt("id"));
				banji.setName(rs.getString("name"));
				banjiList.add(banji);
		    }
			rs.close();
		}
		catch(Exception e)
		{
			e.printStackTrace();
		}
		mydb.closed();
		return banjiList;
    }


    public List stuAll()
    {
    	try
		{
			Thread.sleep(700);
		} catch (InterruptedException e)
		{
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
    	
    	List stuList=new ArrayList();
		String sql="select * from t_stu where del='no'";
		Object[] params={};
		DB mydb=new DB();
		try
		{
			mydb.doPstm(sql, params);
			ResultSet rs=mydb.getRs();
			while(rs.next())
			{
				Tstu stu=new Tstu();
				stu.setId(rs.getInt("id"));
				stu.setXuehao(rs.getString("xuehao"));
				stuList.add(stu);
		    }
			rs.close();
		}
		catch(Exception e)
		{
			e.printStackTrace();
		}
		mydb.closed();
		return stuList;
    }

    public List kechengAll()
    {
    	try
		{
			Thread.sleep(700);
		} catch (InterruptedException e)
		{
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
    	
    	List kechengList=new ArrayList();
		String sql="select * from t_kecheng where del='no'";
		Object[] params={};
		DB mydb=new DB();
		try
		{
			mydb.doPstm(sql, params);
			ResultSet rs=mydb.getRs();
			while(rs.next())
			{
				Tkecheng kecheng=new Tkecheng();
				kecheng.setId(rs.getInt("id"));
				kecheng.setName(rs.getString("name"));
				kechengList.add(kecheng);
		    }
			rs.close();
		}
		catch(Exception e)
		{
			e.printStackTrace();
		}
		mydb.closed();
		return kechengList;
    }
    
    
    public List teaAll()
    {
    	try
		{
			Thread.sleep(700);
		} catch (InterruptedException e)
		{
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
    	
    	List teaList=new ArrayList();
		String sql="select * from t_tea where del='no'";
		Object[] params={};
		DB mydb=new DB();
		try
		{
			mydb.doPstm(sql, params);
			ResultSet rs=mydb.getRs();
			while(rs.next())
			{
				Ttea tea=new Ttea();
				tea.setId(rs.getInt("id"));
				tea.setName(rs.getString("name"));
				teaList.add(tea);
		    }
			rs.close();
		}
		catch(Exception e)
		{
			e.printStackTrace();
		}
		mydb.closed();
		return teaList;
    }
}
