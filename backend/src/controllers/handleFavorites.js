const myFavorites = [];

function postFav(req, res) {
  const character = req.body;
  myFavorites.push(character);
  res.status(200).json(myFavorites);
}

function deleteFav(req, res) {
  const { id } = req.params;
  const filtered = myFavorites.filter(
    (character) => character.id !== Number(id)
  );
  myFavorites.length = 0; // Clear the array
  myFavorites.push(...filtered); // Re-populate the array with the filtered characters
  res.status(200).json(filtered);
}

module.exports = {
  postFav,
  deleteFav,
};