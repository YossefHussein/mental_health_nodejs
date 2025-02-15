const getAllMeditationClass = require("../../application/use-cases/get_meditation_class");

class MeditationClassesController {
    static async allClasses(req, res) {
        try {
            const getMeditationClass = new getAllMeditationClass();
            const classes = await getMeditationClass.execute();
            res.json(classes);
        } catch (error) {
            res.status(500).send({ error: error.message });
        }
    }
}

module.exports = MeditationClassesController;