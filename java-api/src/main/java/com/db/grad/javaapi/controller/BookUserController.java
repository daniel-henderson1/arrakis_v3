package com.db.grad.javaapi.controller;

import com.db.grad.javaapi.model.BookUser;
import com.db.grad.javaapi.service.BookUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1")
@CrossOrigin(origins = "http://localhost:3000")
public class BookUserController {
    private BookUserService bookUserService;
    @Autowired
    public BookUserController(BookUserService bH){
        bookUserService = bH;
    }
    @GetMapping("/bookUser/{bookID}")
    public List<BookUser> getByBookId(@PathVariable(value = "id") long id){
        return bookUserService.getBookUserByBookID(id);
    }

    @GetMapping("/bookUser/{userID}")
    public List<BookUser> getByUserId(@PathVariable(value = "id") long id){
        return bookUserService.getBookUserByUserID(id);
    }
}
