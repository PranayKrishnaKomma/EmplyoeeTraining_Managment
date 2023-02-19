package com.hcl.employee.service;

import java.util.List;

import com.hcl.employee.dto.TrainingDetailsDTO;
import com.hcl.employee.entities.TrainingDetails;


public interface ITrainingDetailsService {

	public TrainingDetails addTrainingDetails(TrainingDetailsDTO trainingDetailsDTO);

	public TrainingDetails updateTrainingDetails(TrainingDetailsDTO trainingDetailsDTO);

	public String deleteTrainingDetailsById(Long Id);

	public TrainingDetails selectTrainingDetailsById(Long Id);

	public List<TrainingDetails> getALLTrainingDetails();
}
