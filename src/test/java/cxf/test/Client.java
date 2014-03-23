package cxf.test;

import java.io.FileInputStream;
import java.io.InputStream;

import org.apache.commons.codec.binary.Base64;
import org.apache.cxf.interceptor.LoggingInInterceptor;
import org.apache.cxf.interceptor.LoggingOutInterceptor;
import org.apache.cxf.jaxws.JaxWsProxyFactoryBean;

import com.sky.service.PictureService;
import com.sky.service.impl.PictureServiceImpl;

// necessary
public final class Client {
	private Client() {
	}

	public static void main(String args[]) throws Exception {
		JaxWsProxyFactoryBean factoryBean = new JaxWsProxyFactoryBean();
		factoryBean.getInInterceptors().add(new LoggingInInterceptor());
		factoryBean.getOutInterceptors().add(new LoggingOutInterceptor());
		/*factoryBean.setServiceClass(CXFDemo.class);
		factoryBean.setAddress("http://localhost:80/services/cxfdemo");
		CXFDemo client = (CXFDemo) factoryBean.create();
		System.out.println(client.sayHello("God"));
		System.exit(0);*/
		factoryBean.setServiceClass(PictureService.class);
		factoryBean.setAddress("http://localhost:80/services/pictureService");
		PictureService client = (PictureService) factoryBean.create();
		InputStream in = new FileInputStream("C:\\Users\\Administrator\\Pictures\\a.png");
		byte[] data = new byte[in.available()];
		in.read(data);
		in.close();
		String source = Base64.encodeBase64String(data);
		System.out.println(client.upload(source, "b.png"));
		System.exit(0);
	}
}