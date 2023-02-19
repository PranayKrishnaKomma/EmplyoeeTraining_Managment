package com.hcl.employee.entities;

import java.util.Date;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;



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
public class CourseStatus {
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private long courseId;
	private Date dueDate;
	private String status;
	private Date completionDate;
	@OneToOne
	@JoinColumn(name = "employee_id")
	private Employee employee;
	
}

