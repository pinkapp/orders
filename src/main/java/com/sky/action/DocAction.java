package com.sky.action;

import java.io.IOException;
import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Controller;

import com.sky.framework.BaseAction;
import com.sky.framework.dao.CommonsDao;
import com.sky.model.Attachment;
import com.sky.model.Tdoc;

@Controller
@Scope("prototype")
public class DocAction extends BaseAction {

	@Autowired
	private CommonsDao commonsDao;
	@PersistenceContext
	private EntityManager entityManager;
	private List gonggaoList;
	private List newsList;
	private List zuoyeList;
	private String type;
	private String mingcheng;
	private String fujian;
	private String fujianYuanshiming;
	private String path;
	private Integer attachmentId;

	public String doc() throws IOException {
		if (type.endsWith("zuoyeAdd")) {
			return zuoyeAdd();
		}
		if (type.endsWith("zuoyeMana")) {
			return zuoyeMana();
		}
		if (type.endsWith("zuoyeDel")) {
			return zuoyeDel();
		}
		if (type.endsWith("zuoyeAll")) {
			return zuoyeAll();
		}

		if (type.endsWith("shipinAdd")) {
			return shipinAdd();
		}
		if (type.endsWith("shipinMana")) {
			return shipinMana();
		}
		if (type.endsWith("shipinDel")) {
			return shipinDel();
		}
		if (type.endsWith("shipinAll")) {
			return shipinAll();
		}
		return ERROR;
	}

	private String shipinAll() {
		// TODO Auto-generated method stub
		return null;
	}

	private String shipinDel() {
		// TODO Auto-generated method stub
		return null;
	}

	private String shipinMana() {
		// TODO Auto-generated method stub
		return null;
	}

	private String shipinAdd() {
		// TODO Auto-generated method stub
		return null;
	}

	private String zuoyeAll() {
		// TODO Auto-generated method stub
		return null;
	}

	private String zuoyeDel() {
		// TODO Auto-generated method stub
		return null;
	}

	private String zuoyeMana() {
		zuoyeList = commonsDao.zuoyeAll();
		return "zuoyeMana";
	}

	private String zuoyeAdd() {
		//System.out.println("-------attachmentId:" + attachmentId);
		Attachment attachment = entityManager.find(Attachment.class,
				attachmentId);
		Tdoc doc = new Tdoc(mingcheng, fujian, fujianYuanshiming, "no");
		if (attachment != null) {
			attachment.setDoc(doc);
			doc.addAttachment(attachment);
		}
		doc.setType("zuoye");
		commonsDao.merge(doc);
		message = "操作成功";
		path = "doc.do?type=zuoyeMana";
		return SUCCESS;
	}

	public List getGonggaoList() {
		return gonggaoList;
	}

	public List getNewsList() {
		return newsList;
	}

	public String getType() {
		return type;
	}

	public void setType(String type) {
		this.type = type;
	}

	public List getZuoyeList() {
		return zuoyeList;
	}

	public void setMingcheng(String mingcheng) {
		this.mingcheng = mingcheng;
	}

	public void setFujian(String fujian) {
		this.fujian = fujian;
	}

	public void setFujianYuanshiming(String fujianYuanshiming) {
		this.fujianYuanshiming = fujianYuanshiming;
	}

	public void setPath(String path) {
		this.path = path;
	}

	public void setAttachmentId(Integer attachmentId) {
		this.attachmentId = attachmentId;
	}

	public String getPath() {
		return path;
	}

}
