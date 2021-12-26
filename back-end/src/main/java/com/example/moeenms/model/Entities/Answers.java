package com.example.moeenms.model.Entities;


import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table
public class Answers {
    @Id
    private int answerId;
    private String answerText;
    private String answerText2;

    public Answers() {
    }

    @OneToMany(mappedBy = "answers")
    @JsonIgnore
    private List<User> items = new ArrayList<>();

    public Answers(int answerId, String answerText, String answerText2) {
        this.answerId = answerId;
        this.answerText = answerText;
        this.answerText2 = answerText2;
    }

    public int getAnswerId() {
        return answerId;
    }

    public void setAnswerId(int answerId) {
        this.answerId = answerId;
    }

    public String getAnswerText() {
        return answerText;
    }

    public void setAnswerText(String answerText) {
        this.answerText = answerText;
    }

    public String getAnswerText2() {
        return answerText2;
    }

    public void setAnswerText2(String answerText2) {
        this.answerText2 = answerText2;
    }

    public List<User> getItems() {
        return items;
    }

    public void setItems(List<User> items) {
        this.items = items;
    }

    @Override
    public String toString() {
        return "Answers{" +
                "answerId=" + answerId +
                ", answerText='" + answerText + '\'' +
                ", answerText2='" + answerText2 + '\'' +
                ", items=" + items +
                '}';
    }
}




