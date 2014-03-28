package com.sky.service;

import java.util.List;

import com.sky.model.Account;

public interface AccountService {
	/**
	 * 添加账目
	 *
	 * @param date
	 * @param item
	 * @param category
	 * @param money
	 * @param note
	 * @return
	 */
	int add(String date, String item, Short category, Double money, String note);

	/**
	 *
	 * @return
	 */
	List<Account> gets();

}
