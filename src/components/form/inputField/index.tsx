import { Field, useField } from 'formik';
import { FC } from 'react';

interface InputFieldProps {
  label: string;
  name: string;
  textField?: boolean;
}

const InputField: FC<InputFieldProps> = ({ label, name, textField }) => {
  const [field, meta] = useField(name);

  return (
    <div className="flex flex-col gap-1">
      <label htmlFor={name}>{label}</label>
      <Field
        className={`bg-slate-200/20 p-2 rounded outline-none shadow-lg focus:shadow-indigo-300/10 ${textField && 'h-10'}`}
        {...field}
        id={name}
        name={name}
      />
      {meta.touched && meta.error ? (
        <div className="text-red-400 text-sm">{meta.error}</div>
      ) : null}
    </div>
  );
};

export default InputField;
