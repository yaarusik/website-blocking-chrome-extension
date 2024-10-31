import { useState } from "react";
import { useBlockListQuery } from "@/entities/block-list";
import { useDebouncedValue } from "@/shared/lib/react-std";

export function useBlockItems(){
    const [q, setQ] = useState('');

    const blockListQuery = useBlockListQuery({q: useDebouncedValue(q, 400)});

    return {
        items: blockListQuery.data?.items ?? [],
        isLoading: blockListQuery.isLoading,
        setQ,
        q
    }
}