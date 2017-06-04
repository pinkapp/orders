package me.hunter.model;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;

import com.sky.framework.model.BizDomain;

@Entity(name="b_role")
public class Role extends BizDomain {
	
	@ManyToMany(cascade = CascadeType.PERSIST, fetch = FetchType.LAZY)
	@JoinTable(name = "b_user_role", joinColumns = { 
			@JoinColumn(name = "role_id") }, 
			inverseJoinColumns = { @JoinColumn(name = "user_id") })
	@JoinColumn(name="user_id")
	private List<User> users;

	public List<User> getUsers() {
		return users;
	}

	public void setUsers(List<User> users) {
		this.users = users;
	}
}
