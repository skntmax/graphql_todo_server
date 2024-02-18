const { todoModel, userModel } = require("./src/users/modals");
const allTodos = require("./todo_placeholder");
const users = require("./todo_users");
const { faker } = require("@faker-js/faker");

async function insertTod() {
  try {
    for (let i = 0; i < allTodos.length; i++) {
      let todo = todoModel({
        userId: allTodos[i].userId,
        id: allTodos[i].id,
        title: allTodos[i].title,
        completed: true,
      });

      await todo.save();

      console.log("saved ", allTodos[i].id);
    }
  } catch (err) {
    console.log("err", err.message);
  }
}

async function updateDisc() {
  try {
    for (let i = 0; i < allTodos.length; i++) {
      const { id } = await todoModel.findOne(
        { id: allTodos[i].id },
        { _id: 0, id: 1 }
      );

      console.log(id);
      let updated = await todoModel.findOneAndUpdate(
        { id: id },
        {
          $set: {
            discription: faker.lorem.paragraph(5),
          },
        },
        { multi: true }
      );

      // await updated.save();

      console.log("saved ", updated);
    }
  } catch (err) {
    console.log("err", err);
  }
}

async function insertUsers() {
  try {
    for (let i = 0; i < users.length; i++) {
      let todo = userModel.userModel({
        id: users[i].id,
        email: users[i].email,
        username: users[i].username,
        website: users[i].website,
      });

      await todo.save();

      console.log("saved ", users[i].id);
    }
  } catch (err) {
    console.log("err", err.message);
  }
}

module.exports = { insertTod, insertUsers, updateDisc };
