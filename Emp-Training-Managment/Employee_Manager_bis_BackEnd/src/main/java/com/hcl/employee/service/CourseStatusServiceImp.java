package com.hcl.employee.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hcl.employee.dto.CourseStatusDTO;
import com.hcl.employee.entities.CourseStatus;
import com.hcl.employee.entities.Employee;
import com.hcl.employee.repository.CourseStatusRepository;
import com.hcl.employee.repository.EmployeeRepository;

@Service
public class CourseStatusServiceImp implements ICourseStatusService {

	@Autowired
	CourseStatusRepository repo;
	@Autowired
	EmployeeRepository emprepo;

	

	@Override
	public CourseStatus updateCourseStatus(CourseStatusDTO courseStatusDTO) {
		
		Employee employee=emprepo.findById(courseStatusDTO.getEmployeeId()).orElse(null);
		CourseStatus coursestatus = new CourseStatus();
		coursestatus.setEmployee(employee);
		coursestatus.setCourseId(courseStatusDTO.getCourseId());
		coursestatus.setCompletionDate(courseStatusDTO.getCompletionDate());
		coursestatus.setStatus(courseStatusDTO.getStatus());
		coursestatus.setDueDate(courseStatusDTO.getDueDate());
		
		return repo.save(coursestatus);
	}

	@Override
	public String deleteCourseStatusById(Long Id) {
		repo.deleteById(Id);
		return "course deleted successfully";
	}

	@Override
	public CourseStatus selectCourseStatusById(Long Id) {

		return repo.findById(Id).orElse(null);
	}

	@Override
	public List<CourseStatus> getALLCourseStatus() {

		return repo.findAll();
	}


	@Override
	public CourseStatus addCourseStatus(CourseStatusDTO courseStatusDTO) {
		// TODO Auto-generated method stub
		CourseStatus courseStatus = new CourseStatus();
		Employee employee=emprepo.findById(courseStatusDTO.getEmployeeId()).orElse(null);
		courseStatus.setEmployee(employee);
		courseStatus.setCourseId(courseStatusDTO.getCourseId());
		courseStatus.setCompletionDate(courseStatusDTO.getCompletionDate());
		courseStatus.setStatus(courseStatusDTO.getStatus());
		courseStatus.setDueDate(courseStatusDTO.getDueDate());
		return repo.save(courseStatus);
	}

}
