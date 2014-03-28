package com.sky.dao;

import java.util.List;

import org.springframework.orm.jpa.support.JpaDaoSupport;

import com.sky.model.Account;

public class AccountDaoImpl extends JpaDaoSupport implements AccountDao {

	public void update(Account card) {
		getJpaTemplate().merge(card);
	}

	public void save(Account card) {
		getJpaTemplate().persist(card);
	}

	public void delete(Account card) {
		getJpaTemplate().remove(card);
	}

	public Account get(Integer id) {
		return (Account) getJpaTemplate().find(Account.class, id);
	}

	public Account load(Integer id) {
		return (Account) getJpaTemplate().find(Account.class, id);
	}

	public List<Account> list() {
		return getJpaTemplate().find("select a from Account");
	}

}
