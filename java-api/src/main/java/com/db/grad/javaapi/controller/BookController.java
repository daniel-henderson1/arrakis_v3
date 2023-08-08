package com.db.grad.javaapi.controller;

import com.db.grad.javaapi.model.Book;
import com.db.grad.javaapi.service.BookService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1")
@CrossOrigin(origins = "http://localhost:3000")
public class BookController {
    private BookService BookService;
    @Autowired
    public BookController(BookService sT){
        BookService = sT;
    }
    @GetMapping("/Book/{id}")
    public Book getBookById(@PathVariable(value = "id") long id){
        return BookService.getBookByID(id);
    }
    @GetMapping("/Book")
    public List<Book> getAllBooks() {
        return BookService.getAllBooks();
    }
}