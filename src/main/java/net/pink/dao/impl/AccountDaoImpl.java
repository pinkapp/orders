package net.pink.dao.impl;

import java.util.List;

import net.pink.dao.AccountDao;
import net.pink.model.Account;

import org.springframework.orm.jpa.support.JpaDaoSupport;
import org.springframework.stereotype.Repository;

//@Repository
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
