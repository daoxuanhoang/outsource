import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux"
import { importXMLActionsRequest } from "store/home";
import { success } from "store/notify";
import { IDataStore, INofifyState } from "types";

export function useHome() {
    const dispatch = useDispatch()
    // const isLoading = useSelector(HomeSelectors.getLoading);

    const onImportXML = useCallback((payload: any) => {
        dispatch(
            importXMLActionsRequest(
                payload,
                (result: any) => {
                    console.log(result);

                    // dispatch(importXMLSuccess({ data: result }));
                    // dispatch(success({ message: "success" } as INofifyState));
                }
            )
        );
    }, [dispatch]);

    return { onImportXML }
}