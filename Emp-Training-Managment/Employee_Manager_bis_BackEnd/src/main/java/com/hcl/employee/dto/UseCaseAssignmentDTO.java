package com.hcl.employee.dto;

import java.util.Date;

import com.hcl.employee.entities.UseCase;

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

public class UseCaseAssignmentDTO {

	private long ucId;
	private String ucStatus;
	private Date endDate;
	private long employeeId;
	

}
