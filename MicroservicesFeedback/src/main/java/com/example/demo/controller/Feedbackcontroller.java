package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.Feedback;
import com.example.demo.service.Feedbackservice;

@CrossOrigin
@RestController
@RequestMapping("api/v1/feedback")
public class Feedbackcontroller {
	
		@Autowired
	          
		
		    Feedbackservice s;
		   
			
			@PostMapping("/postfeed")
			public Feedback addInfo(@RequestBody Feedback st) {
				return s.postDetails(st);
			}
			
			@GetMapping("/getfeed")
			public List<Feedback> fetchDetails(){
				return s.getdetails();
			}
			
}
