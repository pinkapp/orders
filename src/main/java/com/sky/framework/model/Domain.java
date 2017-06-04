package com.sky.framework.model;

import javax.persistence.Column;
import javax.persistence.Id;
import javax.persistence.MappedSuperclass;
@MappedSuperclass
public class Domain{
	@Id
	@javax.persistence.GeneratedValue(generator = "idGenerator")
	@org.hibernate.annotations.GenericGenerator(strategy = "native", name = "idGenerator")
	private Long id;
	
	@Column(name="name")
	private String name;

	public Long getId() {
		return id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	
}
