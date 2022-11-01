import React from 'react';
import { Button } from '../Components/Element';
import FormProvider from '../Components/HookForm/FormProvider';
import { useForm } from 'react-hook-form';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { toast } from 'react-toastify';
import { TextField } from '../Components/Form';

const Footer = () => {
  const footerLink = [
    'Help',
    'About us',
    'FAQs',
    'Contact us',
    'Shipping',
    'Journal',
    'Order Tracking',
    'Privacy Policy',
  ];

  const formSchema = Yup.object().shape({
    email: Yup.string().email().required('Email is required'),
  });

  const methods = useForm({
    resolver: yupResolver(formSchema),
  });

  const { handleSubmit, reset } = methods;

  const onSubmit = async (data: any) => {
    console.log(data);
    reset();
    toast.success('success');
  };

  return (
    <div className="p-12">
      <div className="grid grid-cols-1 lg:grid-cols-3">
        <div className="space-y-7">
          <h2 className="font-bold text-2xl uppercase">Shopzilla</h2>
          <p className="text-xs  leading-1 xl:w-[25rem] md:w-[20rem] ">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum nisi itaque excepturi
            labore commodi fugit?
          </p>
          <address className="text-xs mb-12 lg:mb-0">
            <a href="/">shopzilla@shop.com.mm</a>
            <p>+95 969-969-969</p>
          </address>
        </div>
        <div className="grid grid-cols-2 text-sm mb-12 lg:mb-0">
          {footerLink.map((link) => (
            <a key={link} href="/" className=" mb-7">
              <span className="relative nav-link hover:after:w-full hover:after:left-0'>{">
                {link}
              </span>
            </a>
          ))}
        </div>
        <div className="space-y-8">
          <h2 className="font-thin text-2xl">Join our list</h2>
          <p className="text-sm mt-4 xl:w-[30rem] md:w-[23rem] ">
            Signup to be the first to hear about exclusive deals, special offers and upcoming
            collections
          </p>

          <FormProvider
            onSubmit={handleSubmit(onSubmit)}
            methods={methods}
            className="relative xl:w-[30rem] md:w-[23rem]  "
          >
            <TextField
              animated={false}
              placeholder="Your email address"
              name="email"
              type="text"
              className="text-sm"
            />

            <Button
              arialLabel="subscribe"
              label="Subscribe"
              type="submit"
              variant="text"
              widthFull={false}
              padding="p-2"
              className="text-sm absolute -top-2 right-0 "
            />
          </FormProvider>
        </div>
      </div>
      <hr className="divider w-full h-[2px] bg-slate-50 my-8"></hr>
      <div className="flex justify-center items-center flex-col lg:flex-row lg:justify-between text-xs">
        <p className="mb-4">
          Copyright<span>&copy;</span>Shopzilla. All right reserved.
        </p>
        <div>
          <a href="/">Privacy Policy</a>
          <a href="/" className="mx-6">
            Help
          </a>
          <a href="/">FAQs</a>
          <a href="/" className="ml-6">
            Contact us
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
