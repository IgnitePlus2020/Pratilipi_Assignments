package com.example.springbootcrudapi.model;

import javax.persistence.*;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.Pattern;
import javax.validation.constraints.Size;

@Entity
@Table(name = "tbl_employee")
public class Employee {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)

    @Column
    private Integer id;

    @NotEmpty(message = "Please provide a name")
    @Size(min=3, message = "Minimum 3 characters required!")
    @Column
    private String name;

    @NotEmpty(message = "Please provide a name")
    @Column
    private String email;

    @Size(min=10, max=10, message = "Mobile number must be a valid 10-digit number")
    /*@Pattern(regexp = "^\\d{10}$",message = "Exactly 10 digits number required")*/
    @NotEmpty(message = "Please provide a name")
    @Column
    private String mobile;

    @NotEmpty(message = "Please provide a name")
    @Size(min=3, message = "Minimum 3 characters required!")
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
