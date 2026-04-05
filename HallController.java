package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.example.demo.model.ExamHall;
import com.example.demo.repository.ExamHallRepository;

@RestController
@RequestMapping("/halls")
@CrossOrigin(origins = "*")
public class HallController {

    @Autowired
    private ExamHallRepository hallRepository;

    // Add new hall
    @PostMapping
    public ExamHall addHall(@RequestBody ExamHall hall){
        return hallRepository.save(hall);
    }

    // Get all halls
    @GetMapping
    public List<ExamHall> getAllHalls(){
        return hallRepository.findAll();
    }

    // Get hall by ID
    @GetMapping("/{id}")
    public ExamHall getHallById(@PathVariable Long id){
        return hallRepository.findById(id).orElse(null);
    }

    // Delete hall
    @DeleteMapping("/{id}")
    public String deleteHall(@PathVariable Long id){
        hallRepository.deleteById(id);
        return "Hall deleted successfully";
    }
}
