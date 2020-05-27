import { makeStyles } from '@material-ui/core'

export const useStyles = makeStyles(theme => ({
    palette: {
        type: 'dark'
    },
    //Header
    toolbar: {
        display: 'flex',
        justifyContent: 'space-around'
    },
    //Login
    main: {
        marginTop: theme.spacing(20),
        width: '450px',
        display: 'block',
        marginLeft: 'auto',
        marginRight: 'auto',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    avatar: {
        margin: theme.spacing(3)
    },

    paper: {
        padding: theme.spacing(2)
    },

    signin: {
        margin: theme.spacing(3)

    },
    submit: {
        marginTop: theme.spacing(3)
    },
    register: {
        marginTop: theme.spacing(3),
        cursor: 'pointer'
    }

}))