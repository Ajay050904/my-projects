package com.bytecode.exception;

public class BookNotFoundException extends RuntimeException {

	public BookNotFoundException(String exceptionMessage) {
		super(exceptionMessage);
	}

}
