package com.diary.diary;

import java.time.LocalDate;
import java.util.List;

import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import jakarta.transaction.Transactional;

public interface DiaryRepository extends CrudRepository<Diary, Integer> {

    @Query("SELECT d FROM Diary d WHERE d.date <=?1 ORDER BY d.date DESC")
    List<Diary> activePosts(LocalDate date);

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
