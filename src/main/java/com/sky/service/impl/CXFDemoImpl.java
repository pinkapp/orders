package com.sky.service.impl;
import javax.jws.WebService;

import com.sky.dao.CustomerDAO;
import com.sky.model.Customer;
import com.sky.service.CXFDemo;

@WebService()
public class CXFDemoImpl implements CXFDemo {
	private CustomerDAO customerDAO;
    public CustomerDAO getCustomerDAO() {
		return customerDAO;
	}
	public void setCustomerDAO(CustomerDAO customerDAO) {
		this.customerDAO = customerDAO;
	}
	public String sayHello(String foo) {
    	customerDAO.add(new Customer());
        return "hello "+foo;
    }

}