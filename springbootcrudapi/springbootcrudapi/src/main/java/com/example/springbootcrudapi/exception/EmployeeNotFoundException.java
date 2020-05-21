package com.example.springbootcrudapi.exception;

/*@ResponseStatus(HttpStatus.NOT_FOUND)*/
public class EmployeeNotFoundException extends RuntimeException {

    public EmployeeNotFoundException(String message) {
        super(message);
    }
}
