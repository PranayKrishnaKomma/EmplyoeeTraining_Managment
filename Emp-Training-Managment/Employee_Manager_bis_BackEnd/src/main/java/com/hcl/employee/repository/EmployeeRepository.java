package com.hcl.employee.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.hcl.employee.entities.Employee;

@Repository
public interface EmployeeRepository extends JpaRepository<Employee, Long>{

	public Employee findEmployeeByEmail(String Email);
	public List<Employee> findEmployeeByDesignation(String designation);
	
}
