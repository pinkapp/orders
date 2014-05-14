package com.sky.model;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.List;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.OrderBy;

import com.sky.framework.model.AbstractEntity;

/**
 * 任务
 * 
 * @author hdc
 * 
 */
@Entity
public class Task extends AbstractEntity implements java.io.Serializable {
	private Task parent;
	// 名称
	private String name;
	// 权重
	private BigDecimal weight;
	// 说明
	private String description;
	// 子任务
	private List<Task> children = new ArrayList<Task>();

	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "PARENT_ID")
	public Task getParent() {
		return parent;
	}

	public void setParent(Task parent) {
		this.parent = parent;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public BigDecimal getWeight() {
		return weight;
	}

	public void setWeight(BigDecimal weight) {
		this.weight = weight;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	@OneToMany(fetch = FetchType.EAGER, mappedBy = "parent")
	@OrderBy(value = "id")
	@org.hibernate.annotations.Cascade(value = org.hibernate.annotations.CascadeType.ALL)
	public List<Task> getChildren() {
		return children;
	}

	public void setChildren(List<Task> children) {
		this.children = children;
	}
}
