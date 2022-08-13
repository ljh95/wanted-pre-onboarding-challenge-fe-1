import { emailRegex, pwRegex } from '@/func/regex';

export const isEmailValidate = (email: string): boolean => {
  return emailRegex.test(email);
};
export const isPwValidate = (pw: string): boolean => {
  return pwRegex.test(pw);
};
export const isPwCheckValidate = (pw: string, pwCheck: string): boolean => {
  return pw === pwCheck;
};
