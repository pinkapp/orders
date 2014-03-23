package com.sky.dao;
import java.util.List;

import org.springframework.orm.jpa.support.JpaDaoSupport;

import com.sky.model.Customer;
public class CustomerDAOJPAImpl extends JpaDaoSupport implements CustomerDAO {
	
	public Customer findById(int id) {
		return getJpaTemplate().find(Customer.class, id);
	}
	
	public Customer add(Customer customer) {
		getJpaTemplate().persist(customer);
		return getJpaTemplate().find(Customer.class, customer.getId());
	}
	@SuppressWarnings("unchecked")
	public List<Customer> list() {
		List<Customer> customers = getJpaTemplate().find("select c from Customer c");
		return customers;
	}
}