package com.action;

import java.io.IOException;
import java.sql.ResultSet;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletConfig;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.dao.DB;
import com.orm.Tdoc;
import com.orm.Tnews;

public class doc_servlet extends HttpServlet
{
	public void service(HttpServletRequest req,HttpServletResponse res)throws ServletException, IOException 
	{
        String type=req.getParameter("type");
		
		
		if(type.endsWith("zuoyeAdd"))
		{
			zuoyeAdd(req, res);
		}
		if(type.endsWith("zuoyeMana"))
		{
			zuoyeMana(req, res);
		}
		if(type.endsWith("zuoyeDel"))
		{
			zuoyeDel(req, res);
		}
		if(type.endsWith("zuoyeAll"))
		{
			zuoyeAll(req, res);
		}
		
		if(type.endsWith("shipinAdd"))
		{
			shipinAdd(req, res);
		}
		if(type.endsWith("shipinMana"))
		{
			shipinMana(req, res);
		}
		if(type.endsWith("shipinDel"))
		{
			shipinDel(req, res);
		}
		if(type.endsWith("shipinAll"))
		{
			shipinAll(req, res);
		}
	}
	
	
	public void zuoyeAdd(HttpServletRequest req,HttpServletResponse res)
	{
		String id=String.valueOf(new Date().getTime());
		String mingcheng=req.getParameter("mingcheng");
		System.out.println(mingcheng+"^^^");
		String fujian=req.getParameter("fujian");
		
		String fujianYuanshiming=req.getParameter("fujianYuanshiming");
		String type="zuoye";
		String del="no";
		
		String sql="insert into t_doc values(?,?,?,?,?,?)";
		Object[] params={id,mingcheng,fujian,fujianYuanshiming,type,del};
		DB mydb=new DB();
		mydb.doPstm(sql, params);
		mydb.closed();
		
		req.setAttribute("message", "操作成功");
		req.setAttribute("path", "doc?type=zuoyeMana");
		
        String targetURL = "/common/success.jsp";
		dispatch(targetURL, req, res);
        
	}
	
	
	public void zuoyeDel(HttpServletRequest req,HttpServletResponse res)
	{
		String id=req.getParameter("id");
		
		String sql="delete from t_doc where id=?";
		Object[] params={id};
		DB mydb=new DB();
		mydb.doPstm(sql, params);
		mydb.closed();
		
		req.setAttribute("message", "操作成功");
		req.setAttribute("path", "doc?type=zuoyeMana");
		
        String targetURL = "/common/success.jsp";
		dispatch(targetURL, req, res);
	}

	public void zuoyeMana(HttpServletRequest req,HttpServletResponse res) throws ServletException, IOException
	{
		List zuoyeList=new ArrayList();
		String sql="select * from t_doc where type='zuoye'";
		Object[] params={};
		DB mydb=new DB();
		try
		{
			mydb.doPstm(sql, params);
			ResultSet rs=mydb.getRs();
			while(rs.next())
			{
				Tdoc zuoye=new Tdoc();
				
				zuoye.setId(rs.getString("id"));
				zuoye.setMingcheng(rs.getString("mingcheng"));
				zuoye.setFujian(rs.getString("fujian"));
				zuoye.setFujianYuanshiming(rs.getString("fujianYuanshiming"));
				
				zuoyeList.add(zuoye);
		    }
			rs.close();
		}
		catch(Exception e)
		{
			e.printStackTrace();
		}
		mydb.closed();
		
		req.setAttribute("zuoyeList", zuoyeList);
		req.getRequestDispatcher("qiantai/zuoye/zuoyeMana.jsp").forward(req, res);
	}
	
	
	public void zuoyeAll(HttpServletRequest req,HttpServletResponse res) throws ServletException, IOException
	{
		List zuoyeList=new ArrayList();
		String sql="select * from t_doc where type='zuoye'";
		Object[] params={};
		DB mydb=new DB();
		try
		{
			mydb.doPstm(sql, params);
			ResultSet rs=mydb.getRs();
			while(rs.next())
			{
				Tdoc zuoye=new Tdoc();
				
				zuoye.setId(rs.getString("id"));
				zuoye.setMingcheng(rs.getString("mingcheng"));
				zuoye.setFujian(rs.getString("fujian"));
				zuoye.setFujianYuanshiming(rs.getString("fujianYuanshiming"));
				
				zuoyeList.add(zuoye);
		    }
			rs.close();
		}
		catch(Exception e)
		{
			e.printStackTrace();
		}
		mydb.closed();
		
		req.setAttribute("zuoyeList", zuoyeList);
		req.getRequestDispatcher("qiantai/zuoye/zuoyeAll.jsp").forward(req, res);
	}
	
	
	
	public void shipinAdd(HttpServletRequest req,HttpServletResponse res)
	{
		String id=String.valueOf(new Date().getTime());
		String mingcheng=req.getParameter("mingcheng");
		String fujian=req.getParameter("fujian");
		
		String fujianYuanshiming=req.getParameter("fujianYuanshiming");
		String type="shipin";
		String del="no";
		
		String sql="insert into t_doc values(?,?,?,?,?,?)";
		Object[] params={id,mingcheng,fujian,fujianYuanshiming,type,del};
		DB mydb=new DB();
		mydb.doPstm(sql, params);
		mydb.closed();
		
		req.setAttribute("message", "操作成功");
		req.setAttribute("path", "doc?type=shipinMana");
		
        String targetURL = "/common/success.jsp";
		dispatch(targetURL, req, res);
        
	}
	
	
	public void shipinDel(HttpServletRequest req,HttpServletResponse res)
	{
		String id=req.getParameter("id");
		
		String sql="delete from t_doc where id=?";
		Object[] params={id};
		DB mydb=new DB();
		mydb.doPstm(sql, params);
		mydb.closed();
		
		req.setAttribute("message", "操作成功");
		req.setAttribute("path", "doc?type=shipinMana");
		
        String targetURL = "/common/success.jsp";
		dispatch(targetURL, req, res);
	}

	public void shipinMana(HttpServletRequest req,HttpServletResponse res) throws ServletException, IOException
	{
		List shipinList=new ArrayList();
		String sql="select * from t_doc where type='shipin'";
		Object[] params={};
		DB mydb=new DB();
		try
		{
			mydb.doPstm(sql, params);
			ResultSet rs=mydb.getRs();
			while(rs.next())
			{
				Tdoc shipin=new Tdoc();
				
				shipin.setId(rs.getString("id"));
				shipin.setMingcheng(rs.getString("mingcheng"));
				shipin.setFujian(rs.getString("fujian"));
				shipin.setFujianYuanshiming(rs.getString("fujianYuanshiming"));
				
				shipinList.add(shipin);
		    }
			rs.close();
		}
		catch(Exception e)
		{
			e.printStackTrace();
		}
		mydb.closed();
		
		req.setAttribute("shipinList", shipinList);
		req.getRequestDispatcher("admin/shipin/shipinMana.jsp").forward(req, res);
	}
	
	
	public void shipinAll(HttpServletRequest req,HttpServletResponse res) throws ServletException, IOException
	{
		List shipinList=new ArrayList();
		String sql="select * from t_doc where type='shipin'";
		Object[] params={};
		DB mydb=new DB();
		try
		{
			mydb.doPstm(sql, params);
			ResultSet rs=mydb.getRs();
			while(rs.next())
			{
				Tdoc shipin=new Tdoc();
				
				shipin.setId(rs.getString("id"));
				shipin.setMingcheng(rs.getString("mingcheng"));
				shipin.setFujian(rs.getString("fujian"));
				shipin.setFujianYuanshiming(rs.getString("fujianYuanshiming"));
				
				shipinList.add(shipin);
		    }
			rs.close();
		}
		catch(Exception e)
		{
			e.printStackTrace();
		}
		mydb.closed();
		
		req.setAttribute("shipinList", shipinList);
		req.getRequestDispatcher("qiantai/shipin/shipinAll.jsp").forward(req, res);
	}
	
	
	public void dispatch(String targetURI,HttpServletRequest request,HttpServletResponse response) 
	{
		RequestDispatcher dispatch = getServletContext().getRequestDispatcher(targetURI);
		try 
		{
		    dispatch.forward(request, response);
		    return;
		} 
		catch (ServletException e) 
		{
                    e.printStackTrace();
		} 
		catch (IOException e) 
		{
			
		    e.printStackTrace();
		}
	}
	public void init(ServletConfig config) throws ServletException 
	{
		super.init(config);
	}
	
	public void destroy() 
	{
		
	}
}
