package com.vsics.student.dao;

import static com.vsics.student.dao.OurConnection.con;

import java.sql.PreparedStatement;
// import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.Scanner;

public class UpdateStudentResult {
	public static void updateStudentResultByRollNumber() {

		PreparedStatement ps = null;
		int result = 0;
		int rollNo = 0;
		String name = null;
		Scanner scanner = null;
		try {
			// getting input values from user
			scanner = new Scanner(System.in);

			System.out.println("Please Enter Your Roll Number");
			rollNo = scanner.nextInt();
			System.out.println("Please Enter Your Student Name");
			name = scanner.next();
			// load the driver and create the connection
			OurConnection.getConnection();
			// prepare query
			String UPDATE_STUDENT_RESULT = "update student  set sname=? where rollnumber=?";
			// create the PreparedStatement object
			if (con != null) {
				ps = con.prepareStatement(UPDATE_STUDENT_RESULT);
			}
			// calculate total marks

			// set values to the pre compiled sql query (ps object)
			if (ps != null) {
				ps.setString(1, name);
				ps.setInt(2, rollNo);
			}
			// Execute sql query
			if (ps != null) {
				result = ps.executeUpdate();
			}
			if (result == 0) {
				System.out.println("Record not Updated for " + name);
			} else {
				System.out.println("Record updated successfully  for " + name);
			}
			// handling known exceptions
		} catch (SQLException e) {
			e.printStackTrace();
			// handling unknown exception
		} catch (Exception e) {
			e.printStackTrace();
		} // close the connection in reverse order
		finally {
			try {
				ps.close();
			} catch (SQLException e) {
				e.printStackTrace();
			}
			try {
				con.close();
			} catch (SQLException e) {
				e.printStackTrace();
			}
			try {
				scanner.close();
			} catch (Exception e) {
				e.printStackTrace();
			}
		}

	}// close updateStudentResultByRollNumber()
}

