const Income = require("../../models/Income");

// Load Input Validation
const validateIncomeInput = require("../../validation/incExp");

exports.addIncome = (req, res) => {
  const { errors, isValid } = validateIncomeInput(req.body);
  if (!isValid) {
    return res.status(400).json(errors);
  }
  const { desc, amount } = req.body;
  const newIncome = new Income({
    user: req.user.id,
    desc,
    amount
  });
  newIncome
    .save()
    .then((inc) => res.json(inc))
    .catch((err) => console.log("please Fill up the required fields"));
};

exports.getIncomeList = (req, res) => {
  Income.find({ user: req.user.id })
    .then((incList) => {
      res.json(incList);
    })

    .catch((err) => console.log(err));
};

exports.getTotalIncome = (req, res) => {
  Income.find({ user: req.user.id })
    .then((incList) => {
      let initialIncome = 0;
      incList.forEach((inc) => {
        initialIncome = initialIncome + inc.value;
      });
      res.json({ income: initialIncome });
    })
    .catch((err) => console.log(err));
};

exports.deleteIncome = (req, res) => {
  const incomeId = req.params.id;
  Income.findById({ _id: incomeId })
    .then((inc) => {
      if (inc.user.toString() !== req.user.id) {
        return res.status(401).json({ notauthorized: "user not authorized" });
      } else {
        inc.remove().then((result) => res.json(result));
      }
    })
    .catch((err) =>
      res.status(404).json({ noIncomeFound: "No Income List found" })
    );
};
