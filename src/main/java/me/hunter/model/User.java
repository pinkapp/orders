package me.hunter.model;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;

import com.sky.framework.model.BizDomain;

@Entity(name = "b_user")
public class User extends BizDomain {

	@Column(name = "passwd")
	private String passwd;

	@Column(name = "email")
	private String email;

	@Column(name = "if_email_validated")
	private boolean ifEmailValidated = false;

	@Column(name = "if_phone_validated")
	private boolean ifPhoneValidated = false;

	@Column(name = "phone")
	private String phone;

	@Column(name = "disable")
	private boolean disable = false;

	@Column(name = "login_ip")
	private String loginIp;

	@Column(name = "login_date")
	private String loginDate;

	@ManyToMany(cascade = CascadeType.PERSIST, fetch = FetchType.LAZY)
	@JoinTable(name = "b_user_role", joinColumns = { 
			@JoinColumn(name = "user_id") }, 
			inverseJoinColumns = { @JoinColumn(name = "role_id") })
	@JoinColumn(name = "role_id")
	private List<Role> roles;
	
	@ManyToOne
	@JoinColumn(name = "user_type_id")
	private UserType userType;

	public String getPasswd() {
		return passwd;
	}

	public void setPasswd(String passwd) {
		this.passwd = passwd;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public boolean isIfEmailValidated() {
		return ifEmailValidated;
	}

	public void setIfEmailValidated(boolean ifEmailValidated) {
		this.ifEmailValidated = ifEmailValidated;
	}

	public boolean isIfPhoneValidated() {
		return ifPhoneValidated;
	}

	public void setIfPhoneValidated(boolean ifPhoneValidated) {
		this.ifPhoneValidated = ifPhoneValidated;
	}

	public String getPhone() {
		return phone;
	}

	public void setPhone(String phone) {
		this.phone = phone;
	}

	public boolean isDisable() {
		return disable;
	}

	public void setDisable(boolean disable) {
		this.disable = disable;
	}

	public String getLoginIp() {
		return loginIp;
	}

	public void setLoginIp(String loginIp) {
		this.loginIp = loginIp;
	}

	public String getLoginDate() {
		return loginDate;
	}

	public void setLoginDate(String loginDate) {
		this.loginDate = loginDate;
	}

	public List<Role> getRoles() {
		return roles;
	}

	public void setRoles(List<Role> roles) {
		this.roles = roles;
	}

	public UserType getUserType() {
		return userType;
	}

	public void setUserType(UserType userType) {
		this.userType = userType;
	}
	
	

}
