const { todoModel, userModel } = require("./modals");

const getAllTodos = async (pn = 1) => {
  try {
    let res = await todoModel
      .find({})
      .skip(pn * (pn - 1))
      .limit(10);
    return res;
  } catch (err) {
    return false;
  }
};

const getTodoCount = async () => {
  try {
    let res = await todoModel.find({}).count("id");
    if (res != null) return { total: res };
    return 0;
  } catch (err) {
    return false;
  }
};

const getAllTodoById = async ({ id }) => {
  try {
    let res = await todoModel.findOne({ id: id });
    if (res != null) {
      return res;
    }
  } catch (err) {
    return false;
  }
};

const getAllUsers = async () => {
  try {
    let res = await userModel.find({});
    return res;
  } catch (err) {
    return err.message;
  }
};

const getTodoByUserId = async ({ id }) => {
  try {
    let res = await todoModel.find({ userId: id });
    return res;
  } catch (err) {
    return err.message;
  }
};

module.exports = {
  getAllTodos,
  getAllTodoById,
  getAllUsers,
  getTodoByUserId,
  getTodoCount,
};
