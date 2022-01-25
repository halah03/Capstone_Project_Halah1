package com.example.moeenms.model.Repository;

import com.example.moeenms.model.Entities.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository  extends JpaRepository<User, Integer> {
    @Query("SELECT password FROM User WHERE email = :email" )
    String findPasswordByEmail(@Param("email") String email);
    @Query("select case when count(email) > 0 then true else false end from User where email = :email")
    Boolean existsByEmail(@Param("email") String email);
}
