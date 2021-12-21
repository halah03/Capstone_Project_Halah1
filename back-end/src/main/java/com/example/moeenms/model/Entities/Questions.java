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
public class Questions {

    @Id
    private int questionId;
    private String title;
    private String content;
    private String answer1;
    private String answer2;
    private String answer3;


    @OneToMany(mappedBy = "questions")
    @JsonIgnore
    private List<User> items = new ArrayList<>();

    public Questions() {
    }

    public Questions(int question_id, String title, String content, String answer1, String answer2, String answer3, List<User> items) {
        this.questionId = questionId;
        this.title = title;
        this.content = content;
        this.answer1 = answer1;
        this.answer2 = answer2;
        this.answer3 = answer3;
        this.items = items;
    }

    public int getQuestion_id() {
        return questionId;
    }

    public void setQuestion_id(int questionId) {
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

    public List<User> getItems() {
        return items;
    }

    public void setItems(List<User> items) {
        this.items = items;
    }

    @Override
    public String toString() {
        return "Questions{" +
                "questionId=" + questionId +
                ", title='" + title + '\'' +
                ", content='" + content + '\'' +
                ", answer1='" + answer1 + '\'' +
                ", answer2='" + answer2 + '\'' +
                ", answer3='" + answer3 + '\'' +
                ", items=" + items +
                '}';
    }
}
