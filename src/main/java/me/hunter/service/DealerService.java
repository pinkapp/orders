package me.hunter.service;

import java.util.List;

import me.hunter.model.Dealer;

public interface DealerService {

	void save(Dealer dealer);

	List find(Dealer dealer);
	
}
