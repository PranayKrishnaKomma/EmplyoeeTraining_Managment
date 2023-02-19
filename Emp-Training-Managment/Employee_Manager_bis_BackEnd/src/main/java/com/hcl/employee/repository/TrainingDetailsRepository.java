package com.hcl.employee.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.hcl.employee.entities.TrainingDetails;

@Repository
public interface TrainingDetailsRepository extends JpaRepository<TrainingDetails, Long> {

}
