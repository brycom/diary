package com.diary.diary;

import java.sql.Date;
import java.time.LocalDate;

import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import jakarta.transaction.Transactional;

public interface DiaryRepository extends CrudRepository<Diary, Integer> {

    // @Query("SELECT d FROM Diary d WHERE d.id =")

    @Transactional
    @Modifying
    @Query("UPDATE Diary d SET d.post = ?1 WHERE d.id =?2")
    int setPost(String post, int id);

    @Transactional
    @Modifying
    @Query("UPDATE Diary d SET d.tital = ?1 WHERE d.id =?2")
    int setTital(String tital, int id);

    @Transactional
    @Modifying
    @Query("UPDATE Diary d SET d.date = ?1 WHERE d.id =?2")
    int setDate(LocalDate date, int id);

}
