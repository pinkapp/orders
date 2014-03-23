package com.sky.dao;
import java.util.List;

import javax.jws.WebService;

import com.sky.model.Customer;
@WebService()
public interface CustomerDAO {
	
	Customer findById(int id);
	
	Customer add(Customer customer);
	
	List<Customer> list();
}