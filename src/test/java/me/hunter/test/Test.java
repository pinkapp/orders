package me.hunter.test;

public class Test {

	public static void main(String[] args) {
		Factory factory = new ProductAFactory();
		ProductA p = (ProductA)factory.createProduct("aaa");
		System.out.println(p.getName());
	}

}
