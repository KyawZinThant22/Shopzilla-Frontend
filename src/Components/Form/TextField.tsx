import { useState } from 'react';

import { useFormContext, Controller } from 'react-hook-form';
import { EyeClose, EyeOpen } from '../../assets/icons';

interface FormProps {
  name: string;
  type?: string;
  label?: string;
  animated?: boolean;
  placeholder?: string;
  className?: string;
}

const TextField = ({
  name,
  label,
  type = 'text',
  className,
  placeholder,
  animated = true,
  ...other
}: FormProps) => {
  const { control } = useFormContext();

  const [inputType, setInputType] = useState(type);
  const [focus, setFocus] = useState(false);

  const togglePassword = () => {
    setInputType(inputType === 'password' ? 'text' : 'password');
  };
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <div className="group">
          <div
            className={`transform ${
              focus && animated && '-translate-y-3 text-[14px]'
            } duration-300 `}
          >
            <label
              htmlFor={label}
              className={`${focus && animated ? 'text-black' : ' text-gray-500'}`}
            >
              {label}
            </label>
          </div>
          <div className="relative group-hover:border-black">
            <div className="flex items-center justify-between">
              <input
                {...field}
                className={` ${className} w-full flex group-focus:text-red-400`}
                value={
                  typeof field.value === 'number' && field.value === 0 ? '' : field.value || ''
                }
                onFocus={() => setFocus(true)}
                onBlur={() => setFocus(false)}
                type={inputType}
                autoComplete="off"
                placeholder={placeholder}
              />
              {type === 'password' && (
                <div onClick={togglePassword}>
                  {inputType !== 'password' ? <EyeOpen /> : <EyeClose />}
                </div>
              )}
            </div>
            <div
              className={`${
                focus && animated && 'border-t-[2.5px] mt-3'
              } w-full  my-2 group-hover:border-black border-t-[2.5px]   border-x-0 border-b-0`}
            ></div>
            {error && (
              <p className="block text-xs font-normal text-red-500 mt-2">{error.message}</p>
            )}
          </div>
        </div>
      )}
    ></Controller>
  );
};

export default TextField;
