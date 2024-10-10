// this for get quotes or advice
class QuotesRepository {
    async getDailyQuotes() {
        // if error give me the error
        throw new Error('Method not implement the quotes')
    }
    async getAdviceByMood(mood) {
        // if error give me the error
        throw new Error('Method not implement the mood')
    }
}

// export the interface
module.exports = QuotesRepository