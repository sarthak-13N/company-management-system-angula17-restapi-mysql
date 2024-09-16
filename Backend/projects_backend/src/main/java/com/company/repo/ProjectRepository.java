package com.company.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.company.model.Project;

public interface ProjectRepository extends JpaRepository<Project, Long> {
}
