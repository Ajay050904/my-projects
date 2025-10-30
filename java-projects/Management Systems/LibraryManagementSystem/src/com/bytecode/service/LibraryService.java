package com.bytecode.service;

import com.bytecode.entity.Book;
import com.bytecode.entity.User;

public interface LibraryService {
	void addBook(Book book);

	void viewBooks();

	void searchBook(String bookName);

	void addUser(User user);

	void viewUsers();

}
