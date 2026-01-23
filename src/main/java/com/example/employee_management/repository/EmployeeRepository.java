package com.example.employee_management.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.example.employee_management.model.Employee;

public interface EmployeeRepository extends MongoRepository<Employee, String>{
} 
