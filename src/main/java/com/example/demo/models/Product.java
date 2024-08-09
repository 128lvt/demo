package com.example.demo.models;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.Setter;

import java.util.Date;

@Entity
@Table(name = "Products")
@Getter
@Setter
public class Product {
    @Id
    private String id;

    private String name;

    private Float price;

    @Column(name = "created_date")
    private Date createdDate;
}
