package com.hcl.employee.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.hcl.employee.dto.EmployeeDTO;
import com.hcl.employee.entities.Employee;
import com.hcl.employee.repository.EmployeeRepository;

@Service
public class EmployeeServiceImp implements IEmployeeService {

	@Autowired
	EmployeeRepository employeeRepository;

	@Override
	public ResponseEntity<String> employeeRegistration(EmployeeDTO employeeDTO) {

		ResponseEntity<String> response = null;
		Employee employee = new Employee();

		if (employeeDTO.getEmployeeName() != null) {

			employee.setEmployeeName(employeeDTO.getEmployeeName());
			employee.setEmail(employeeDTO.getEmail());
			employee.setDesignation(employeeDTO.getDesignation());
			employee.setPassword(employeeDTO.getPassword());
			employee.setConfirmPassword(employeeDTO.getConfirmPassword());
			employee.setDateOfBirth(employeeDTO.getDateOfBirth());
			employee.setPhoneNum(employeeDTO.getPhoneNum());
			employee.setGender(employeeDTO.getGender());
			employeeRepository.save(employee);
			System.out.println("employee reg");
			System.out.println(employeeDTO.getConfirmPassword());

			employeeRepository.save(employee);
			response = new ResponseEntity<String>("Registration Successfull", HttpStatus.ACCEPTED);
		} else {
			response = new ResponseEntity<String>("Registration failed", HttpStatus.NOT_ACCEPTABLE);
		}
		return response;
	}

	@Override
	public Employee loginEmployee(String email) {
		return employeeRepository.findEmployeeByEmail(email);
	}

	@Override
	public Employee addEmployee(Employee employee) {
		
		return employeeRepository.save(employee);
	}

	@Override
	public Employee updaEmployee(Employee employee) {
		
		return employeeRepository.save(employee);
	}

	@Override
	public String deleteEmployeeById(long id) {
		
		employeeRepository.deleteById(id);
		return "Employee deleted sucessfully..!";
	}


	@Override
	public List<Employee> getAllEmployee() {
		
		return employeeRepository.findAll();
	}

	@Override
	public List<Employee> getEmployeeByDesignation(String designation) {
		
		return employeeRepository.findEmployeeByDesignation(designation);
	}

}
