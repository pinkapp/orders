package com.sky.action;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.List;

import org.json.JSONArray;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Controller;

import com.sky.framework.BaseAction;
import com.sky.model.Account;
import com.sky.service.AccountService;

@Controller
@Scope("prototype")
public class AccountAction extends BaseAction {

	private Integer id;

	private String date;

	public void setDate(String date) {
		this.date = date;
	}

	private String item;

	private Short category;

	private Double money;

	private String note;

	@Autowired
	private AccountService accountService;

	/**
	 *
	 * @return
	 * @throws IOException
	 */
	public String add() throws IOException {
		String result = "";
		int code = accountService.add(date, item, category, money, note);
		result = code + "";
		// result = new JSONObject(code).toString();
		response.setContentType("text/html;charset=utf-8");
		response.setHeader("Cache-Control", "no-cache");
		PrintWriter out = response.getWriter();
		logger.debug(result);
		out.append(result);
		out.close();
		return NONE;
	}

	public String gets() throws IOException {
		String result = "";
		List<Account> list = accountService.gets();
		result = new JSONArray(list).toString();
		response.setContentType("text/html;charset=utf-8");
		response.setHeader("Cache-Control", "no-cache");
		PrintWriter out = response.getWriter();
		out.append(result);
		logger.debug(result);
		out.close();
		return NONE;
	}

	public String getDate() {
		return date;
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getItem() {
		return item;
	}

	public void setItem(String item) {
		this.item = item;
	}

	public Short getCategory() {
		return category;
	}

	public void setCategory(Short category) {
		this.category = category;
	}

	public Double getMoney() {
		return money;
	}

	public void setMoney(Double money) {
		this.money = money;
	}

	public String getNote() {
		return note;
	}

	public void setNote(String note) {
		this.note = note;
	}

}
