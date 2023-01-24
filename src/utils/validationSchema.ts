import { z } from "zod";

// Zodによるバリデーションスキーマの定義
export const validationSchema = z.object({
  username: z
    .string()
    .nonempty("ユーザー名を入力して下さい") // 非空文字列チェック
    .min(5, "５文字以上で入力して下さい"), // 最小文字数チェック
  email: z
    .string()
    .nonempty("メールアドレスを入力して下さい") // 非空文字列チェック
    .email("メールアドレスを正しい表記で入力して下さい"), // Email形式チェック
  password: z
    .string()
    .nonempty("パスワードを入力して下さい") // 非空文字列チェック
    .min(6, "6文字以上で入力して下さい"), // 最小文字数チェック
});
