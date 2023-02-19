package com.hcl.employee.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hcl.employee.dto.UseCaseAssignmentDTO;
import com.hcl.employee.entities.Employee;
import com.hcl.employee.entities.UseCaseAssignment;
import com.hcl.employee.repository.EmployeeRepository;
import com.hcl.employee.repository.UseCaseAssignmentRepository;

@Service
public class UseCaseAssignmentServiceImp implements IUseCaseAssignmentService {

	@Autowired
	UseCaseAssignmentRepository useCaseAssignmentRepository;
	@Autowired
	EmployeeRepository emprepo;

	@Override
	public String deleteUseCaseAssignmentById(Long Id) {
		useCaseAssignmentRepository.deleteById(Id);
		return "UseCaseAssignment deleted successfully";
	}

	@Override
	public UseCaseAssignment selectUseCaseAssignmentById(Long Id) {

		return useCaseAssignmentRepository.findById(Id).orElse(null);
	}

	@Override
	public List<UseCaseAssignment> getALLUseCaseAssignments() {

		return useCaseAssignmentRepository.findAll();
	}

	@Override
	public UseCaseAssignment addUseCaseAssignment(UseCaseAssignmentDTO useCaseAssignmentDTO) {
		System.out.println(useCaseAssignmentDTO.getEmployeeId());
		Employee employee = emprepo.findById(useCaseAssignmentDTO.getEmployeeId()).orElse(null);
		UseCaseAssignment useCaseAssignment=new UseCaseAssignment();
		useCaseAssignment.setEmployee(employee);
		useCaseAssignment.setEndDate(useCaseAssignmentDTO.getEndDate());
		useCaseAssignment.setUcId(useCaseAssignmentDTO.getUcId());
		useCaseAssignment.setUcStatus(useCaseAssignmentDTO.getUcStatus());
		return useCaseAssignmentRepository.save(useCaseAssignment);
	}

	@Override
	public UseCaseAssignment updateUseCaseAssignment(UseCaseAssignmentDTO useCaseAssignmentDTO) {
		
		Employee employee = emprepo.findById(useCaseAssignmentDTO.getEmployeeId()).orElse(null);
		UseCaseAssignment useCaseAssignment=new UseCaseAssignment();
		useCaseAssignment.setEmployee(employee);
		useCaseAssignment.setEndDate(useCaseAssignmentDTO.getEndDate());
		useCaseAssignment.setUcId(useCaseAssignmentDTO.getUcId());
		useCaseAssignment.setUcStatus(useCaseAssignmentDTO.getUcStatus());
		return useCaseAssignmentRepository.save(useCaseAssignment);
	}

}
