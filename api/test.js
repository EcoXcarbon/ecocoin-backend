// api/test.js (new file)
module.exports = (req, res) => {
  console.log("TEST ENDPOINT HIT");
  res.status(200).json({ success: true });
}