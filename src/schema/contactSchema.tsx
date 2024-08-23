import * as Yup from 'yup';

const contactUsSchema = Yup.object().shape({
    visitor: Yup.string().required('Name is required'),
    message: Yup.string().required('Message is required'),
});

export default contactUsSchema;
