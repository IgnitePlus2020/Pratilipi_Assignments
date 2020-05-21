package com.example.springbootcrudapi.service;


import com.example.springbootcrudapi.dao.EmployeeDAO;
import com.example.springbootcrudapi.exception.EmployeeNotFoundException;
import com.example.springbootcrudapi.model.Employee;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.Optional;
import java.util.concurrent.CopyOnWriteArrayList;

@Component
public class EmployeeService {

    @Autowired
    private EmployeeDAO employeeDAO;

    private int employeeIdCount = 1;
    private List<Employee> employeeList = new CopyOnWriteArrayList<>();

    public Employee addEmployee(Employee employee) {
        /*customer.setCustomerID(customerIdCount);
        customerList.add(customer);
        customerIdCount++;
        return customer;*/

        return employeeDAO.save(employee);
    }

    public List<Employee> getEmployees() {

        return employeeDAO.findAll();

        /*return customerList;*/
    }

    public Employee getEmployee(int employeeId) {
        /*return customerList
                .stream()
                .filter(c -> c.getCustomerID() == customerId)
                .findFirst()
                .get();*/

        Optional<Employee> optionalEmployee = employeeDAO.findById(employeeId);

        if (!optionalEmployee.isPresent())
            throw new EmployeeNotFoundException("Employee Record with id " + employeeId + " is not available");
        return employeeDAO.findById(employeeId).get();
    }

    public Employee updateEmployee(int employeeId, Employee employee) {
        /*customerList
                .stream()
                .forEach(c -> {
                    if(c.getCustomerID() == customerId) {
                        c.setCustomerFirstName(customer.getCustomerFirstName());
                        c.setCustomerLastName(customer.getCustomerLastName());
                        c.setCustomerEmail(customer.getCustomerEmail());
                        c.setCustomerPhone(customer.getCustomerPhone());
                    }
                });
        return customerList
                .stream()
                .filter(c -> c.getCustomerID() == customerId)
                .findFirst()
                .get();*/

        Optional<Employee> optionalEmployee = employeeDAO.findById(employeeId);

        if (!optionalEmployee.isPresent())
            throw new EmployeeNotFoundException("Employee Record with id " + employeeId + " is not available");

        employee.setId(employeeId);
        return employeeDAO.save(employee);
    }

    public void deleteEmployee(int employeeId) {
       /* customerList
                .stream()
                .forEach(c -> {
                    if(c.getCustomerID() == customerId) {
                        customerList.remove(c);
                    }
                });*/

        Optional<Employee> optionalEmployee = employeeDAO.findById(employeeId);

        if (!optionalEmployee.isPresent())
            throw new EmployeeNotFoundException("Employee Record with id " + employeeId + " is not available");

        employeeDAO.deleteById(employeeId);
    }
}
