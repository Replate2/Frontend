import * as Yup from "yup";

const pickupSchema = Yup.object().shape({
    date: Yup
    .string()
    //.date()
    .required("Please enter a date."),
    qty: Yup
    .string()
    //.number()
    .required("Please enter the quantity of food available."),
    type: Yup
    .string()
    .required("Please enter the type of food available."),
});

export default pickupSchema;