package me.hunter.framework.model;

import javax.persistence.Column;
import javax.persistence.Id;
import javax.persistence.MappedSuperclass;

@MappedSuperclass
public abstract class AbstractEntity {
	private Long id;

	@Id
	@javax.persistence.GeneratedValue(generator = "idGenerator")
	@org.hibernate.annotations.GenericGenerator(strategy = "native", name = "idGenerator")
	@Column(name = "ID", unique = true, nullable = false, scale = 0)
	public Long getId() {
		return this.id;
	}

	public void setId(Long id) {
		this.id = id;
	}
}
