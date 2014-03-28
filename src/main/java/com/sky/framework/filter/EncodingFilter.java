package com.sky.framework.filter;

import java.io.IOException;
import javax.servlet.Filter;
import javax.servlet.FilterChain;
import javax.servlet.FilterConfig;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;

public class EncodingFilter implements Filter {
	protected String encoding = null;

	protected FilterConfig filterConfig = null;

	public void destroy() {
		this.encoding = null;
		this.filterConfig = null;
	}

	public void doFilter(ServletRequest request, ServletResponse response,
			FilterChain chain) throws IOException, ServletException {
		// Select and set (if needed) the character encoding to be used
		String encoding = selectEncoding(request);
		if (encoding != null) {
			
			request.setCharacterEncoding(encoding);
			response.setCharacterEncoding(encoding);
			//设置编码
		}
		// Pass control on to the next filter
		chain.doFilter(request, response);
	}

	public void init(FilterConfig filterConfig) throws ServletException {
		this.filterConfig = filterConfig;
		this.encoding = filterConfig.getInitParameter("encoding");
		//得到编码
	}

	protected String selectEncoding(ServletRequest request) {
		return (this.encoding);
	}
}
