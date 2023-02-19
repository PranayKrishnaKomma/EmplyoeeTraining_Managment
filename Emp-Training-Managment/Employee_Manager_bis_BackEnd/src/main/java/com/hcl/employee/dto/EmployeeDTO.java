package com.hcl.employee.dto;
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
public class EmployeeDTO {

	
	private long employeeId;
	private String employeeName;
	private String email;
	private long phoneNum;
	private String password;
	private String confirmPassword;
	private String designation;
	private String dateOfBirth;
	private String gender;
	
}
