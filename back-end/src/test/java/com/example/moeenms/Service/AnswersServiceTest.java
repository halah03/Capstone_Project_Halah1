package com.example.moeenms.Service;

import com.example.moeenms.model.Entities.Answers;
import com.example.moeenms.model.Entities.User;
import com.example.moeenms.model.Repository.AnswersRepository;
import com.example.moeenms.model.Service.AnswersService;
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

class AnswersServiceTest {
    @Mock
    AnswersRepository answersRepository;
    @InjectMocks
    AnswersService answersService;

    @BeforeEach
    void setUp() {
        MockitoAnnotations.initMocks(this);
    }

    @Test
    void testGetAnswerss() {
        List<Answers> result = answersService.getAnswerss();
        Assertions.assertEquals(Arrays.<Answers>asList(new Answers(0, "answerText", "answerText2", new User(0, "username", 0, "firstName", "lastName", "email", "image"))), result);
    }

    @Test
    void testGetAnswers() {
        Optional<Answers> result = answersService.getAnswers(Integer.valueOf(0));
        Assertions.assertEquals(null, result);
    }

    @Test
    void testAddNewAnswers() {
        answersService.addNewAnswers(new Answers(0, "answerText", "answerText2", new User(0, "username", 0, "firstName", "lastName", "email", "image")));
    }

    @Test
    void testDeleteAnswers() {
        answersService.deleteAnswers(Integer.valueOf(0));
    }
}

//Generated with love by TestMe :) Please report issues and submit feature requests at: http://weirddev.com/forum#!/testme