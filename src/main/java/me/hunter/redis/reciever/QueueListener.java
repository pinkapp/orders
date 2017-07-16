package me.hunter.redis.reciever;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import org.springframework.transaction.annotation.Transactional;

import me.hunter.model.Dealer;

public class QueueListener<Object> implements RedisQueueListener<Object> {
	@PersistenceContext
	private EntityManager em;

	@Transactional
	@Override
	public void onMessage(Object value) {
		Dealer dealer = (Dealer) value;
		em.persist(dealer);
	}

}