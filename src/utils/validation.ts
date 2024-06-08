import * as Yup from 'yup';

const signupSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Name should be more than 2 character')
    .max(20, 'Name should be less than 20 characters')
    .required('Required'),
  desiredJobTitle: Yup.string()
    .min(2, 'Job should be more than 2 characters')
    .max(20, 'Job should be less than 20 characters')
    .required('Required'),
  aboutMe: Yup.string()
    .min(30, 'About me should be more than 30 character')
    .max(300, 'About me should be less than 300 character')
    .required('Required'),
});

export default signupSchema;
