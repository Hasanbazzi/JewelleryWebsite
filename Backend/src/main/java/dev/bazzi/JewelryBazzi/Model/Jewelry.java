package dev.bazzi.JewelryBazzi.Model;

import jakarta.persistence.*;

@Table
@Entity
public class Jewelry {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "jewelry_generator")
    @SequenceGenerator(name="jewelry_generator", sequenceName = "jewelry_seq", allocationSize=1)
    @Column(nullable = false,updatable = false)
    private int id;
    private String name, description;

    private int weight;

    private int price;
    private String image;

    public Jewelry() {
    }

    public Jewelry(String name, String description, int weight, int price, String image) {
        this.name = name;
        this.description = description;
        this.weight = weight;
        this.price = price;
        this.image = image;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public int getWeight() {
        return weight;
    }

    public void setWeight(int weight) {
        this.weight = weight;
    }

    public int getPrice() {
        return price;
    }

    public void setPrice(int price) {
        this.price = price;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }

    @Override
    public String toString() {
        return "Jewelry{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", Description='" + description + '\'' +
                ", weight=" + weight +
                ", price=" + price +
                ", image='" + image + '\'' +
                '}';
    }
}
