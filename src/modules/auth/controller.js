const helper = require("./helper");

export const signUp = (req, res) => {
  console.log("====================================");
  console.log(req.body);
  console.log("=================controller===================");
  const { user, email, password } = req.body;
  helper
    .signUp(user, email, password)
    .then(result => {
      res.status(200).json(result);

    })
    .catch(err => {
      res.status(500).json(err);
    });
};

export const login = (req, res, next) => {
  const { email, password } = req.body;
  console.log("====================================");
  console.log(req.body);
  console.log("=================controller===================");
  helper
    .login(email, password)
    .then(result => {
      res.status(200).json(result);
    })
    .catch(err => {
      if (err === "NOT FOUND") {
        res.status(404).json(err);
      } else {
        res.status(500).json(err);
      }
    });
};
