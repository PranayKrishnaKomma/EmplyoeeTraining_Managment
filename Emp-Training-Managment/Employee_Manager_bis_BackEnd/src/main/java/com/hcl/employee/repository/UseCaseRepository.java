package com.hcl.employee.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.hcl.employee.entities.UseCase;

@Repository
public interface UseCaseRepository extends JpaRepository<UseCase, Long> {

}
