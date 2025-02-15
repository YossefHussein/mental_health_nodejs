// import the song fo r make song info
const meditationClass = require("../../domain/entities/meditation_class");
// import the interface to call execute function
const UseCaseInterFace = require("../interfaces/use_case_interface");
// this destruction objet to
// when pressed ctrl+right click you move to [getAllSong] function direct
// because the [getAllSong] is return in finally object
const { getAllMeditationClasses } = require("../../infrastructure/db/query/meditation_query");

class GetMeditationClasses extends UseCaseInterFace {
  async execute() {
    // get song by api
    const meditationRow = await getAllMeditationClasses();
    // and for [songRow] by map function to [Song] class
    // and return to user
    return meditationRow.map(
      (meditationClasses) =>
        new meditationClass({
          id: meditationClasses.id,
          title: meditationClasses.title,
          doctorName: meditationClasses.doctorname,
          medicalSpecialty: meditationClasses.medicalspecialty,
          place: meditationClasses.place,
          dateClass: meditationClasses.dateclass,
          timeClass: meditationClasses.timeclass,
          doctorPhoto: meditationClasses.photodoctor,
          colorDoctorSpecialty: meditationClasses.colorDoctorSpecialty,
        })
    );
  }
}

module.exports = GetMeditationClasses;
