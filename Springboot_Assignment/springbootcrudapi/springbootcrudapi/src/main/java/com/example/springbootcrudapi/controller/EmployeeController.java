package com.example.springbootcrudapi.controller;

import com.example.springbootcrudapi.model.Employee;
import com.example.springbootcrudapi.service.EmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/api")
public class EmployeeController {

    @Autowired
    private EmployeeService employeeService;


    @PostMapping("/employee")
    public Employee addEmployee(@Valid @RequestBody Employee employee) {


        return employeeService.addEmployee(employee);
    }

    @GetMapping("/employee")
    public List<Employee> getEmployees() {

        return employeeService.getEmployees();
    }

    @GetMapping(value = "/employee/{employeeId}")
    public Employee getEmployee(@PathVariable("employeeId") int employeeId) {

        return employeeService.getEmployee(employeeId);
    }

    @PutMapping(value = "/employee/{employeeId}")
    public Employee updateEmployee(@PathVariable("employeeId") int employeeId, @RequestBody Employee employee) {

        return employeeService.updateEmployee(employeeId, employee);
    }

    @DeleteMapping(value = "/employee/{employeeId}")
    public String deleteEmployee(@PathVariable("employeeId") int employeeId) {

        employeeService.deleteEmployee(employeeId);
        return "Employee with id " + employeeId + " has been deleted!";
    }
}
