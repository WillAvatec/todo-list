import { head,sidebar } from "./modules/renderHome";
import { formatDistance, subDays } from "date-fns";

const one = formatDistance(subDays(new Date(),5),new Date(),{addSuffix:true});

console.log(one)

head()
sidebar()