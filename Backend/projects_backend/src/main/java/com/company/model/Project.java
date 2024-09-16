package com.company.model;

import jakarta.persistence.Entity;
import jakarta.persistence.*;

import java.time.LocalDate;

@Entity
public class Project {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long project_id;

    private String project_name;
    private LocalDate project_start_date;
    private LocalDate project_end_date;

    // Getters and Setters
    public Long getProject_id() {
        return project_id;
    }

    public void setProject_id(Long project_id) {
        this.project_id = project_id;
    }

    public String getProject_name() {
        return project_name;
    }

    public void setProject_name(String project_name) {
        this.project_name = project_name;
    }

    public LocalDate getProject_start_date() {
        return project_start_date;
    }

    public void setProject_start_date(LocalDate project_start_date) {
        this.project_start_date = project_start_date;
    }

    public LocalDate getProject_end_date() {
        return project_end_date;
    }

    public void setProject_end_date(LocalDate project_end_date) {
        this.project_end_date = project_end_date;
    }
}