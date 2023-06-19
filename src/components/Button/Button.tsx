import { Button as ButtonMui } from '@mui/material';
import { forwardRef, memo, useMemo } from 'react';
import { IButton, ISXTheme } from 'types/component';
import createStyles from './styles'
import { getDataType } from 'utils';


const Button = forwardRef<HTMLButtonElement, IButton> (function Button({children, variantStyle = 'default',variant = 'outlined',sx, ...props}, ref) {
    const styles = createStyles()

    const btnStyle = useMemo(
        () => styles[variant][variantStyle] as ISXTheme,
        [variant, variantStyle],
      );

    const stylesOveride = useMemo(
        () =>
          getDataType(sx) === 'Array'
            ? [styles.base, btnStyle, ...(sx as any[])]
            : [styles.base, btnStyle, { ...sx }],
        [sx, btnStyle],
      ) as ISXTheme;

    return <ButtonMui ref={ref} sx={stylesOveride} {...props}>{children}</ButtonMui>
}) 

export default memo(Button)