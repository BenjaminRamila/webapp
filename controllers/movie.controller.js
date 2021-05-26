const { MovieModel } = require("../models/Movie");

const newMovie = async (req, res) => {
  try {
    const { title, review, rating } = req.body;
    const movie = MovieModel({ title, review, rating });
    await movie.save();

    res.status(201).json(movie);
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
};

const getAllMovies = async (req, res) => {
  try {
    const movies = await MovieModel.find({});
    res.status(201).json(movies);
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
};

const getMovieById = async (req, res) => {
  try {
    const { id } = req.params;
    const movies = await MovieModel.findById({ _id: id });
    res.status(201).json(movies);
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
};

const editMovie = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, review, rating } = req.body;
    const updatedMovie = await MovieModel.findByIdAndUpdate({ _id: id }, {title:title, rating:rating, review:review},{new:true});

    res.status(200).json(updatedMovie);
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
};

const deleteMovie = async (req, res) => {
  try {
    const { id } = req.params;
    const movie = await MovieModel.findByIdAndDelete({ _id: id });
    res.status(200).json(movie);
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
};

module.exports = { newMovie, getAllMovies, getMovieById, editMovie, deleteMovie };
