package com.hospitalmanagement.system.main;

import com.hospitalmanagement.system.entity.Patient;
import com.hospitalmanagement.system.service.PatientService;
import com.hospitalmanagement.system.service.PatientServiceImpl;

public class HMS {
	public static void main(String[] args) {
		PatientService patientService = new PatientServiceImpl();
		Patient p1 = new Patient(101, "AMAN", 993900032, 45, "HAIZA");
		Patient p2 = new Patient(102, "AJAD", 993900033, 25, "MALARIA");
		Patient p3 = new Patient(103, "SURESH", 9123456789L, 40, "DIABETES");
		Patient p4 = new Patient(104, "NEHA", 9988776655L, 28, "ASTHMA");
		Patient p5 = new Patient(105, "RAHUL", 9876012345L, 35, "DENGUE");
		Patient p6 = new Patient(106, "PRIYA", 9798123456L, 22, "COLD & COUGH");

		patientService.addPatient(p1);
		patientService.addPatient(p2);
		patientService.addPatient(p3);
		patientService.addPatient(p4);
		patientService.addPatient(p5);
		patientService.addPatient(p6);

//		System.out.println(patientService.addPatient(p1));

		System.out.println();

//		patientService.viewAllPatients().forEach(System.out::println);

		System.out.println();

		System.out.println(patientService.deletePatient(102));

		System.out.println();

//		patientService.viewAllPatients().forEach(System.out::println);

		System.out.println();

		System.out.println(patientService.viewPatientById(102));
	}
}
