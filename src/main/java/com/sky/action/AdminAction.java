package com.sky.action;

import java.io.IOException;
import java.io.PrintWriter;
import java.sql.ResultSet;
import java.util.ArrayList;
import java.util.Date;
import java.util.LinkedHashMap;
import java.util.List;
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
import com.sky.model.TAdmin;
import com.sky.model.Tuser;
import com.sky.service.LiuService;

/**
 * 
 * @author HuangDeCai
 * 
 */
@Controller
@Scope("prototype")
public class AdminAction extends BaseAction {
	@Autowired
	private LiuService liuService;
	@Autowired
	private CommonsDao commonsDao;
	List adminList;
	private String userName;
	private String userPw;
	private String userId;
	private String type;
	private String path;

	/**
	 *
	 */
	private static final long serialVersionUID = 1L;

	public String admin() {

		if (type.endsWith("adminMana")) {
			return adminMana();
		}
		if (type.endsWith("adminAdd")) {
			return adminAdd();
		}
		if (type.endsWith("adminDel")) {
			return adminDel();
		}
		return NONE;
	}

	public String adminMana() {

		adminList = commonsDao.findAdminAll();
		return "adminMana";
	}

	public String adminAdd() {
		TAdmin admin = new TAdmin();
		admin.setUserName(userName);
		admin.setUserPw(userPw);
		path = "admin?type=adminMana";
		commonsDao.persist(admin);

		return SUCCESS;

	}

	public String adminDel() {
		message = "操作成功";
		path = "admin?type=adminMana";
		String targetURL = "/common/success.jsp";
		return SUCCESS;
	}

	public void setType(String type) {
		this.type = type;
	}

	public List getAdminList() {
		return adminList;
	}

}
