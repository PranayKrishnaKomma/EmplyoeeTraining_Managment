package com.hcl.employee.entities;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.MapsId;
import javax.persistence.OneToOne;

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
@Entity
public class TrainingDetails {

	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private long trainingId;
	private String courseName;
	private int  duration;
	@OneToOne(cascade = CascadeType.ALL)
	@MapsId
	private CourseStatus coursestatus;
}
