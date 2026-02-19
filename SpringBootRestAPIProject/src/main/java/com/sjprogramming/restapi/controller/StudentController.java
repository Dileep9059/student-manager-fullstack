package com.sjprogramming.restapi.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.sjprogramming.restapi.entity.Student;
import com.sjprogramming.restapi.repository.StudentRepository;

import java.util.List;

@RestController
//for react
@CrossOrigin(origins = "http://localhost:3000")
public class StudentController 
{
    @Autowired
    StudentRepository repo;
    
    //localhost:5432/students
    // TO GET ALL STUDENT DETAILS
    @GetMapping("/students")
    public List<Student> getAllStudents()
    {
        List<Student> students = repo.findAll();
        return students;
    }
    
    @GetMapping("/students/{id}")
    public Student getStudent(@PathVariable int id)
    {
        Student student = repo.findById(id).get();
        return student;
    }
    
    @PostMapping("/student/add")
    public void createStudent(@RequestBody Student student)
    {
        repo.save(student);
    }   
    
    @PutMapping("/student/update/{id}")
    public Student updateStudent(@PathVariable int id)
    {
    	Student student = repo.findById(id).get();
    	student.setName("Teja");
    	student.setPercentage(84);
    	repo.save(student);
    	return student;
    	
    }
    
    @DeleteMapping("/student/delete/{id}")
    public void deleteStudent(@PathVariable int id)
    {
    	Student student = repo.findById(id).get();
    	repo.delete(student);
    }
    
}  
