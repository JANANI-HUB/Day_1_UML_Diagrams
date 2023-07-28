package com.example.demo.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="feedback")
public class Feedback {


	       @Id
	       @Column(name="id")
	       private int id;
	       @Column(name="name")
	       private String name;
	       @Column(name="email")
	       private String email;
	       @Column(name="feedback")
	       private String feedback;
		public int getId() {
			return id;
		}
		public void setId(int id) {
			this.id = id;
		}
		public String getName() {
			return name;
		}
		public void setName(String name) {
			this.name = name;
		}
		public String getEmail() {
			return email;
		}
		public void setEmail(String email) {
			this.email = email;
		}
		public String getFeedback() {
			return feedback;
		}
		public void setFeedback(String feedback) {
			this.feedback = feedback;
		}
		public Feedback(int id, String name, String email, String feedback) {
			super();
			this.id = id;
			this.name = name;
			this.email = email;
			this.feedback = feedback;
		}
		public Feedback() {
			
		}
	}