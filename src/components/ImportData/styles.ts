export default () => {
    return {
        container: {
            position: "absolute" as "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: '600px',
            bgcolor: "background.paper",
            boxShadow: 24,
            p: 2,
        },
        flexCenter: {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: "center",
        },
        mR: {marginRight: '8px'}
    }
}