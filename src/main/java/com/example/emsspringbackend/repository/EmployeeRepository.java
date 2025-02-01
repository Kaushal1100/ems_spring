package com.example.emsspringbackend.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.emsspringbackend.entity.Employee;

public interface EmployeeRepository extends JpaRepository<Employee,Long> {

}
