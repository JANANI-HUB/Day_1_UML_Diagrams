package com.iamneo.security.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Entity
@Table(name="admin")
public class Crudmodel {
      @Id
      @Column(name="concertid")
      private int concertid;
      @Column(name="concertname")
      private String concertname;
      @Column(name="singername")
      private String singername;
      @Column(name="genre")
      private String genre;
      @Column(name="date")
      private String date;
      @Column(name="time")
      private String time;
      @Column(name="location")
      private String location;
      
}
