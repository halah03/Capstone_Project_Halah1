package com.example.moeenms.model.Repository;

import com.example.moeenms.model.Entities.Questions;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface QuestionsRepository  extends JpaRepository<Questions, Integer> {
}

