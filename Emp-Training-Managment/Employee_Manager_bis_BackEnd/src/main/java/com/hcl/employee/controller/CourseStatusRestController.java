package com.hcl.employee.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.hcl.employee.dto.CourseStatusDTO;
import com.hcl.employee.entities.CourseStatus;
import com.hcl.employee.service.CourseStatusServiceImp;

@RestController
@CrossOrigin("http://localhost:3000")
@RequestMapping("/coursestatus")
public class CourseStatusRestController {
	@Autowired
	CourseStatusServiceImp service;

	@PostMapping("/addCourseStatus")
	public CourseStatus addCourseStatus(@RequestBody CourseStatusDTO courseStatusDto) {
		System.out.println(courseStatusDto.getCourseId());
		CourseStatus courseStatus=new CourseStatus();
		System.out.println(courseStatus.getCourseId());
		return service.addCourseStatus(courseStatusDto);
	}
    @PutMapping("/updateCourseStatus")
	public CourseStatus updateCourseStatus(@RequestBody CourseStatusDTO courseStatusDTO) {
		return service.updateCourseStatus(courseStatusDTO);
	}

    @GetMapping("/deleteCourseStatusById/{Id}")
	public String deleteCourseStatusById(@PathVariable Long Id) {
		return service.deleteCourseStatusById(Id);
	}

    @GetMapping("/selectCourseStatusById/{Id}")
	public CourseStatus selectCourseStatusById(@PathVariable Long Id) {
		return service.selectCourseStatusById(Id);
	}

    @GetMapping("/getALLCourseStatus")
	public List<CourseStatus> getALLCourseStatus(){
		return service.getALLCourseStatus();
	}
	
}
