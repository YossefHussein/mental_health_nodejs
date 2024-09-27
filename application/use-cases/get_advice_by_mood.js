const UseCaseInterFace = require('../interfaces/use_case_interface')


class GetAdviceByMood extends UseCaseInterFace {
    constructor(quotesRepository) {
        super()
        this.quotesRepository = quotesRepository
    }

    async execute(mood) {
        // take the quote form api
        const quoteData = await this.quotesRepository.GetAdviceByMood()
        // and return the quote to Meditation
        return new Meditation({ text: quoteData })
    }
}


module.exports = GetAdviceByMood