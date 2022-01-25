package com.example.moeenms.model.Entities;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table
public class User {
    @Id
    private int id;
    private String username;
    private int password;
    private String firstName;
    private String lastName;
    private String email;
    private String image;

//
//    @ManyToOne
//    @JoinColumn(name = "question_id" , referencedColumnName = "questionId")
//    private Questions questions;
//
//    @ManyToOne
//    @JoinColumn(name = "answer_id" , referencedColumnName = "answerId")
//    private Answers answers;

    @OneToMany(mappedBy = "user")
    @JsonIgnore
    private List<Questions> items = new ArrayList<>();

    @OneToMany(mappedBy = "user")
    @JsonIgnore
    private List<Answers> complains = new ArrayList<>();

//    @OneToMany(mappedBy = "user")
//    @JsonIgnore
//    private List<Permission> permissions = new ArrayList<>();

    public User() {
    }

    public User(int id, String username, int password, String firstName, String lastName, String email, String image) {
        this.id = id;
        this.username = username;
        this.password = password;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.image = image;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public int getPassword() {
        return password;
    }

    public void setPassword(int password) {
        this.password = password;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }


    public List<Questions> getItems() {
        return items;
    }

    public void setItems(List<Questions> items) {
        this.items = items;
    }

    public List<Answers> getAnswers() {
        return complains;
    }

    public void setAnswers(List<Answers> complains) {
        this.complains = complains;
    }

    @Override
    public String toString() {
        return "User{" +
                "id=" + id +
                ", username='" + username + '\'' +
                ", password=" + password +
                ", firstName='" + firstName + '\'' +
                ", lastName='" + lastName + '\'' +
                ", email='" + email + '\'' +
                ", holiday=" + getItems().listIterator() +
                '}';
    }
}


