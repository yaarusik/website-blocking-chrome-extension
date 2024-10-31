import { useAddBlockItemMutation } from "@/entities/block-list";
import { useForm } from "react-hook-form";
import { AddBlockItemDtoType } from "@/shared/api/generated";

export function useAddBlockItemForm() {
  const { handleSubmit, register, watch, reset } = useForm<{
    data: string;
    type: AddBlockItemDtoType;
  }>({
    defaultValues: {
      type: AddBlockItemDtoType.Website
    }
  });

  const addBlockItemMutation = useAddBlockItemMutation();

  const type = watch('type');

  return {
    handleSubmit: handleSubmit((data) => {
      addBlockItemMutation.mutate(data, {
        onSuccess(){
          reset()
        }
      });
    }),
    isLoading: addBlockItemMutation.isPending,
    register,
    type,
  };
}
