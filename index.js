const prompts = require("prompts");

const main = async () => {
  const nextToDo = async () => {
    return await prompts({
      type: "text",
      name: "value",
      message: "What is your next ToDo item?",
    });
  };
  const message = await nextToDo();
  console.log(message);
};

main().catch(console.error);
