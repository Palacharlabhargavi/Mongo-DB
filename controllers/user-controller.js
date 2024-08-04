const { UserModel, BookModel } = require("../models");

const getAllBooks = async (req, res) => {
  const books = await BookModel.find();
  console.log(books);
  if (books.length === 0) {
    return res.status(404).json({
      success: false,
      message: "No Book Found",
    });
  }
  // console.log(data);
  return res.status(200).json({
    success: true,
    data: books,
  });
};

// router.get("/:id", (req, res) => {
//   const { id } = req.params;
//   const book = books.find((each) => each.id === id);

//   if (!book) {
//     return res.status(404).json({
//       success: false,
//       message: "Book Not Found",
//     });
//   }
//   return res.status(200).json({
//     success: true,
//     message: "Found The Book By Their Id",
//     data: book,
//   });
// });

const getSingleBookById = () => {};

module.exports = { getAllBooks, getSingleBookById };
