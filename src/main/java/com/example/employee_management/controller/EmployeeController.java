package com.example.employee_management.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;

import com.example.employee_management.model.Employee;
import com.example.employee_management.service.EmployeeService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class EmployeeController {

    @Autowired
    EmployeeService employeeService;

    @GetMapping("/")
    public String ShowForm(Model model) {
        model.addAttribute("employee", new Employee());
        return "index";
    }

    @PostMapping("/employees")
    public String saveEmployee(Employee employee, Model model) {
        employeeService.saveEmployee(employee);

        model.addAttribute("message", "Employee Details Saved Successfully");
        model.addAttribute("employee", new Employee());

        return "index";
    }

    @GetMapping("/displayAll")
    @ResponseBody
    public List<Employee> getAllEmployees() {
        return employeeService.getAllEmployees();
    }

    @GetMapping("/display/{id}")
    @ResponseBody
    public Employee getEmployeeById(@PathVariable String id) {
        return employeeService.getEmployeeById(id);
    }

}
