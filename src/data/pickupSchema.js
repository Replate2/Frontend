import * as Yup from "yup";

const pickupSchema = Yup.object().shape({
    date: Yup.date().required("Please enter a date."),
    qty: Yup.required("Please enter the quantity of food available.").number("Food quantity is not a number."),
    type: Yup.string.required("Please enter the type of food available."),
});

export default pickupSchema;