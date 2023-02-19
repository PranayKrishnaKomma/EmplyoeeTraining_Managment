package com.hcl.employee.service;

import java.util.List;

import com.hcl.employee.dto.UseCaseDTO;
import com.hcl.employee.entities.UseCase;

public interface IUseCaseService {

	
	
	public UseCase addUseCase(UseCaseDTO useCaseDTO);

	public UseCase updateUseCase(UseCaseDTO useCaseDTO);

	public String deleteUseCaseById(Long Id);

	public UseCase selectUseCaseById(Long Id);

	public List<UseCase> getALLUseCases();
	
}
