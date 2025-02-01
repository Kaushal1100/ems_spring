package com.example.emsspringbackend.serviceimpl;

import org.springframework.stereotype.Service;

import com.example.emsspringbackend.dto.EmployeeDto;
import com.example.emsspringbackend.entity.Employee;
import com.example.emsspringbackend.mapper.EmployeeMapper;
import com.example.emsspringbackend.repository.EmployeeRepository;
import com.example.emsspringbackend.service.EmployeeService;

import lombok.AllArgsConstructor;
@Service
@AllArgsConstructor
public class EmployeeServiceImpl implements EmployeeService{
		
	private EmployeeRepository employeeRepository;
	@Override
	public EmployeeDto createEmployee(EmployeeDto employeeDto) {
		Employee employee=EmployeeMapper.mapToEmployee(employeeDto);
		Employee savedEmployee=employeeRepository.save(employee);
		return EmployeeMapper.mapToEmployeeDto(savedEmployee);
	}

}
