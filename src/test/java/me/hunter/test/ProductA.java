package me.hunter.test;

public class ProductA implements Product {
	
	private String name;

	public ProductA(String name) {
		this.name = name;
	}

	@Override
	public void setName(String name) {
		this.name = name;
	}

	public String getName() {
		return name;
	}

}
