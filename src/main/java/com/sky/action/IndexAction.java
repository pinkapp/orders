package com.sky.action;

import java.io.IOException;

import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Controller;

import com.sky.framework.BaseAction;

@Controller
@Scope("prototype")
public class IndexAction extends BaseAction {

	public String index() throws IOException {
		System.out.println("index");
		return SUCCESS;
	}
}
