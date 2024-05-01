import prompts from "prompts";

let toDoList = [];

const main = async () => {
  const toDoMenu = async () => {
    return await prompts({
      type: "select",
      name: "value",
      message: "What action to perform?",
      choices: [
        { title: "Show ToDo list", value: "S" },
        { title: "Add to ToDo list", value: "A" },
        { title: "Delete A ToDo list item", value: "D" },
        { title: "Quit ToDo list", value: "Q" },
      ],
    });
  };
  let addToDo = async () => {
    return await prompts({
      type: "text",
      name: "value",
      message: "What is your new ToDo item?",
    });
  };
  // let message = await nextToDo();
  // console.log(message);

  const showToDo = () => {
    console.log("===================");
        toDoList.forEach( (x) => console.log(x.value));
    console.log("===================");
  };

  let option = {};
  do{
    option = await toDoMenu();
    switch (option.value){
      case 'S':
        showToDo();
        break;
      case 'A': 
        toDoList.push(await addToDo());
        break;
    }
  } while(option.value != 'Q');
  
};

main().catch(console.error);
