package me.hunter.service.impl;

import java.net.URL;
import java.util.Date;
import java.util.List;

import javax.annotation.Resource;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import me.hunter.model.Dealer;
import me.hunter.service.DealerService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.redis.core.ListOperations;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class DealerServiceImpl implements DealerService {
	
	@PersistenceContext  
    private EntityManager em;  
	
	// inject the actual template
    @Autowired
    private RedisTemplate<String, String> redisTemplate;

    // inject the template as ListOperations
    // can also inject as Value, Set, ZSet, and HashOperations
    @Resource(name="redisTemplate")
    private ListOperations<String, Object> listOps;

    public void addLink(String userId, URL url) {
        listOps.leftPush(userId, url.toExternalForm());
        // or use template directly
        //redisTemplate.boundListOps(userId).leftPush(url.toExternalForm());
    }

	@Override
	@Transactional
	public void save(Dealer entity) {
		entity.setCreateDate(new Date());
		//listOps.leftPush("test", entity);
		em.persist(entity);
        //redisTemplate.convertAndSend("hello", entity);
	}
	
	@Override
	@Transactional
	public List find(Dealer dealer) {
		String queryString = "select d from Dealer d";
		return em.createQuery(queryString, Dealer.class).getResultList();
	}

}
