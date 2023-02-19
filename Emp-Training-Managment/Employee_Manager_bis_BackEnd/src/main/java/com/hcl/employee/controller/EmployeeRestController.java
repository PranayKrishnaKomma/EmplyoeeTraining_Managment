package com.hcl.employee.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.hcl.employee.dto.EmployeeDTO;
import com.hcl.employee.entities.Employee;
import com.hcl.employee.service.EmployeeServiceImp;


@RestController
@CrossOrigin("http://localhost:3000")
@RequestMapping("/employee")
public class EmployeeRestController {

	@Autowired
	EmployeeServiceImp service;

	@PostMapping("/employeeRegisteration")
	public ResponseEntity<String> employeeRegistration(@RequestBody EmployeeDTO employeeDTO) {
		return service.employeeRegistration(employeeDTO);
	}

	@GetMapping("/employeeLogin/{email}")
	public Employee login(@PathVariable String email) {
		return service.loginEmployee(email);
	}

	@PostMapping("/AddEmployee")
	public Employee addEmployee(@RequestBody Employee employee) {
		return service.addEmployee(employee);
	}

	@PutMapping("/UpdateEmployee")
	public Employee updatEmployee(@RequestBody Employee employee) {
		return service.updaEmployee(employee);
	}

	@DeleteMapping("/deleteEmployee/{id}")
	public String deleteEmployeeId(@PathVariable long id) {
		return service.deleteEmployeeById(id);
	}

	@GetMapping("/GetAllEmployee")
	public List<Employee> getAllEmployees() {
		return service.getAllEmployee();
	}
	@GetMapping("/getEmployeeByDesignation/{designation}")
	public List<Employee>  getEmployeeByDesignation(@PathVariable String designation){
		System.out.println(designation);
		return service.getEmployeeByDesignation(designation);
	}
}
