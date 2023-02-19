package com.hcl.employee.entities;

import java.util.Date;

import javax.persistence.CascadeType;
import javax.persistence.EmbeddedId;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.MapsId;
import javax.persistence.OneToOne;

import com.hcl.employee.dto.UseCaseAssignmentDTO;

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
public class UseCase {
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private long ucId;
	private String ucDescription;
	private String duration;

	@OneToOne(cascade = CascadeType.ALL)
	@MapsId
	private UseCaseAssignment usecaseassingment;

}
