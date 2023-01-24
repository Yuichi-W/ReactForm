import { AiFillLock, AiFillMail } from "react-icons/ai";
import { FaUser } from "react-icons/fa";
import "./App.css";
import { useForm } from "react-hook-form";
import { validationSchema } from "./utils/validationSchema";
import { zodResolvers } from "@hookform/resolvers/zod";

interface LoginForm {
  username: string;
  email: string;
  password: string;
}

function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginForm>({
    mode: "onChange",
    resolver: zodResolvers(validationSchema),
  });
  return (
    <>
      <section>
        <h1>Login From</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="username">
            <FaUser color="#888888" />
            ユーザー名
          </label>
          {/* {...register("フィールド名", { ルール })}で、フィールド登録、必ルールを設定 */}
          <input
            id="username"
            type="text"
            placeholder="username"
            {...register("username")}
          />
          <p>{errors.username?.message as React.ReactNode}</p>

          <label htmlFor="email">
            <AiFillMail color="#888888" />
            メールアドレス
          </label>
          <input
            id="email"
            type="email"
            placeholder="email"
            {...register("email")}
          />
          <p>{errors.email?.message as React.ReactNode}</p>

          <label htmlFor="password">
            <AiFillLock color="#888888" />
            パスワード
          </label>
          <input
            id="password"
            type="password"
            placeholder="password"
            {...register("password")}
          />
          <p>{errors.password?.message as React.ReactNode}</p>

          <button type="submit">登録</button>
        </form>
      </section>
    </>
  );
}

export default App;
