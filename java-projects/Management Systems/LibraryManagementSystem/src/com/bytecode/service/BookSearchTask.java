package com.bytecode.service;

import com.bytecode.exception.BookNotFoundException;
import com.bytecode.service.impl.LibraryServiceImpl;

public class BookSearchTask extends Thread {

	private LibraryServiceImpl impl;
	private String bookName;

	public BookSearchTask(LibraryServiceImpl impl, String bookName) {
		this.impl = impl;
		this.bookName = bookName;
	}

	@Override
	public void run() {
		try {
			Thread.sleep(1000);
			try {
				impl.searchBook(bookName);
			} catch (BookNotFoundException bookNotFoundException) {
				System.out.println(bookNotFoundException.getMessage());
			}

		} catch (InterruptedException e) {
			e.printStackTrace();
		}

	}

}
