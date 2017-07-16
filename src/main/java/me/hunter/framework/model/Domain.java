package me.hunter.framework.model;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Id;
import javax.persistence.MappedSuperclass;
@MappedSuperclass
public class Domain implements Serializable{
	/**
	 * 
	 */
	private static final long serialVersionUID = 3463601802763972749L;

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
