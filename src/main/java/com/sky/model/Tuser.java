package com.sky.model;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

import org.hibernate.annotations.GenericGenerator;

@Entity
@Table(name="t_user")
public class Tuser implements Serializable
{
	@Id
	@GeneratedValue(generator = "generator")    
	@GenericGenerator(name = "generator", strategy = "uuid")  
	private String id;
	private String loginname;
	private String loginpw;
	private String xuehao_jiaoshihao;
	private int type;
	
	
	
	public String getId()
	{
		return id;
	}
	public void setId(String id)
	{
		this.id = id;
	}
	public String getLoginname()
	{
		return loginname;
	}
	public void setLoginname(String loginname)
	{
		this.loginname = loginname;
	}
	public String getLoginpw()
	{
		return loginpw;
	}
	public void setLoginpw(String loginpw)
	{
		this.loginpw = loginpw;
	}
	public int getType()
	{
		return type;
	}
	public void setType(int type)
	{
		this.type = type;
	}
	public String getXuehao_jiaoshihao()
	{
		return xuehao_jiaoshihao;
	}
	public void setXuehao_jiaoshihao(String xuehao_jiaoshihao)
	{
		this.xuehao_jiaoshihao = xuehao_jiaoshihao;
	}

}
