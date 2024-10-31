import { SignUpForm } from "@/features/auth";
import { UiHeader } from "@/shared/ui/ui-header";
import { UiFormPageLayout } from "@/shared/ui/layout/ui-form-page-layout";

export function SignUpPage() {
  return (
    <UiFormPageLayout
      title="Sign Up"
      header={<UiHeader />}
      form={<SignUpForm />}
    />
  );
}
