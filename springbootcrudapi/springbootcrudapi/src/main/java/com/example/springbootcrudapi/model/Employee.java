package com.example.springbootcrudapi.model;

import javax.persistence.*;
import java.sql.Date;

@Entity
@Table(name = "tbl_employee")
public class Employee {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)

    @Column
    private Integer id;
    @Column
    private String name;
    @Column
    private String email;
    @Column
    private String mobile;
    @Column
    private String company;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getMobile() {
        return mobile;
    }

    public void setMobile(String mobile) {
        this.mobile = mobile;
    }

    public String getCompany() {
        return company;
    }

    public void setCompany(String company) {
        this.company = company;
    }

    @Override
    public String toString() {
        return "Employee{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", email='" + email + '\'' +
                ", mobile='" + mobile + '\'' +
                ", company='" + company + '\'' +
                '}';
    }
}
