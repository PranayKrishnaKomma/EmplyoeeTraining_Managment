package com.hcl.employee.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.hcl.employee.entities.CourseStatus;

@Repository
public interface CourseStatusRepository extends JpaRepository<CourseStatus, Long> {
}
