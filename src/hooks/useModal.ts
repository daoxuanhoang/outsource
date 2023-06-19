import { useCallback } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { ModalActions, ModalSelectors } from "../store/modal";

export const useModal = () => {
    const dispatch = useDispatch();
    const isOpen = useSelector(ModalSelectors.isOpen);
    const content = useSelector(ModalSelectors.content);

    const showModal = useCallback((payload: any) => {
        dispatch({ type: ModalActions.SHOW_MODAL, payload });
    }, [dispatch]);

    const hideModal = useCallback(() => {
        dispatch({ type: ModalActions.HIDE_MODAL });
    }, [dispatch]);

    return { isOpen, content, showModal, hideModal };
}