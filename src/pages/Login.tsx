import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import type { AppDispatch } from "../app/store";
import { login } from "../features/user/userSlice";
import Input from "../components/ui/Input";
import Button from "../components/ui/Button";

const schema = z.object({
  name: z.string().min(3, "Name must be at least 3 characters"),
});

type FormData = z.infer<typeof schema>;

function Login() {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: FormData) => {
    dispatch(
      login({
        name: data.name,
        token: "fake-token-123",
      })
    );

    navigate("/");
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-900 p-6 text-white">
      <div className="w-full max-w-sm space-y-6 rounded-xl bg-gray-800 p-6 shadow-lg">
        <h1 className="text-center text-2xl font-bold">Login</h1>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <Input
            label="Username"
            placeholder="Enter your name"
            {...register("name")}
            error={errors.name?.message}
          />

          <Button type="submit">Login</Button>
        </form>
      </div>
    </div>
  );
}

export default Login;