import { SubmitHandler, useForm } from "react-hook-form";

type Inputs = {
  email: string;
  password: string;
}

const Forms = () => {
  const { register, handleSubmit, watch, formState } = useForm<Inputs>({
    defaultValues: {
      email: 'elliotgaramendi@gmail.com',
      password: '123456'
    }
  });

  const onSubmit: SubmitHandler<Inputs> = data => console.log(data);

  console.log(watch('email'));

  return (
    <section>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h2>Form</h2>
        <input type="text" placeholder="Email" {...register('email', { required: true })} required />
        <br />
        <input type="password" placeholder="password" {...register('password', { required: true })} required />
        <br />
        <input type="submit" value="Send" />
      </form>
      <pre>
        {JSON.stringify(formState, null, 2)}
      </pre>
    </section>
  );
}

export default Forms;