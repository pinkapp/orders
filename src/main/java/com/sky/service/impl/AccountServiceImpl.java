package com.sky.service.impl;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.sky.dao.AccountDao;
import com.sky.model.Account;
import com.sky.service.AccountService;

@Transactional
@Service
public class AccountServiceImpl implements AccountService {
	@Autowired
	private AccountDao accountDao;

	public int add(String date, String item, Short category, Double money,
			String note) {
		if (date == null) {
			return 2;
		}
		if (item == null) {
			return 3;
		}
		if (category == null) {
			return 4;
		}
		if (money == null) {
			return 5;
		}
		Account account = new Account(date, item, category, money, note);
		try {
			accountDao.save(account);
			return 1;
		} catch (Exception e) {
			e.printStackTrace();
		}
		return 0;
	}

	public List<Account> gets() {
		List<Account> result = new ArrayList<Account>();
		try {
			result= accountDao.list();
		} catch (RuntimeException e) {
			e.printStackTrace();
		}
		return result;
	}

}
