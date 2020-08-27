import * as Yup from "yup";
import data from "./data";

const profileSchema = Yup.object().shape({
    displayName: Yup
    .string()
    .required(data.errors.noName),
    phone: Yup
    .string()
    .required(data.errors.noPhone),
    // It turns out, phone numbers (with punctuation) are very difficult to validate.
    // I tried to look up using a regular expression but then I had two problems...
    // (It occurs that this is a slightly outdated solution anyway; probably the modern thing would be to require an app and do push notifications with it)
    address: Yup
    .string()
    .notRequired(),
});

export default profileSchema;