package com.example.moeenms.model.Entities;


import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table
public class Questions {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)

    private int questionId;
    private String title;
    private String content;
    private String answer1;
    private String answer2;
    private String answer3;


    @ManyToOne
    @JoinColumn(name= "user_id" ,referencedColumnName = "id")
    private User user;

    public Questions() {
    }

    public Questions(int questionId, String title, String content, String answer1, String answer2, String answer3) {
        this.questionId = questionId;
        this.title = title;
        this.content = content;
        this.answer1 = answer1;
        this.answer2 = answer2;
        this.answer3 = answer3;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public int getQuestionId() {
        return questionId;
    }

    public void setQuestionId(int questionId) {
        this.questionId = questionId;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public String getAnswer1() {
        return answer1;
    }

    public void setAnswer1(String answer1) {
        this.answer1 = answer1;
    }

    public String getAnswer2() {
        return answer2;
    }

    public void setAnswer2(String answer2) {
        this.answer2 = answer2;
    }

    public String getAnswer3() {
        return answer3;
    }

    public void setAnswer3(String answer3) {
        this.answer3 = answer3;
    }


}
