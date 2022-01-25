package com.example.moeenms.controller;

import com.example.moeenms.model.Entities.Answers;
import com.example.moeenms.model.Entities.User;
import com.example.moeenms.model.Service.AnswersService;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;

import java.util.Arrays;
import java.util.List;

import static org.mockito.Mockito.*;

class AnswersControllerTest {
    @Mock
    AnswersService answersService;
    @InjectMocks
    AnswersController answersController;

    @BeforeEach
    void setUp() {
        MockitoAnnotations.initMocks(this);
    }

    @Test
    void testGetAnswerss() {
        when(answersService.getAnswerss()).thenReturn(Arrays.<Answers>asList(new Answers(0, "answerText", "answerText2", new User(0, "username", 0, "firstName", "lastName", "email", "image"))));

        List<Answers> result = answersController.getAnswerss();
        Assertions.assertEquals(Arrays.<Answers>asList(new Answers(0, "answerText", "answerText2", new User(0, "username", 0, "firstName", "lastName", "email", "image"))), result);
    }

    @Test
    void testRegisterNewAnswers() {
        answersController.registerNewAnswers(new Answers(0, "answerText", "answerText2", new User(0, "username", 0, "firstName", "lastName", "email", "image")));
    }

    @Test
    void testDeleteAnswers() {
        answersController.deleteAnswers("answerId");
    }
}

//Generated with love by TestMe :) Please report issues and submit feature requests at: http://weirddev.com/forum#!/testme