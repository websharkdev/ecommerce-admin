import AuthLayout from "@/components/layout/auth.layout";
import Meta from "@/utils/meta/Meta";
import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <Meta
      title="Sign In"
      description="Welcome to the Bortnytskyi Alexey portfolio. It's home page"
    >
      <AuthLayout>
        <SignIn />
      </AuthLayout>
    </Meta>
  );
}
