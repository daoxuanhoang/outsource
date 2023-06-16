/**
 * @format
 * @description the hook to show notification by toast message
 */

import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { show as showActions, hide as hideActions } from '../store/notify';
import { INofifyState } from '../types';

export const useNotify = () => {
    const dispatch = useDispatch();

    const show = useCallback(
        ({ type, message, options }: any) => {
            dispatch(showActions({ type, message, options }));
        },
        [dispatch],
    );

    const info = useCallback(
        (message: string, options?: Partial<INofifyState['options']>) =>
            show({ type: 'info', message, options }),
        [show],
    );

    const success = useCallback(
        (message: string, options?: Partial<INofifyState['options']>) =>
            show({ type: 'success', message, options }),
        [show],
    );

    const error = useCallback(
        (message: string, options?: Partial<INofifyState['options']>) =>
            show({ type: 'error', message, options }),
        [show],
    );

    const warning = useCallback(
        (message: string, options?: Partial<INofifyState['options']>) =>
            show({ type: 'warning', message, options }),
        [show],
    );
    const hide = useCallback(() => dispatch(hideActions()), []);
    return {
        show,
        info,
        warning,
        error,
        success,
        hide,
    };
};
