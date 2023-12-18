package com.diary.diary;

import java.time.LocalDate;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RequestBody;

@Controller
public class DiaryController {

    @Autowired
    private DiaryRepository diaryRepository;

    @GetMapping
    public String diery(Model model) {
        model.addAttribute("diaryPosts", diaryRepository.findAll());
        return "index";
    }

    @PostMapping("/new-post")
    public String newPost(@RequestParam String addPostTital, @RequestParam String addPostText,
            @RequestParam LocalDate AddPostDate) {
        Diary diary = new Diary();
        diary.tital = addPostTital;
        diary.post = addPostText;
        diary.date = AddPostDate;
        diaryRepository.save(diary);

        return "redirect:/";
    }

    @GetMapping("/delete-diary-post")
    public String deletePost(@RequestParam int id) {
        diaryRepository.deleteById(id);
        System.out.println("deletePost" + id);
        return "redirect:/";
    }

}
