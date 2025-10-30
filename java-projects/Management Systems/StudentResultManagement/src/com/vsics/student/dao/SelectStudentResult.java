package com.vsics.student.dao;

import static com.vsics.student.dao.OurConnection.con;

import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.Scanner;

public class SelectStudentResult {
	public static void selectStudentResultByRollNumber() {
		PreparedStatement ps = null;
		ResultSet rs = null;
		int rollNo = 0;
		Scanner scanner = null;
		try {
			// getting input values from user
			scanner = new Scanner(System.in);

			System.out.println("Please Enter Your Roll Number");
			rollNo = scanner.nextInt();
			// load the driver and create the connection
			OurConnection.getConnection();
			// prepare query
			String SELECT_STUDENT_RESULT = "select * from student where ROLLNUMBER=?";
			// create the PreparedStatement object
			if (con != null) {
				ps = con.prepareStatement(SELECT_STUDENT_RESULT);
			}
			// calculate total marks

			// set values to the pre compiled sql query (ps object)
			if (ps != null) {
				ps.setInt(1, rollNo);

			}
			// Execute sql query
			if (ps != null) {
				rs = ps.executeQuery();
			}
			if (rs != null) {
				if (rs.next() != false) {
					System.out.println(rs.getInt(1) + " " + rs.getString(2) + " " + rs.getFloat(3) + " "
							+ rs.getString(4) + " " + rs.getString(5));
				}
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

	}// close selectStudentResultByRollNumber()
}

