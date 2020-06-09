package com.example.cassandraspringboot.model;


import org.springframework.data.cassandra.core.mapping.PrimaryKey;
import org.springframework.data.cassandra.core.mapping.Table;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

@Table
public class User {

    @PrimaryKey
    private Integer id;

    @NotNull
    @Size(min = 3, message = "First Name must have atleast 3 characters")
    private String firstName;

    @NotNull
    @Size(min = 3, message = "Last Name must have atleast 3 characters")
    private String lastName;

    @Email
    @NotNull
    private String email;

    @NotNull
    private String address;

    @NotNull
    @Size(min = 5, max = 16, message = "Valid Zip-Code required")
    private String zipcode;

    public User(Integer id, String firstName, String lastName, String email, String address, String zipcode) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.address = address;
        this.zipcode = zipcode;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getZipcode() {
        return zipcode;
    }

    public void setZipcode(String zipcode) {
        this.zipcode = zipcode;
    }

    @Override
    public String toString() {
        return "User{" +
                "id=" + id +
                ", firstName='" + firstName + '\'' +
                ", lastName='" + lastName + '\'' +
                ", email='" + email + '\'' +
                ", address='" + address + '\'' +
                ", zipcode='" + zipcode + '\'' +
                '}';
    }
}