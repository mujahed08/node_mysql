import { find_top_ten_medicine } from "./dbops/medicine.js";


let medicines = await find_top_ten_medicine()
console.log(medicines);