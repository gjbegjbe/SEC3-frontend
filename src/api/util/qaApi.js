import axios from "axios";

/**
 *
 * @param {string} question
 * @returns {Promise<string|{}>}
 */
export async function getAnswer(question) {
    let questionDetails = {};
    try {
        let response = await axios.post("http://localhost:8802/getQuestionDetails", {question: question});
        questionDetails = response.data;

        response = await axios.post("http://localhost:8081/api/getAnswer",
            {
                "questionIndex": Number(questionDetails.question.substr(1)) + 1,
                "groupName": questionDetails.nng,
                "brandName": questionDetails.nnb,
                "rankName": questionDetails.nnr,
                "vipName": questionDetails.nnv
            }
        );
        if (response.data.answer)
            return response.data.answer;
    } catch (e) {
        return "请检查网络连接。";
    }
}
