package com.hcl.employee.service;
import java.util.List;

import org.springframework.http.ResponseEntity;

import com.hcl.employee.dto.EmployeeDTO;
import com.hcl.employee.entities.Employee;

public interface IEmployeeService {

	public ResponseEntity<String> employeeRegistration(EmployeeDTO employeeDTO);

	public Employee loginEmployee(String email);

	public Employee addEmployee(Employee employee);

	public Employee updaEmployee(Employee employee);

	public String deleteEmployeeById(long id);
	
	public List<Employee> getAllEmployee();
	
	public List<Employee>  getEmployeeByDesignation(String designation);
	
	
	

}
