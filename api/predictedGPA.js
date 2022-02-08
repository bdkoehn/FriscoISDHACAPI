const { default: axios } = require("axios");

module.exports = async (req, res) => {
    const { weightedGPA, unweightedGPA, studentGrade, currentClasses } = req.body;

    const { data } = await axios.post(`https://gradualgrades.herokuapp.com/predictedGPA`, {
        weightedGPA,
        unweightedGPA,
        studentGrade,
        currentClasses
    });

    return res.send(data);
}