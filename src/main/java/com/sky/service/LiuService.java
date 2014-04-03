package com.sky.service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.orm.jpa.support.JpaDaoSupport;

import com.sky.model.Tbanji;
import com.sky.model.Tkecheng;
import com.sky.model.Tstu;
import com.sky.model.Ttea;
import com.sky.model.Tzhuanye;

public class LiuService extends JpaDaoSupport {
	public String getZhuanyeName(int id) {
		return getJpaTemplate().find(Tzhuanye.class, id).getName();
	}

	public String getBanjiName(int id) {
		return getJpaTemplate().find(Tbanji.class, id).getName();
	}

	public String getStuXuehao(int id) {
		return getJpaTemplate().find(Tstu.class, id).getXuehao();
	}

	public String getKechengName(int id) {
		return getJpaTemplate().find(Tkecheng.class, id).getName();
	}

	public String getTeaName(int id) {
		return getJpaTemplate().find(Ttea.class, id).getName();
	}

	public String getJiaoshiName(int id) {
		return "";
	}

	public boolean getTeabyjiaoshihao(String jiaoshihao) {
		Map<String, Object> params = new HashMap<String, Object>();
		params.put("bianhao", jiaoshihao);
		String hql = "select t from Ttea t where t.bianhao = :bianhao";
		List list = getJpaTemplate().findByNamedParams(hql, params);
		return !list.isEmpty();
	}

	public boolean getStubyxuehao(String xuehao) {
		Map<String, Object> params = new HashMap<String, Object>();
		params.put("bianhao", xuehao);
		String hql = "select t from Tstu t where t.xuehao = :bianhao";
		List list = getJpaTemplate().findByNamedParams(hql, params);
		return !list.isEmpty();
	}

}
