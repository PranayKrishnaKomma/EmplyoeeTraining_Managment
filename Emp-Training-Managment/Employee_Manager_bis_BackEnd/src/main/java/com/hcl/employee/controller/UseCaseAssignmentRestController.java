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

import com.hcl.employee.dto.UseCaseAssignmentDTO;
import com.hcl.employee.entities.UseCaseAssignment;
import com.hcl.employee.service.UseCaseAssignmentServiceImp;


@RestController
@CrossOrigin("http://localhost:3000")
@RequestMapping("/usecaseassignment")
public class UseCaseAssignmentRestController {
	@Autowired
	UseCaseAssignmentServiceImp service;
	
	@PostMapping("/addUseCaseAssignment")
	public UseCaseAssignment addUseCaseAssignment(@RequestBody UseCaseAssignmentDTO useCaseAssignmentDTO ) {
		
		
		return service.addUseCaseAssignment(useCaseAssignmentDTO);
	}

	@PutMapping("/updateUseCaseAssignment")
	public UseCaseAssignment updateUseCaseAssignment(@RequestBody UseCaseAssignmentDTO useCaseAssignmentDTO) {
		return service.updateUseCaseAssignment(useCaseAssignmentDTO);
	}

	@DeleteMapping("/deleteUseCaseAssignmentById/{Id}")
	public String deleteUseCaseAssignmentById(@PathVariable Long Id) {
		return service.deleteUseCaseAssignmentById(Id);
		
	}

	@GetMapping("/selectUseCaseAssignmentById/{Id}")
	public UseCaseAssignment selectUseCaseAssignmentById(@PathVariable Long Id) {
		return service.selectUseCaseAssignmentById(Id);
	}

	@GetMapping("/getALLUseCaseAssignments")
	public List<UseCaseAssignment> getALLUseCaseAssignments(){
		return service.getALLUseCaseAssignments();
	}

}
