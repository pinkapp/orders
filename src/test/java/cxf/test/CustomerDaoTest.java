package cxf.test;

import java.io.FileInputStream;
import java.io.InputStream;

import org.apache.commons.codec.binary.Base64;
import org.apache.cxf.interceptor.LoggingInInterceptor;
import org.apache.cxf.interceptor.LoggingOutInterceptor;
import org.apache.cxf.jaxws.JaxWsProxyFactoryBean;

import com.sky.dao.CustomerDAO;
import com.sky.model.Customer;
import com.sky.service.PictureService;
import com.sky.service.impl.PictureServiceImpl;

// necessary
public final class CustomerDaoTest {
	private CustomerDaoTest() {
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
		factoryBean.setServiceClass(CustomerDAO.class);
		factoryBean.setAddress("http://localhost:80/services/customerDAO");
		CustomerDAO client = (CustomerDAO) factoryBean.create();
		Customer customer = new Customer();
		customer.setName("hello");
		System.out.println(client.add(customer));
		System.out.println(client.list());
		System.exit(0);
	}
}