import { useSessionQuery } from "@/entities/session";
import { HomePage } from "@/pages/home.page.tsx";
import { NotAuthPage } from "@/pages/not-auth.page.tsx";
import { UiSpinner } from "@/shared/ui/ui-spinner.tsx";

export function AppRouter(){
    const {isLoading, isSuccess} = useSessionQuery();

    if(isLoading){
        return <UiSpinner className="text-teal-600 w-20 h-20" />
    }

    if(isSuccess){
       return <HomePage />
    }

    return <NotAuthPage />
}