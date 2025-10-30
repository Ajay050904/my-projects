package com.bytecode.service.impl;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.bytecode.entity.Book;
import com.bytecode.entity.User;
import com.bytecode.exception.BookNotFoundException;
import com.bytecode.service.LibraryService;

public class LibraryServiceImpl implements LibraryService {

	private List<Book> books = new ArrayList<Book>();
	private Map<Integer, User> users = new HashMap<Integer, User>();

	@Override
	public void addBook(Book book) {
		books.add(book);
		System.out.println(book.getTitle() + " book added successfully");
	}

	@Override
	public void viewBooks() {
		for (Book book : books) {
			System.out.println(book);
		}
	}

	@Override
	public void searchBook(String bookName) {
		for (Book book : books) {
			if (book.getTitle().equalsIgnoreCase(bookName)) {
				System.out.println(bookName + " is available");
			} else {
				throw new BookNotFoundException(bookName + " not available");
			}
		}
	}

	@Override
	public void addUser(User user) {
		users.put(user.getUserId(), user);
		System.out.println(user.getUserId() + " added successfully");
	}

	@Override
	public void viewUsers() {
		System.out.println("List of users==========");
		for (Map.Entry<Integer, User> user : users.entrySet()) {
			System.out.println(user.getKey() + " " + user.getValue());
		}
	}

}
