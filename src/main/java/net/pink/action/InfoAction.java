package net.pink.action;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.LinkedHashMap;
import java.util.Map;

import net.pink.action.base.BaseAction;
import net.pink.constants.Constants;

import org.json.JSONObject;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Controller;

/**
 *
 * @author HuangDeCai
 *
 */
@Controller
@Scope("prototype")
public class InfoAction extends BaseAction {

	/**
	 *
	 */
	private static final long serialVersionUID = 1L;

	public String version() throws IOException {
		String result = Constants.SERVER_VERSION;
		response.setContentType("text/html;charset=utf-8");
		response.setHeader("Cache-Control", "no-cache");
		PrintWriter out = response.getWriter();
		out.append(result);
		out.close();
		return NONE;
	}

	public String info() throws IOException {
		String result = "";
		Map<String, Object> map = new LinkedHashMap<String, Object>();
		map.put("服务器版本", Constants.SERVER_VERSION);
		result = new JSONObject(map).toString();
		response.setContentType("text/html;charset=utf-8");
		response.setHeader("Cache-Control", "no-cache");
		PrintWriter out = response.getWriter();
		out.append(result);
		out.close();
		return NONE;
	}
}
