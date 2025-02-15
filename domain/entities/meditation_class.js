class meditationClass {
  constructor({
    id,
    title,
    doctorName,
    medicalSpecialty,
    place,
    dateClass,
    timeClass,
    doctorPhoto,
    colorDoctorSpecialty,
  }) {
    this.id = id;
    this.title = title;
    this.doctorName = doctorName;
    this.medicalSpecialty = medicalSpecialty;
    this.place = place;
    this.dateClass = dateClass;
    this.timeClass = timeClass;
    this.doctorPhoto = doctorPhoto;
    this.colorDoctorSpecialty = colorDoctorSpecialty;
  }
}

module.exports = meditationClass;
