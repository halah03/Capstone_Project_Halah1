package com.example.moeenms.controller;

import com.example.moeenms.model.Entities.Questions;
import com.example.moeenms.model.Service.QuestionsService;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;

import java.util.Arrays;
import java.util.List;

import static org.mockito.Mockito.*;

class QuestionsControllerTest {
    @Mock
    QuestionsService questionsService;
    @InjectMocks
    QuestionsController questionsController;

    @BeforeEach
    void setUp() {
        MockitoAnnotations.initMocks(this);
    }

    @Test
    void testGetQuestionss() {
        when(questionsService.getQuestionss()).thenReturn(Arrays.<Questions>asList(new Questions(0, "title", "content", "answer1", "answer2", "answer3")));

        List<Questions> result = questionsController.getQuestionss();
        Assertions.assertEquals(Arrays.<Questions>asList(new Questions(0, "title", "content", "answer1", "answer2", "answer3")), result);
    }

    @Test
    void testRegisterNewQuestions() {
        questionsController.registerNewQuestions(new Questions(0, "title", "content", "answer1", "answer2", "answer3"));
    }

    @Test
    void testDeleteQuestions() {
        questionsController.deleteQuestions(Integer.valueOf(0));
    }
}

//Generated with love by TestMe :) Please report issues and submit feature requests at: http://weirddev.com/forum#!/testme