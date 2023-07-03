import AuthLayout from "@/components/layout/auth.layout";
import Meta from "@/utils/meta/Meta";
import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
    <Meta
      title="Sign up"
      description="Welcome to the Bortnytskyi Alexey portfolio. It's home page"
    >
      <AuthLayout>
        <SignUp />
      </AuthLayout>
    </Meta>
  );
}
