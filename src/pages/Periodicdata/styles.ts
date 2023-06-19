export default () => {
    return {
        container: {
            position: "absolute" as "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: '100%',
            bgcolor: "background.paper",
            boxShadow: 24,
            p: 2,
        },
        flexCenter: {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: "center",
        },
        bgColor: 'rgba(0, 0, 0, 0.5)',
        wTable: {
            width: '100%',
            maxHeight: 650
        }
    }
}