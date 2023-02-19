package com.hcl.employee.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hcl.employee.dto.TrainingDetailsDTO;
import com.hcl.employee.entities.CourseStatus;
import com.hcl.employee.entities.Employee;
import com.hcl.employee.entities.TrainingDetails;
import com.hcl.employee.repository.EmployeeRepository;
import com.hcl.employee.repository.TrainingDetailsRepository;

@Service
public class TrainingDetailsServiceImp implements ITrainingDetailsService {

	@Autowired
	TrainingDetailsRepository repo;
	@Autowired
	EmployeeRepository emprepo;
	@Override
	public TrainingDetails addTrainingDetails(TrainingDetailsDTO trainingDetailsDTO) {
		
		TrainingDetails trainingDetails=new TrainingDetails();
		trainingDetails.setTrainingId(trainingDetailsDTO.getTrainingId());
		trainingDetails.setCourseName(trainingDetailsDTO.getCourseName());
		Employee employee=emprepo.findById(trainingDetailsDTO.getCourseStatusDTO().getEmployeeId()).orElse(null);
		CourseStatus courseStatus=new CourseStatus();
		courseStatus.setEmployee(employee);
		courseStatus.setCourseId(trainingDetailsDTO.getCourseStatusDTO().getCourseId());
		courseStatus.setCompletionDate(trainingDetailsDTO.getCourseStatusDTO().getCompletionDate());
		courseStatus.setStatus(trainingDetailsDTO.getCourseStatusDTO().getStatus());
		courseStatus.setDueDate(trainingDetailsDTO.getCourseStatusDTO().getDueDate());
		trainingDetails.setCoursestatus(courseStatus);
		trainingDetails.setDuration(trainingDetailsDTO.getDuration());
		
		return repo.save(trainingDetails);
	}

	@Override
	public TrainingDetails updateTrainingDetails(TrainingDetailsDTO trainingDetailsDTO) {
		
		TrainingDetails trainingDetails=new TrainingDetails();
		trainingDetails.setTrainingId(trainingDetailsDTO.getTrainingId());
		trainingDetails.setCourseName(trainingDetailsDTO.getCourseName());
		CourseStatus courseStatus=new CourseStatus();
		Employee employee=emprepo.findById(trainingDetailsDTO.getCourseStatusDTO().getEmployeeId()).orElse(null);
		courseStatus.setEmployee(employee);
		courseStatus.setCourseId(trainingDetailsDTO.getCourseStatusDTO().getCourseId());
		courseStatus.setCompletionDate(trainingDetailsDTO.getCourseStatusDTO().getCompletionDate());
		courseStatus.setStatus(trainingDetailsDTO.getCourseStatusDTO().getStatus());
		courseStatus.setDueDate(trainingDetailsDTO.getCourseStatusDTO().getDueDate());
		trainingDetails.setCoursestatus(courseStatus);
		trainingDetails.setDuration(trainingDetailsDTO.getDuration());
		
		return repo.save(trainingDetails);
	}

	@Override
	public String deleteTrainingDetailsById(Long Id) {
		repo.deleteById(Id);
		return "TrainingDetails deleted successfully";
	}

	@Override
	public TrainingDetails selectTrainingDetailsById(Long Id) {
		
		return repo.findById(Id).orElse(null);
	}

	@Override
	public List<TrainingDetails> getALLTrainingDetails() {
		
		return repo.findAll();
	}

}
