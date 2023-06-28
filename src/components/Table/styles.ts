

export default () => {
    return {
        wrapTableContent: {
            height: '100%',
            width: '100%',
            '.MuiDataGrid-columnHeaders': {
                borderTopLeftRadius: 8,
                borderTopRightRadius: 8,
                backgroundColor: '#E9E9E9',
            },
        },
        defaultStyles: {
            height: '100%',
            width: '100%',
            // border: 'none',
            '& .MuiDataGridVirtualScrollerContent': {
                height: 'unset',
            },
            '& .custom-checkbox': {
                minWidth: '42px !important',
                maxWidth: '42px !important',
            },
            '& .MuiDataGrid-columnHeader:focus': {
                outline: 'unset'
            },
            '& .MuiDataGrid-cell:focus': {
                outline: 'unset'
            }
        },
    }
}