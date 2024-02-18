const { todoModel, userModel } = require("./modals");

const getAllTodos = async (limit) => {
  try {
    let res = await todoModel.find({}).limit(limit);
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
