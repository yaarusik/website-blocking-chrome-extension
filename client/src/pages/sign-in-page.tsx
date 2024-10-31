import { UiHeader } from "@/shared/ui/ui-header";
import { UiFormPageLayout } from "@/shared/ui/layout/ui-form-page-layout";
import { SignInForm } from "@/features/auth";

export function SignInPage() {
  return (
    <UiFormPageLayout
      title="Sign in"
      header={<UiHeader />}
      form={<SignInForm />}
    />
  );
}
