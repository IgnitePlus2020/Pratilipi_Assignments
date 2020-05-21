package com.example.springbootcrudapi.service;

import com.example.springbootcrudapi.dao.EmployeeDAO;
import com.example.springbootcrudapi.exception.EmployeeNotFoundException;
import com.example.springbootcrudapi.model.Employee;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
public class EmployeeServiceImplementation implements EmployeeService {

    @Autowired
    private EmployeeDAO employeeDAO;

    @Transactional
    @Override
    public List<Employee> get() {
        return employeeDAO.get();
    }

    @Transactional
    @Override
    public Employee get(int id) {
        return employeeDAO.get(id);
    }

    @Transactional
    @Override
    public void save(Employee employee) {
        employeeDAO.save(employee);
    }

    @Transactional
    @Override
    public void delete(int id) {

        employeeDAO.delete(id);

    }
}
