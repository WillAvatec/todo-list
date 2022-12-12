import { formatDistance, subDays } from "date-fns";
import { elementHelper } from "./modules/Classes/elementCreator";

const one = formatDistance(subDays(new Date(),5),new Date(),{addSuffix:true});

const container = document.querySelector('.container');

