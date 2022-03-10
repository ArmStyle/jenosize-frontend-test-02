export default function handler(req, res) {
  var axios = require("axios");
  var config = {
    method: "get",
    url: `https://maps.googleapis.com/maps/api/place/textsearch/json?query=${req.query.search}%20restaurants&key=AIzaSyBZoqIv96rTKL8sVkk1qKTXrEk7IOm_aJg`,
    headers: {},
  };

  axios(config)
    .then(function (response) {
      res.status(200).json(response.data);
    })
    .catch(function (error) {
      res.status(400).json(error);
    });
}
