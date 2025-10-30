package com.vsics.student.result;

import static com.vsics.student.utility.Option.getOption;

import com.vsics.student.dao.DeleteStudentResult;
import com.vsics.student.dao.InsertStudentResult;
import com.vsics.student.dao.SelectAllStudentResult;
import com.vsics.student.dao.SelectStudentResult;
import com.vsics.student.dao.UpdateStudentResult;
import com.vsics.student.result.exception.InvalidOptionException;

public class StudenResult {

	public static void main(String[] args) {
	     	 String s=getOption();
		   if(s.equals("insert")) {
			  InsertStudentResult.insertStudentResult();
		  }
		   else if(s.equals("select")) {
			   SelectStudentResult.selectStudentResultByRollNumber();
		   }else if(s.equals("selectall")) {
			   SelectAllStudentResult.selectStudentResult();
		   }else if(s.equals("update")) {
			   UpdateStudentResult.updateStudentResultByRollNumber();
		   }else if(s.equals("delete")) {
			   DeleteStudentResult.deleteStudentResultByRollNumber();
		   }else {
			   if(s.equals("NA")) {
				   throw new InvalidOptionException("please currect option");
			   }
		   }
		   
    }// main
}// class