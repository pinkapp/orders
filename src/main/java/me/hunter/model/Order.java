package me.hunter.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import me.hunter.framework.model.BizDomain;

@Entity
@Table(name="b_order")
public class Order extends BizDomain {
	
	@Column(name = "code")
	private String code;
	
	@Column(name = "order_status")
	private String orderStatus;
	
	@ManyToOne
	@JoinColumn(name = "customer_id")
	private User customer;
	
	@ManyToOne
	@JoinColumn(name = "dealer_id")
	private Dealer dealer;

	public String getCode() {
		return code;
	}

	public void setCode(String code) {
		this.code = code;
	}

	public String getOrderStatus() {
		return orderStatus;
	}

	public void setOrderStatus(String orderStatus) {
		this.orderStatus = orderStatus;
	}

	public User getCustomer() {
		return customer;
	}

	public void setCustomer(User customer) {
		this.customer = customer;
	}

	public Dealer getDealer() {
		return dealer;
	}

	public void setDealer(Dealer dealer) {
		this.dealer = dealer;
	}
	
	
}
