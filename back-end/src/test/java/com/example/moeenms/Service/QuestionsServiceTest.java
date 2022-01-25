package com.example.moeenms.Service;

import com.example.moeenms.model.Entities.Questions;
import com.example.moeenms.model.Repository.QuestionsRepository;
import com.example.moeenms.model.Service.QuestionsService;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;

import java.util.Arrays;
import java.util.List;
import java.util.Optional;

import static org.mockito.Mockito.*;

class QuestionsServiceTest {
    @Mock
    QuestionsRepository questionsRepository;
    @InjectMocks
    QuestionsService questionsService;

    @BeforeEach
    void setUp() {
        MockitoAnnotations.initMocks(this);
    }

    @Test
    void testGetQuestionss() {
        List<Questions> result = questionsService.getQuestionss();
        Assertions.assertEquals(Arrays.<Questions>asList(new Questions(0, "title", "content", "answer1", "answer2", "answer3")), result);
    }

    @Test
    void testGetQuestions() {
        Optional<Questions> result = questionsService.getQuestions(Integer.valueOf(0));
        Assertions.assertEquals(null, result);
    }

    @Test
    void testAddNewQuestions() {
        questionsService.addNewQuestions(new Questions(0, "title", "content", "answer1", "answer2", "answer3"));
    }

    @Test
    void testDeleteQuestions() {
        questionsService.deleteQuestions(Integer.valueOf(0));
    }
}

//Generated with love by TestMe :) Please report issues and submit feature requests at: http://weirddev.com/forum#!/testme