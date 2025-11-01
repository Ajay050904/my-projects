package com.hospitalmanagement.system.service;

import java.util.List;

import com.hospitalmanagement.system.entity.Patient;
import com.hospitalmanagement.system.repository.PatientRepository;

public class PatientServiceImpl implements PatientService {

	private PatientRepository patientRepo;

	public PatientServiceImpl() {
		patientRepo = new PatientRepository();
	}

	@Override
	public Patient addPatient(Patient patient) {
		Patient patient2 = null;
		if (patientRepo != null) {
			patient2 = patientRepo.savePatient(patient);
		}
		return patient2;
	}

	@Override
	public String deletePatient(int patientId) {
		return patientRepo.removePatient(patientId);
	}

	@Override
	public Patient viewPatientById(int patientId) {
		Patient patient3 = patientRepo.showPatientById(patientId);
		if (patient3 != null) {
			return patient3;
		} else {
			System.out.println("patient with patiendId " + patientId + " doesn't exist.");
			return null;
		}
	}

	@Override
	public List<Patient> viewAllPatients() {
		return patientRepo.displayAllPatients();
	}

}
