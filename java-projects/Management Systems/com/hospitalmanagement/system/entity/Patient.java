package com.hospitalmanagement.system.entity;

public class Patient {
	private int patientId;
	private String patientName;
	private long phone;
	private int age;
	private String desease;

	public Patient(int patientId, String patientName, long phone, int age, String desease) {
		this.patientId = patientId;
		this.patientName = patientName;
		this.phone = phone;
		this.age = age;
		this.desease = desease;
	}

	public int getPatientId() {
		return patientId;
	}

	public void setPatientId(int patientId) {
		this.patientId = patientId;
	}

	public String getPatientName() {
		return patientName;
	}

	public void setPatientName(String patientName) {
		this.patientName = patientName;
	}

	public long getPhone() {
		return phone;
	}

	public void setPhone(long phone) {
		this.phone = phone;
	}

	public int getAge() {
		return age;
	}

	public void setAge(int age) {
		this.age = age;
	}

	public String getDesease() {
		return desease;
	}

	public void setDesease(String desease) {
		this.desease = desease;
	}

	@Override
	public String toString() {
		return "Patient [patientId=" + patientId + ", patientName=" + patientName + ", phone=" + phone + ", age=" + age
				+ ", desease=" + desease + "]";
	}

}
