package com.db.grad.javaapi.service;

import com.db.grad.javaapi.model.Book;
import com.db.grad.javaapi.repository.BookRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;


@Service
public class BookService implements IBookService{
    private BookRepository itsBooksRepo;

    @Autowired
    public BookService(BookRepository BookRepo)
    {
        itsBooksRepo = BookRepo;
    }

    @Override
    public List<Book> getAllBooks() {
        return itsBooksRepo.findAll();
    }

    @Override
    public Book addBook(Book theBook) {
        return itsBooksRepo.save(theBook);
    }



    @Override
    public boolean removeBook(long id)
    {
        boolean result = false;
        Optional<Book> theBook = Optional.ofNullable(itsBooksRepo.findById(id));
        if(theBook.isPresent())
        {
            itsBooksRepo.delete(theBook.get());
            result = true;
        }
        return  result;

    }
    @Override
    public Book getBookByID(long id)
    {
        return itsBooksRepo.findById(id);
    }

    @Override
    public Book updateBookDetails(Book BookToUpdate)
    {
        return itsBooksRepo.save( BookToUpdate );
    }
}