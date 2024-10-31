import { useMutation, useQueryClient } from "@tanstack/react-query";
import { authControllerSighOut } from "@/shared/api/generated";
import { useRouter } from "next/router";
import { ROUTES } from "@/shared/constants/routes";
import { useResetSession } from "@/entities/session";

export function useSignOut() {
  const router = useRouter();
  const resetSession = useResetSession();

  const signOutMutation = useMutation({
    mutationFn: authControllerSighOut,
    async onSuccess() {
      router.push(ROUTES.SIGN_IN);
      resetSession();
    },
  });

  return {
    isLoading: signOutMutation.isPending,
    signOut: signOutMutation.mutate,
  };
}
