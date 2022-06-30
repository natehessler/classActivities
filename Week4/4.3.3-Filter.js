// filter the to-dos for incomplete tasks
const incompleteTasks = data.filter(task => task.completed > 1);

// console.log(incompleteTasks);
// filter for user 6's tasks
const user6tasks = data.filter(task => task.userId === 6);

console.log(user6tasks);

// filter for tasks with a title less than 24 characters long
const shortTitle = data.filter(short => short.title.length < 24);
