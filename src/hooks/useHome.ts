import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux"
import { HomeSelectors, getData, importXMLActionsRequest, importXMLSuccess, onGetDataSuccess } from "store/home";
import { IDataStore, IDateRang, INofifyState } from "types";

export function useHome() {
    const dispatch = useDispatch()
    const isLoading = useSelector(HomeSelectors.getLoading);
    const data = useSelector(HomeSelectors.getData)

    const onImportXML = useCallback((payload: File[]) => {
        dispatch(importXMLActionsRequest({ formData: payload, dataKey: 'importXML' }));
    }, [dispatch]);

    const onGetData = useCallback((payload: IDateRang) => {
        dispatch(getData({ formData: payload, dataKey: 'getData' }, (result) => {
            dispatch(onGetDataSuccess(result))
        }))
    }, [dispatch])

    return { onImportXML, onGetData, isLoading, data }
}