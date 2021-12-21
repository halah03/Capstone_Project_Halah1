package com.example.moeenms.controller;

//import com.example.customermss.model.Cafe;
//import com.example.customermss.model.CafeService;
//import com.example.customermss.model.Customer;
//import com.example.customermss.model.CustomerService;
import com.example.moeenms.model.Entities.Questions;
import com.example.moeenms.model.Service.QuestionsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;
import java.util.Optional;
@RestController
@RequestMapping(path = "api/asks")
public class QuestionsController {
    private QuestionsService questionsService;
    @Autowired
    public QuestionsController(QuestionsService questionsService) {
        this.questionsService = questionsService;
    }
    @GetMapping
    public List<Questions> getQuestionss() {
        return questionsService.getQuestionss();
    }
    @PostMapping(path = "add")
    public void registerNewQuestions(@RequestBody Questions questions){
        questionsService.addNewQuestions(questions);
    }
    @DeleteMapping(path = "delete/{questionId}")
    public void deleteQuestions(@PathVariable ("questionId") Integer questionId){
        questionsService.deleteQuestions(questionId);
    }
}

