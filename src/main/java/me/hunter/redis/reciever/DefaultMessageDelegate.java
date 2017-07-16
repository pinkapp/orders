package me.hunter.redis.reciever;

import java.io.Serializable;
import java.util.Map;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import org.springframework.transaction.annotation.Transactional;

import me.hunter.model.Dealer;

public class DefaultMessageDelegate implements MessageDelegate {
	@PersistenceContext
	private EntityManager em;

	@Override
	public void handleMessage(String message) {
		System.out.println("d:" + message);
	}

	@Override
	public void handleMessage(Map message) {
		System.out.println("map" + message);

	}

	@Override
	public void handleMessage(byte[] message) {
		System.out.println("byte" + message);

	}
	
	@Transactional
	@Override
	public void handleMessage(Serializable message) {
		Dealer dealer = (Dealer) message;
		em.persist(dealer);
	}

	/*@Transactional
	@Override
	public void handleMessage(Serializable message, String channel) {
		Dealer dealer = (Dealer) message;
		em.persist(dealer);
	}*/

}