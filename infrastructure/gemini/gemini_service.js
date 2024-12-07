// import packages
const dotenv = require("dotenv");
// make config of dotenv
dotenv.config();
// import the gemini package
const { GoogleGenerativeAI } = require("@google/generative-ai");
// import the interface
const QuotesRepository = require("../../application/interfaces/quotes_repository");
// adding the api key to gemini
const genAi = new GoogleGenerativeAI(process.env.Gemini_API_KEY);
// set the gemini model by [genAI]
const model = genAi.getGenerativeModel({ model: "gemini-1.5-pro" });

class GeminiService extends QuotesRepository {
  // we use this function in controller to get quotes or advices from gemini
  // get the advice by gemini
  async getAdviceByMood(mood) {
    // this is prompt of the gemini
    const prompt = `give the current mood of the user, provide an appropriate meditation advice or mental health exercise
                     So the mood is ${mood}: 
                     note don't return loop advice mean don't send same advice and don't return advice more then one and don't return same advice don't send"`;

    /**
     * 
     *                     

     *    {
                            "advice": "specific advice or exercises based on the user"s mood",
                            }
                            for example, if the user"s mood is "happy" the response should be:
                            {
                            advice": "engage in a gratitude practice by listing there things you are thankful for today. this will help sustain you positive"
                            }
     * // return the json without json keyword
     *
     */

    // adding the advice or prompt to model mean create the
    // content of gemini and return to user by [generateContent]
    const result = await model.generateContent(prompt);
    // return to user by [response] method
    const response = await result.response;
    // return the advice as text
    return response.text();
  }

  // it's like the [getAdviceByMood] but without mood
  // get the advice by gemini
  async getDailyQuotes() {
    const prompt = `Please provide three inspirational quotes for meditation, one for each part of the day: morning, noon, and evening. Respond in the following format:
                        {
                        "morningQuote": "Your morning quote here",
                        "noonQuote": "Your noon quote here",
                        "eveningQuote": "Your evening quote here"
                        }
                        return the json only without using keyword json and return the with the advice emoji`;
    const result = await model.generateContent(prompt);
    const response = await result.response;
    return response.text();
  }
}

module.exports = GeminiService;
