import { useCallback } from "react";
import { useDispatch } from "react-redux"

export function useHome() {
    const dispatch = useDispatch()

    // const onOpenModal = useCallback(() => {
    //     dispatch(
    //       on(
    //         { formData: GET_MENU_BY_MODULE, dataKey: "users" },
    //         (result) => {
    //           dispatch(getDataSuccess({ data: result }));
    //         }
    //       )
    //     );
    //   }, [dispatch]);

    return true
}