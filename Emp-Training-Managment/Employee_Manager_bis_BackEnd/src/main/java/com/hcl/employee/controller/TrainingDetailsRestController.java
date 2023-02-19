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

import com.hcl.employee.dto.TrainingDetailsDTO;
import com.hcl.employee.entities.TrainingDetails;
import com.hcl.employee.service.TrainingDetailsServiceImp;

@RestController
@CrossOrigin("http://localhost:3000")
@RequestMapping("/tainingdetails")
public class TrainingDetailsRestController {
	@Autowired
	TrainingDetailsServiceImp service;
	

	@PostMapping("/addTrainingDetails")
	public TrainingDetails addTrainingDetails(@RequestBody TrainingDetailsDTO trainingDetailsDTO) {
		return service.addTrainingDetails(trainingDetailsDTO);
	}

	@PutMapping("/updateTrainingDetails")
	public TrainingDetails updateTrainingDetails(@RequestBody TrainingDetailsDTO trainingDetailsDTO) {
		return service.updateTrainingDetails(trainingDetailsDTO);
	}

	@DeleteMapping("/deleteTrainingDetailsById/{Id}")
	public String deleteTrainingDetailsById(@PathVariable Long Id) {
		return service.deleteTrainingDetailsById(Id);
	}

	@GetMapping("/selectTrainingDetailsById/{Id}")
	public TrainingDetails selectTrainingDetailsById(@PathVariable Long Id) {
		return service.selectTrainingDetailsById(Id);
	}

	@GetMapping("/getALLTrainingDetails")
	public List<TrainingDetails> getALLTrainingDetails(){
		return service.getALLTrainingDetails();
		
	}
}
