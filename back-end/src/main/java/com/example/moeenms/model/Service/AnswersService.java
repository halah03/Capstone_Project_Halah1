package com.example.moeenms.model.Service;

import com.example.moeenms.model.Entities.Answers;
import com.example.moeenms.model.Entities.User;
import com.example.moeenms.model.Repository.AnswersRepository;
import com.example.moeenms.model.Repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class AnswersService {

    private AnswersRepository answersRepository;

    @Autowired
    public AnswersService(AnswersRepository answersRepository) {
        this.answersRepository = answersRepository;
    }

    public List<Answers> getAnswerss() {
        return answersRepository.findAll();
    }


    public Optional<Answers> getAnswers(Integer answerId) {
        return answersRepository.findById(answerId);
    }

    public void addNewAnswers(Answers answers) {
        answersRepository.save(answers);

    }
    public void deleteAnswers(Integer answerId) {
        answersRepository.deleteById(answerId);
    }
}

