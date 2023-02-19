package com.hcl.employee.service;

import java.util.List;

import com.hcl.employee.dto.UseCaseAssignmentDTO;
import com.hcl.employee.entities.UseCaseAssignment;

public interface IUseCaseAssignmentService {
	public UseCaseAssignment addUseCaseAssignment(UseCaseAssignmentDTO useCaseAssignmentDTO);

	public UseCaseAssignment updateUseCaseAssignment(UseCaseAssignmentDTO useCaseAssignmentDTO);

	public String deleteUseCaseAssignmentById(Long Id);

	public UseCaseAssignment selectUseCaseAssignmentById(Long Id);

	public List<UseCaseAssignment> getALLUseCaseAssignments();

}
