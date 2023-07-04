import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux"
import { HomeSelectors, getData, importXMLActionsRequest, importXMLSuccess, onGetDataSuccess } from "store/home";
import { IDataStore, IDateRang, INofifyState } from "types";

export function useHome() {
    const dispatch = useDispatch()
    const isLoading = useSelector(HomeSelectors.getLoading);
    const data = useSelector(HomeSelectors.getData)

    const onImportXML = useCallback((payload: FormData) => {
        dispatch(importXMLActionsRequest({ formData: payload, dataKey: 'importXML' }, (result) => {
            dispatch(importXMLSuccess(result))
            onGetData({ page: 0, perPage: 10, search: "" });
        }));
    }, [dispatch]);

    const onGetData = useCallback((payload: any) => {
        dispatch(getData({ formData: payload, dataKey: 'getData' }, (result) => {
            dispatch(onGetDataSuccess(result))
        }))
    }, [dispatch])

    return { onImportXML, onGetData, isLoading, data }
}