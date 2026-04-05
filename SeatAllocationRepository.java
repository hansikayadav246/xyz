package com.example.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.model.SeatAllocation;

import java.util.List;

@Repository
public interface SeatAllocationRepository extends JpaRepository<SeatAllocation, Long> {

    // Find seat allocation by student ID
    List<SeatAllocation> findByStudentId(String studentId);

}
