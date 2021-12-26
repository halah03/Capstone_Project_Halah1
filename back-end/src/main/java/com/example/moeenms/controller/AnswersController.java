package com.example.moeenms.controller;

import com.example.moeenms.model.Entities.Answers;
import com.example.moeenms.model.Entities.Questions;
import com.example.moeenms.model.Service.AnswersService;
import com.example.moeenms.model.Service.QuestionsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;
import java.util.Optional;
@RestController
@RequestMapping(path = "api/answers")
public class AnswersController {
    private AnswersService answersService;
    @Autowired
    public AnswersController(AnswersService answersService) {
        this.answersService = answersService;
    }
    @GetMapping
    public List<Answers> getAnswerss() {
        return answersService.getAnswerss();
    }
    @PostMapping(path = "add")
    public void registerNewAnswers(@RequestBody Answers answers){
        answersService.addNewAnswers(answers);
    }
    @DeleteMapping(path = "delete/{answerId}")
    public void deleteAnswers(@PathVariable ("answerId") Integer answerId){
        answersService.deleteAnswers(answerId);
    }
}

