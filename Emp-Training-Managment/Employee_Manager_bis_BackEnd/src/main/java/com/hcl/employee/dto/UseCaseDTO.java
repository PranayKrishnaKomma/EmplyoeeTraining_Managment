package com.hcl.employee.dto;

import java.util.Date;

import com.hcl.employee.entities.UseCaseAssignment;

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

public class UseCaseDTO {

	private long ucId;
	private String ucDescription;
	private String duration;
	private UseCaseAssignmentDTO useCaseAssignmentDTO;

}
