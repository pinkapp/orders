package me.hunter.model;

import java.math.BigDecimal;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;

import com.sky.framework.model.Domain;

@Entity
@Table(name = "b_dealer")
public class Dealer extends Domain {
	
	@Column(name = "lat", precision = 23, scale = 18)
	private BigDecimal lat;
	
	@Column(name = "lng", precision = 23, scale = 18)
	private BigDecimal lng;

	@Column(name = "disable")
	private boolean disable = false;
	
	@Column(name="if_deleted")
	private boolean ifDeleted = false;
	
	/**
	 * BASE64 code
	 */
	@Column(name="ico", length = 10000)
	private String icon;
	
	public BigDecimal getLat() {
		return lat;
	}

	public void setLat(BigDecimal lat) {
		this.lat = lat;
	}

	public BigDecimal getLng() {
		return lng;
	}

	public void setLng(BigDecimal lng) {
		this.lng = lng;
	}

	public boolean isDisable() {
		return disable;
	}

	public void setDisable(boolean disable) {
		this.disable = disable;
	}

	public boolean isIfDeleted() {
		return ifDeleted;
	}

	public void setIfDeleted(boolean ifDeleted) {
		this.ifDeleted = ifDeleted;
	}

	public String getIcon() {
		return icon;
	}

	public void setIcon(String icon) {
		this.icon = icon;
	}
	
	
}
