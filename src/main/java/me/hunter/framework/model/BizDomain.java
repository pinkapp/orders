package me.hunter.framework.model;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.MappedSuperclass;

import me.hunter.model.User;

@MappedSuperclass
public class BizDomain extends Domain {
	
	@Column(name="create_date")
	private Date createDate;
	
	@JoinColumn(name="creator_id")
	@ManyToOne
	private User creator;
	
	@Column(name="note",length=1000)
	private String note;
	
	@Column(name="if_deleted")
	private boolean ifDeleted = false;

	public Date getCreateDate() {
		return createDate;
	}

	public void setCreateDate(Date createDate) {
		this.createDate = createDate;
	}

	public User getCreator() {
		return creator;
	}

	public void setCreator(User creator) {
		this.creator = creator;
	}

	public String getNote() {
		return note;
	}

	public void setNote(String note) {
		this.note = note;
	}

	public boolean isIfDeleted() {
		return ifDeleted;
	}

	public void setIfDeleted(boolean ifDeleted) {
		this.ifDeleted = ifDeleted;
	}
	
}
