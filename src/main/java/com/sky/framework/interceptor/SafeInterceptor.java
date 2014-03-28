package com.sky.framework.interceptor;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Component;

import com.opensymphony.xwork2.ActionInvocation;
import com.opensymphony.xwork2.interceptor.Interceptor;

@Component
public class SafeInterceptor implements Interceptor {

	private static final long serialVersionUID = 6783914372473093519L;

	private List<String> actions = new ArrayList<String>();

	// @Autowired
	// private UsersService usersService;

	public void destroy() {

	}

	public void init() {
		actions.add("login");
	}

	/**
	 * 后台安全拦截器，防止非法操作
	 */
	public String intercept(ActionInvocation actionInvocation) throws Exception {
		return actionInvocation.invoke();
	}
}
