package me.hunter.action;

import me.hunter.service.DealerService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

@Controller
public class IndexController {

	@Autowired
	protected DealerService dealerService;

	@RequestMapping("/index")
	public ModelAndView index() {
		ModelAndView view = new ModelAndView("index");
		view.addObject("dealers", dealerService.find(null));
		view.addObject("test", "aabb");
		return view;
	}

	public DealerService getDealerService() {
		return dealerService;
	}

	public void setDealerService(DealerService dealerService) {
		this.dealerService = dealerService;
	}

}