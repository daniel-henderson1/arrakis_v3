package com.db.grad.javaapi.service;

import com.db.grad.javaapi.model.User;
import com.db.grad.javaapi.repository.UsersRepository;
import com.google.common.hash.Hashing;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.nio.charset.StandardCharsets;
import java.util.List;
import java.util.Optional;


@Service
public class UserHandler {
    private UsersRepository itsUsersRepo;

    @Autowired
    public UserHandler(UsersRepository userRepo)
    {
        itsUsersRepo = userRepo;
    }

    public User getUserByUsername(String username) {
        return itsUsersRepo.getUserByUsername(username);
    }

    public List<User> getAllUsers() {
        return itsUsersRepo.findAll();
    }

    public User addUser(User theUser) {
        return (User) itsUsersRepo.save(theUser);
    }

    public User getUserBySecurityID(long id) {
        return itsUsersRepo.getUserById(id);
    }

    public boolean removeUser(long id)
    {
        boolean result = false;
        Optional<User> theUser = Optional.ofNullable(itsUsersRepo.findById(id));
        if(theUser.isPresent())
        {
            itsUsersRepo.delete(theUser.get());
            result = true;
        }
        return  result;

    }

    public User getUserByID(long id)
    {
        return itsUsersRepo.findById(id);
    }

    public boolean auth(String username,String password){
        User user= itsUsersRepo.getUserByUsername(username);
        if(user == null){return false;}
        String sha256hex = Hashing.sha256()
                .hashString(password, StandardCharsets.UTF_8)
                .toString();
        if(user.getHash().equals(sha256hex)){
            return true;
        } else {
            return false;
        }
    }

    public boolean register(String username,String password,String firstName,String lastName){
        User user= itsUsersRepo.getUserByUsername(username);
        if(user != null){return false;}
        String sha256hex = Hashing.sha256()
                .hashString(password, StandardCharsets.UTF_8)
                .toString();
        User newUser = new User();
        newUser.setUsername(username);
        newUser.setHash(sha256hex);
        newUser.setFirstName(firstName);
        newUser.setLastName(lastName);
        itsUsersRepo.save(newUser);
        return true;
    }
    public User updateUserDetails(User UserToUpdate)
    {
        return (User) itsUsersRepo.save( UserToUpdate );
    }
}