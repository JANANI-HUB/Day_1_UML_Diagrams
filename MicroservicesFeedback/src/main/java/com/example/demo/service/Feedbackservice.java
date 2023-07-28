package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.Feedback;
import com.example.demo.repository.Feedbackrepo;


@Service
public class Feedbackservice {
	@Autowired
	Feedbackrepo r;
    public Feedback postDetails(Feedback e) {
    	return r.save(e);
    }
    public List<Feedback> getdetails(){
  	  return r.findAll();
    }
    }
