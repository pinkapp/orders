package com.sky.framework.dao.impl;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpSession;

import org.directwebremoting.WebContext;
import org.directwebremoting.WebContextFactory;
import org.springframework.orm.jpa.support.JpaDaoSupport;
import org.springframework.transaction.annotation.Transactional;

import com.sky.framework.dao.CommonsDao;
import com.sky.model.TAdmin;
import com.sky.model.Tdoc;

public class CommonsDaoImpl extends JpaDaoSupport implements CommonsDao {
	public String login(String userName, String userPw, int userType) {
		String result = "no";

		if (userType == 0)// 系统管理员登陆
		{
			Map<String, Object> params = new HashMap<String, Object>();
			params.put("userName", userName);
			params.put("userPw", userPw);
			String hql = "select admin from TAdmin admin where admin.userName = :userName and admin.userPw = :userPw";
			List users = getJpaTemplate().findByNamedParams(hql, params);
			if (users.isEmpty()) {
				result = "no";
			} else {
				WebContext ctx = WebContextFactory.get();
				HttpSession session = ctx.getSession();
				session.setAttribute("admin", users.get(0));
				session.setAttribute("type", userType);
				result = "yes";
			}
		} else {
			Map<String, Object> params = new HashMap<String, Object>();
			params.put("loginname", userName);
			params.put("loginpw", userPw);
			params.put("type", userType);
			String hql = "select user from Tuser user where user.type = :type and user.loginname = :loginname and user.loginpw = :loginpw";
			List users = getJpaTemplate().findByNamedParams(hql, params);
			if (users.isEmpty()) {
				result = "no";
			} else {
				WebContext ctx = WebContextFactory.get();
				HttpSession session = ctx.getSession();
				session.setAttribute("user", users.get(0));
				session.setAttribute("type", userType);
				result = "yes";
			}
		}
		return result;
	}

	public String adminPwEdit(String userPwNew) {

		WebContext ctx = WebContextFactory.get();
		HttpSession session = ctx.getSession();
		TAdmin admin = (TAdmin) session.getAttribute("admin");
		TAdmin model = getJpaTemplate().find(TAdmin.class, admin.getUserId());
		model.setUserPw(userPwNew);
		getJpaTemplate().merge(model);
		return "yes";
	}

	public List zhuanyeAll() {
		String hql = "select ze from Tzhuanye ze where ze.del = 'no'";
		return getJpaTemplate().find(hql);
	}

	public List banjiAll() {
		String hql = "select bj from Tbanji bj where bj.del = 'no'";
		return getJpaTemplate().find(hql);
	}

	public List stuAll() {
		String hql = "select t from Tstu t where t.del = 'no'";
		return getJpaTemplate().find(hql);
	}

	public List kechengAll() {
		String hql = "select t from Tkecheng t where t.del = 'no'";
		return getJpaTemplate().find(hql);
	}

	public List teaAll() {
		String hql = "select t from Ttea t where t.del = 'no'";
		return getJpaTemplate().find(hql);
	}

	public List gonggaoAll() {
		String hql = "select t from Tgonggao t";
		return getJpaTemplate().find(hql);
	}

	public List newsAll() {
		String hql = "select t from Tnews t";
		return getJpaTemplate().find(hql);
	}

	@Transactional
	public void persist(Object entity) {
		getJpaTemplate().persist(entity);
	}

	@Transactional
	public void merge(Object entity) {
		getJpaTemplate().merge(entity);
	}

	public List zuoyeAll() {
		String hql = "select t from Tdoc t where t.type = 'zuoye' and t.del = 'no'";
		List list = getJpaTemplate().find(hql);
		for (Object o : list) {
			Tdoc doc = (Tdoc) (o);
			doc.getAttachments();
			System.out.println(doc.getAttachments());
		}
		return list;
	}
}
