//Components
import { SignInButtonWithProvider } from "./SignInButtonWithProvider";
import { SignInForm } from "./SignInForm";

export const AuthCard = () => {
  return (
    <div className="flex flex-col gap-10 bg-[#9ca0b0] w-[90%] lg:w-[30%] h-[30%] items-center rounded-md shadow-md justify-center">
      <p className="text-center text-black text-2xl font-medium">
        Sign in with Google
      </p>
      <div className="flex flex-col gap-2 w-[80%] lg:w-[60%]">
        <SignInButtonWithProvider provider="google" />
      </div>
    </div>
  );
};
