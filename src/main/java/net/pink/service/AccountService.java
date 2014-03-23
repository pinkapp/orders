package net.pink.service;

import java.util.List;

import net.pink.model.Account;

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
