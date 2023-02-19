package com.hcl.employee.dto;

import java.util.Date;
import com.hcl.employee.entities.TrainingDetails;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@ToString

public class CourseStatusDTO {

	private long courseId;
	private Date dueDate;
	private String status;
	private Date completionDate;
	private long employeeId;

}
