package com.hcl.employee.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.hcl.employee.dto.UseCaseDTO;
import com.hcl.employee.entities.UseCase;
import com.hcl.employee.service.UseCaseServiceImp;

@RestController
@CrossOrigin("http://localhost:3000")
@RequestMapping("/usecase")
public class UseCaseRestController {
	
	@Autowired
	UseCaseServiceImp service;
	
	@PostMapping("/addUseCase")
	public UseCase addUseCase(@RequestBody UseCaseDTO useCaseDTO) {
		return service.addUseCase(useCaseDTO);
	}

	@PutMapping("/updateUseCase")
	public UseCase updateUseCase(@RequestBody UseCaseDTO useCaseDTO) {
		return service.updateUseCase(useCaseDTO);
	}

	@DeleteMapping("/deleteUseCaseById/{Id}")
	public String deleteUseCaseById(@PathVariable Long Id) {
		return service.deleteUseCaseById(Id);
	}

	@GetMapping("/selectUseCaseById/{Id}")
	public UseCase selectUseCaseById(@PathVariable Long Id) {
		return service.selectUseCaseById(Id);
	}

	@GetMapping("/getALLUseCases")
	public List<UseCase> getALLUseCases(){
		return service.getALLUseCases();
	}


}
