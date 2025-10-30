package com.bytecode.app;

import java.util.Scanner;

import com.bytecode.entity.Book;
import com.bytecode.entity.User;
import com.bytecode.exception.BookNotFoundException;
import com.bytecode.exception.InvalidOptionException;
import com.bytecode.service.BookSearchTask;
import com.bytecode.service.impl.LibraryServiceImpl;

public class LMSApp {

	public static void main(String[] args) {

		LibraryServiceImpl impl = new LibraryServiceImpl();
		while (true) {
			Scanner scanner = new Scanner(System.in);
			System.out.println("Please enter your choice");
			System.out.println("1 for add book");
			System.out.println("2 for viewBooks");
			System.out.println("3 for searchBookByName");
			System.out.println("4 for add user");
			System.out.println("5 for viewUsers");
			System.out.println("6 to exit");

			int choice = scanner.nextInt();

			switch (choice) {
			case 1:
				System.out.println("Please enter bookId");
				int bid = scanner.nextInt();
				System.out.println("Please enter book title");
				String title = scanner.next();
				System.out.println("Please enter book author");
				String author = scanner.next();
				Book book = new Book(bid, title, author);
				impl.addBook(book);
				break;

			case 2:
				impl.viewBooks();
				break;
			case 3:

				System.out.println("Please enter book title");
				String bookName = scanner.next();
				BookSearchTask searchTask = new BookSearchTask(impl, bookName);
			   searchTask.start();
				// impl.searchBook(bookName);
				break;

			case 4:

				System.out.println("Please enter user id");
				int uid = scanner.nextInt();
				System.out.println("Please enter user name");
				String user = scanner.next();
				User user2 = new User(user, uid);
				impl.addUser(user2);
				break;
			case 5:
				impl.viewUsers();
				break;
			case 6:
				System.out.println("exiting from system");
				System.exit(0);
				break;

			default:
				try {
					throw new InvalidOptionException("Please enter valid choice");
				} catch (InvalidOptionException exception) {
					System.out.println(exception.getMessage());
				}
				break;
			}
		}
	}

}
