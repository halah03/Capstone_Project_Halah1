package com.example.moeenms.model.Service;

import com.example.moeenms.model.Entities.Questions;
import com.example.moeenms.model.Repository.QuestionsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;
@Service
public class QuestionsService {
    private QuestionsRepository questionsRepository;
    @Autowired
    public QuestionsService(QuestionsRepository questionsRepository) {
        this.questionsRepository = questionsRepository;
    }
    public List<Questions> getQuestionss() {
        return questionsRepository.findAll();
    }
    public Optional<Questions> getQuestions(Integer questionId) {
        return questionsRepository.findById(questionId);
    }

    public void addNewQuestions(Questions questions) {
        questionsRepository.save(questions);
    }
    public void deleteQuestions(Integer questionId) {
        questionsRepository.deleteById(questionId);

    }
}

