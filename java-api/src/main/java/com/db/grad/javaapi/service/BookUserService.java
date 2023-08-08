package com.db.grad.javaapi.service;

import com.db.grad.javaapi.model.BookUser;
import com.db.grad.javaapi.repository.BookUserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BookUserService {
    @Autowired
    private BookUserRepository bookUserRepository;

    public BookUserService(BookUserRepository bookUserRepo){
        bookUserRepository = bookUserRepo;
    }
    public List<BookUser> getBookUserByBookID(long id){
        return bookUserRepository.findByBookID(id);
    }
    public List<BookUser> getBookUserByUserID(long id){
        return bookUserRepository.findByUserID(id);
    }

}
