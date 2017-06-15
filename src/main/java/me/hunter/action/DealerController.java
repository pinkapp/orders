package me.hunter.action;

import java.io.IOException;
import java.util.List;

import me.hunter.model.Dealer;
import me.hunter.service.DealerService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
@RequestMapping("/dealer")
public class DealerController {

	@Autowired
	protected DealerService dealerService;

	@RequestMapping("/index")
	public String index() {
		return "demo";
	}

	/**
	 *
	 * @return
	 * @throws IOException
	 */
	@RequestMapping("/add")
	@ResponseBody
	public Dealer add(@ModelAttribute Dealer dealer, BindingResult result) throws IOException {
	    dealerService.save(dealer);
	    return dealer;
	}
	/**
	 *
	 * @return
	 * @throws IOException
	 */
	@RequestMapping("/list")
	@ResponseBody
	public List list(@ModelAttribute Dealer dealer) throws IOException {
		return dealerService.find(dealer);
	}
	
	/**
	 *
	 * @return
	 * @throws IOException
	 */
	/*@RequestMapping("/add")
	@ResponseBody
	public ModelAndView add(@ModelAttribute Dealer dealer, BindingResult result) throws IOException {
		ModelAndView view = new ModelAndView("dealer/add");
		if(result.hasErrors()) {
			List<FieldError> errors = result.getFieldErrors();
			for(FieldError err : errors) {
				System.out.println("ObjectName:" + err.getObjectName() + "\tFieldName:" + err.getField()
						+ "\tFieldValue:" + err.getRejectedValue() + "\tMessage:" + err.getDefaultMessage());
			}
			view.addObject("dealer", dealer);
			return view;
		}
		dealer.setDisable(false);
		dealer.setIfDeleted(true);
		dealerService.save(dealer);
		view.addObject("dealer", dealer);
		return view;
	}*/

	public DealerService getDealerService() {
		return dealerService;
	}

	public void setDealerService(DealerService dealerService) {
		this.dealerService = dealerService;
	}

}