package com.hcl.employee.service;

import java.util.List;

import com.hcl.employee.dto.CourseStatusDTO;

import com.hcl.employee.entities.CourseStatus;

public interface ICourseStatusService {

	public CourseStatus addCourseStatus(CourseStatusDTO courseStatusDTO);

	public CourseStatus updateCourseStatus(CourseStatusDTO courseStatusDTO);

	public String deleteCourseStatusById(Long Id);

	public CourseStatus selectCourseStatusById(Long Id);

	public List<CourseStatus> getALLCourseStatus();

}
