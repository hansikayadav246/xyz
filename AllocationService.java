package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.Student;
import com.example.demo.model.ExamHall;
import com.example.demo.model.SeatAllocation;
import com.example.demo.repository.StudentRepository;
import com.example.demo.repository.ExamHallRepository;
import com.example.demo.repository.SeatAllocationRepository;

@Service
public class AllocationService {

    @Autowired
    private StudentRepository studentRepository;

    @Autowired
    private ExamHallRepository hallRepository;

    @Autowired
    private SeatAllocationRepository allocationRepository;

    public void allocateSeats(){

        List<Student> students = studentRepository.findAll();
        List<ExamHall> halls = hallRepository.findAll();

        int seatNumber = 1;
        int studentIndex = 0;

        for (ExamHall hall : halls) {

            for (int i = 1; i <= hall.getTotalSeats(); i++) {

                if (studentIndex >= students.size()) {
                    return;
                }

                Student student = students.get(studentIndex);

                SeatAllocation allocation = new SeatAllocation();
                allocation.setStudentId(student.getStudentId());
                allocation.setHallName(hall.getHallName());
                allocation.setSeatNumber(i);

                allocationRepository.save(allocation);

                studentIndex++;
            }
        }
    }
}
