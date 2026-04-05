package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.example.demo.model.SeatAllocation;
import com.example.demo.repository.SeatAllocationRepository;
import com.example.demo.service.AllocationService;

@RestController
@RequestMapping("/allocate")
@CrossOrigin(origins = "*")
public class AllocationController {

    @Autowired
    private AllocationService allocationService;

    @Autowired
    private SeatAllocationRepository allocationRepository;

    // Run seat allocation
    @PostMapping("/run")
    public String runAllocation(){
        allocationService.allocateSeats();
        return "Seat Allocation Completed Successfully";
    }

    // View all allocations
    @GetMapping
    public List<SeatAllocation> getAllAllocations(){
        return allocationRepository.findAll();
    }

    // Get allocation by student id
    @GetMapping("/{studentId}")
    public List<SeatAllocation> getAllocationByStudent(@PathVariable String studentId){
        return allocationRepository.findAll()
                .stream()
                .filter(a -> a.getStudentId().equals(studentId))
                .toList();
    }
}
