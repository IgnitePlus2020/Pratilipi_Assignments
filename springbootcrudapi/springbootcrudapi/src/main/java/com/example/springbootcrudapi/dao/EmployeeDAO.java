package com.example.springbootcrudapi.dao;

import com.example.springbootcrudapi.model.Employee;

import java.util.List;

public interface EmployeeDAO {

    List<Employee> get();
    Employee get(int id);
    void save(Employee employee);
    void delete(int id);
}
