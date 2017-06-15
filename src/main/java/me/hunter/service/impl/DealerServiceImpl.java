package me.hunter.service.impl;

import java.util.List;

import me.hunter.model.Dealer;
import me.hunter.service.DealerService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.orm.jpa.JpaTemplate;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class DealerServiceImpl implements DealerService {
	
	@Autowired
	private JpaTemplate jpaTemplate;

	@Override
	@Transactional
	public void save(Dealer entity) {
		jpaTemplate.persist(entity);
	}
	
	@Override
	@Transactional
	public List find(Dealer dealer) {
		String queryString = "select d from Dealer d";
		return jpaTemplate.find(queryString);
	}

	public JpaTemplate getJpaTemplate() {
		return jpaTemplate;
	}

	public void setJpaTemplate(JpaTemplate jpaTemplate) {
		this.jpaTemplate = jpaTemplate;
	}

	

}
