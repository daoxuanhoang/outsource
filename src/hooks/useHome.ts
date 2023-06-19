import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux"
import { HomeSelectors, importXMLActionsRequest, importXMLSuccess } from "store/home";
import { IDataStore, INofifyState } from "types";

export function useHome() {
    const dispatch = useDispatch()
    const isLoading = useSelector(HomeSelectors.getLoading);

    const onImportXML = useCallback((payload: any) => {
        dispatch(importXMLActionsRequest({ formData: payload, dataKey: 'importXML' }));
    }, [dispatch]);

    return { onImportXML, isLoading }
}