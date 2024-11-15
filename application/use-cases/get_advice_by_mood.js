const Meditation = require("../../domain/entities/meditation");
const UseCaseInterFace = require("../interfaces/use_case_interface");

class GetAdviceByMood extends UseCaseInterFace {
  constructor(adviceRepository) {
    super();
    this.adviceRepository = adviceRepository;
  }

  async execute(mood) {
    const adviceData = await this.adviceRepository.getAdviceByMood(mood);
    return new Meditation({ text: adviceData });
  }
}

module.exports = GetAdviceByMood;
