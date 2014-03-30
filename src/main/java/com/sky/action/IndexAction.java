package com.sky.action;

import java.io.IOException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Controller;

import com.sky.framework.BaseAction;
import com.sky.framework.dao.CommonsDao;

@Controller
@Scope("prototype")
public class IndexAction extends BaseAction {

	@Autowired
	private CommonsDao commonsDao;
	private List gonggaoList;
	private List newsList;

	public String index() throws IOException {
		gonggaoList = commonsDao.gonggaoAll();
		newsList = commonsDao.newsAll();
		return SUCCESS;
	}

	public List getGonggaoList() {
		return gonggaoList;
	}

	public List getNewsList() {
		return newsList;
	}
}
