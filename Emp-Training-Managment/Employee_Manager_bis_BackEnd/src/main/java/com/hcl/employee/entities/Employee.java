package com.hcl.employee.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
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
@Entity
public class Employee {


	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private long employeeId;
	private String employeeName;
	@Column(unique = true)
	private String email;
	private long phoneNum;
	private String password;
	private String confirmPassword;
	private String designation;
	private String dateOfBirth;
	private String gender;	
	
}
