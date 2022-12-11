import Todo from "./modules/todo.js";
import Project from "./modules/projects.js";
import Element from "./modules/element.js";
import { formatDistance, subDays } from "date-fns";

const one = formatDistance(subDays(new Date(),5),new Date(),{addSuffix:true});

console.log(one)