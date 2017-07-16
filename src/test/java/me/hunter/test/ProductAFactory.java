package me.hunter.test;

public class ProductAFactory implements Factory {

	@Override
	public Product createProduct(String name) {
		return new ProductA(name);
	}

}
