package net.pink.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

/**
 * 账目
 * @author HuangDeCai
 * @since 2012-12-12 18:40:13
 */
@Entity
@Table(name = "accounts")
public class Account implements java.io.Serializable {

	// Fields

	/**
	 *
	 */
	private static final long serialVersionUID = 1L;
	private Integer id;
	private String date;
	private String item;
	private Short category;
	private Double money;
	private String note;

	// Constructors

	/** default constructor */
	public Account() {
	}

	/** full constructor */
	public Account(String date, String item, Short category, Double money,
			String note) {
		this.date = date;
		this.item = item;
		this.category = category;
		this.money = money;
		this.note = note;
	}

	// Property accessors
	@Id
	@GeneratedValue
	@Column(name = "id", unique = true, nullable = false)
	public Integer getId() {
		return this.id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	@Column(name = "date_", nullable = false, length = 10)
	public String getString() {
		return this.date;
	}

	public void setString(String date) {
		this.date = date;
	}

	@Column(name = "item", nullable = false, length = 50)
	public String getItem() {
		return this.item;
	}

	public void setItem(String item) {
		this.item = item;
	}

	@Column(name = "category", nullable = false)
	public Short getCategory() {
		return this.category;
	}

	public void setCategory(Short category) {
		this.category = category;
	}

	@Column(name = "money", nullable = false, precision = 22, scale = 0)
	public Double getMoney() {
		return this.money;
	}

	public void setMoney(Double money) {
		this.money = money;
	}

	@Column(name = "note", length = 100)
	public String getNote() {
		return this.note;
	}

	public void setNote(String note) {
		this.note = note;
	}

}