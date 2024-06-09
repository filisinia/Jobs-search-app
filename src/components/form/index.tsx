'use client';

import { Formik, Form } from 'formik';
import { useRouter } from 'next/navigation';
import signupSchema from '@/utils/validation';
import InputField from '@/components/form/inputField';
import { UserData } from '@/types';
import { setUserDataIntoLS } from '@/utils/localStorage';

const FormElem = (): JSX.Element => {
  const router = useRouter();

  const handleSubmit = (userData: UserData): void => {
    setUserDataIntoLS(userData);
    router.push('/user-profile');
  };

  return (
    <section className="flex flex-col items-center justify-center gap-4 mb-10 p-10 max-w-2xl rounded-lg bg-slate-50/5 shadow-lg shadow-indigo-300/10 m-auto mt-10">
      <h1 className="text-3xl font-bold text-white">Sign up</h1>
      <Formik
        initialValues={{
          name: '',
          desiredJobTitle: '',
          aboutMe: '',
        }}
        validationSchema={signupSchema}
        onSubmit={(userData) => handleSubmit(userData)}
      >
        <Form className="text-md flex flex-col items-stretch gap-3 lg:w-2/4">
          <InputField label="Name" name="name" />
          <InputField label="Desired job" name="desiredJobTitle" />
          <InputField label="About me" name="aboutMe" />
          <button
            className="shadow bg-indigo-500/30 hover:bg-indigo-400/30 focus:outline-none text-white font-bold py-2 px-6 rounded mt-3"
            type="submit"
          >
            Submit
          </button>
        </Form>
      </Formik>
    </section>
  );
};

export default FormElem;
