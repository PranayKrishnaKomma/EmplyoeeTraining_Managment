package com.hcl.employee.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.hcl.employee.entities.UseCaseAssignment;


@Repository
public interface UseCaseAssignmentRepository extends JpaRepository<UseCaseAssignment, Long> {

}
