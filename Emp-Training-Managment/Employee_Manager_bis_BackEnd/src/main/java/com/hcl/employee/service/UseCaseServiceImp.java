package com.hcl.employee.service;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hcl.employee.dto.UseCaseAssignmentDTO;
import com.hcl.employee.dto.UseCaseDTO;
import com.hcl.employee.entities.Employee;
import com.hcl.employee.entities.UseCase;
import com.hcl.employee.entities.UseCaseAssignment;
import com.hcl.employee.repository.EmployeeRepository;
import com.hcl.employee.repository.UseCaseRepository;

@Service
public class UseCaseServiceImp implements IUseCaseService {

	@Autowired
	UseCaseRepository repo;
	@Autowired
	EmployeeRepository emprepo;
	@Override
	public UseCase addUseCase(UseCaseDTO useCaseDTO) {
		UseCase useCase=new UseCase();
		useCase.setDuration(useCaseDTO.getDuration());
		useCase.setUcDescription(useCaseDTO.getUcDescription());
		useCase.setUcId(useCaseDTO.getUcId());
		Employee employee = emprepo.findById(useCaseDTO.getUseCaseAssignmentDTO().getEmployeeId()).orElse(null);
		UseCaseAssignment useCaseAssignment=new UseCaseAssignment();
		useCaseAssignment.setEmployee(employee);
		useCaseAssignment.setEndDate(useCaseDTO.getUseCaseAssignmentDTO().getEndDate());
		useCaseAssignment.setUcId(useCaseDTO.getUseCaseAssignmentDTO().getUcId());
		useCaseAssignment.setUcStatus(useCaseDTO.getUseCaseAssignmentDTO().getUcStatus());
		useCase.setUsecaseassingment(useCaseAssignment);
		return repo.save(useCase);
	}

	@Override
	public UseCase updateUseCase(UseCaseDTO useCaseDTO) {
		
		UseCase useCase=new UseCase();
		useCase.setDuration(useCaseDTO.getDuration());
		useCase.setUcDescription(useCaseDTO.getUcDescription());
		useCase.setUcId(useCaseDTO.getUcId());
		Employee employee = emprepo.findById(useCaseDTO.getUseCaseAssignmentDTO().getEmployeeId()).orElse(null);
		UseCaseAssignment useCaseAssignment=new UseCaseAssignment();
		useCaseAssignment.setEmployee(employee);
		useCaseAssignment.setEndDate(useCaseDTO.getUseCaseAssignmentDTO().getEndDate());
		useCaseAssignment.setUcId(useCaseDTO.getUseCaseAssignmentDTO().getUcId());
		useCaseAssignment.setUcStatus(useCaseDTO.getUseCaseAssignmentDTO().getUcStatus());
		useCase.setUsecaseassingment(useCaseAssignment);
		
		
		return repo.save(useCase);
	}

	@Override
	public String deleteUseCaseById(Long Id) {
		repo.deleteById(Id);
		return "UseCase deleted successfully";
	}

	@Override
	public UseCase selectUseCaseById(Long Id) {
		
		return repo.findById(Id).orElse(null);
	}

	@Override
	public List<UseCase> getALLUseCases() {
		
		return repo.findAll();
	}

}
