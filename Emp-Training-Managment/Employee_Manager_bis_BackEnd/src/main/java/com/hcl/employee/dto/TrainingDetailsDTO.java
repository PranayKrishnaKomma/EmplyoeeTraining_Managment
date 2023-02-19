package com.hcl.employee.dto;

import com.hcl.employee.entities.CourseStatus;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@ToString

public class TrainingDetailsDTO {

	private long trainingId;
	private String courseName;
	private int duration;
	private CourseStatusDTO courseStatusDTO;

}
