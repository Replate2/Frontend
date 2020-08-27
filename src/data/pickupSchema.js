import * as Yup from "yup";
import data from "./data";

const pickupSchema = Yup.object().shape({
    date: Yup
    .string()
    //.date()
    .required(data.errors.noDate),
    qty: Yup
    .string()
    //.number()
    .required(data.errors.noQty),
    type: Yup
    .string()
    .required(data.errors.noType),
});

export default pickupSchema;