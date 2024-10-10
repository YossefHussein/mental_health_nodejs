const Meditation = require("../../domain/entities/meditation")
// import the interface
const UseCaseInterFace = require('../interfaces/use_case_interface')

class GetDailyQuotes extends UseCaseInterFace {
    constructor(quotesRepository) {
        super()
        this.quotesRepository = quotesRepository
    }

    async execute() {
        // take the quote form api
        const quoteData = await this.quotesRepository.getDailyQuotes()
        // and return the quote to Meditation
        return new Meditation({text: quoteData})
    }
}

module.exports = GetDailyQuotes