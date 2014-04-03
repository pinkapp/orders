package com.sky.action;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.Date;
import java.util.LinkedHashMap;
import java.util.Map;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Controller;

import com.sky.framework.BaseAction;
import com.sky.framework.constants.Constants;
import com.sky.framework.dao.CommonsDao;
import com.sky.model.Tuser;
import com.sky.service.LiuService;

/**
 *
 * @author HuangDeCai
 *
 */
@Controller
@Scope("prototype")
public class UserAction extends BaseAction {
	@Autowired
	private LiuService liuService;
	@Autowired
	private CommonsDao commonsDao;
	
	private String type;

	/**
	 *
	 */
	private static final long serialVersionUID = 1L;

	public String user(){
		
		
		if(type.endsWith("userReg"))
		{
		 return	userReg();
		}
		if(type.endsWith("userLogout"))
		{
			return userLogout();
		}
		return NONE;
	}

	public String userReg()
	{
		int type=Integer.parseInt(request.getParameter("type1"));
		String xuehao_jiaoshihao=request.getParameter("xuehao_jiaoshihao");
		String id=String.valueOf(new Date().getTime());
		String loginname=request.getParameter("loginname");
		String loginpw=request.getParameter("loginpw");
		
		if(type==1)
		{
			if(liuService.getTeabyjiaoshihao(xuehao_jiaoshihao)==false)
			{
				request.setAttribute("msg", "输入的教师号不正确。没有此老师");
			}
			if(liuService.getTeabyjiaoshihao(xuehao_jiaoshihao)==true)
			{
				Tuser user = new Tuser();
				user.setLoginname(loginname);
				user.setLoginpw(loginpw);
				user.setXuehao_jiaoshihao(xuehao_jiaoshihao);
				user.setType(1);
				commonsDao.persist(user);
				request.setAttribute("msg", "注册成功,你的用户名是"+loginname+"&nbsp;&nbsp;&nbsp;&nbsp;密码是："+loginpw);
			}
		}
		
		if(type==2)
		{
			if(liuService.getStubyxuehao(xuehao_jiaoshihao)==false)
			{
				request.setAttribute("msg", "输入的学号不正确。没有此学生");
			}
			if(liuService.getStubyxuehao(xuehao_jiaoshihao)==true)
			{
				Tuser user = new Tuser();
				user.setLoginname(loginname);
				user.setLoginpw(loginpw);
				user.setXuehao_jiaoshihao(xuehao_jiaoshihao);
				user.setType(2);
				commonsDao.persist(user);
				
				request.setAttribute("msg", "注册成功,你的用户名是："+loginname+"&nbsp;&nbsp;&nbsp;&nbsp;密码是："+loginpw);
			}
		}
		
		
		
        String targetURL = "/common/add_success.jsp";
        return "regSuccess";
	}
	
	
	
	public String userLogout()
	{
		request.getSession().setAttribute("user", null);
		String targetURL = "/qiantai/default.jsp";
		return "logout";	
	}

	public void setType(String type) {
		this.type = type;
	}
	
	
}
