package com.hospitalmanagement.system.repository;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
//import java.util.concurrent.CopyOnWriteArrayList;

import com.hospitalmanagement.system.entity.Patient;

public class PatientRepository {
	private List<Patient> patients;

	public PatientRepository() {
//		patients = new CopyOnWriteArrayList<Patient>(); // use either iterator to remove patient or this
		patients = new ArrayList<Patient>();
	}

	public Patient savePatient(Patient patient) {
		patients.add(patient);
		return patient;
	}

	public List<Patient> displayAllPatients() {
		return patients;
	}

	public String removePatient(int patientId) {
		Iterator<Patient> iterator = patients.iterator();
		while (iterator.hasNext()) {
			Patient p = iterator.next();
			if (p.getPatientId() == patientId) {
				iterator.remove(); // ✅ Safe removal
			}
		}
		return "patient with id " + patientId + " removed from database";
	}

	public Patient showPatientById(int patientId) {
		Patient p3 = null;
		Iterator<Patient> iterator = patients.iterator();
		while (iterator.hasNext()) {
			Patient p = iterator.next();
			if (p.getPatientId() == patientId) {
				p3 = p;
				break; // Stop searching once the patient is found
			}
		}
		return p3; // Return the found patient or null if not found
	}

}
