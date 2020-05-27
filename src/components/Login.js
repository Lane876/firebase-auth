import React from 'react'
import { Paper, FormControl, InputLabel, Input, Avatar, Typography, Button } from '@material-ui/core'
import { AccountCircle } from '@material-ui/icons'
import { useStyles } from '../styles'


const Login = () => {
    const classes = useStyles()
    const [login, setLogin] = React.useState(false)




    function handleLogin() {
        setLogin(prev => !prev)
    }

    return (
        <main className={classes.main}>
            <Avatar className={classes.avatar}>
                <AccountCircle />
            </Avatar>
            <Typography component='h1' variant='h5' className={classes.signin}>
                {login ? 'Register' : 'Sign in'}
            </Typography>
            <Paper className={classes.paper}>
                <form>
                    {login && (<FormControl margin="normal" required fullWidth>
                        <InputLabel htmlFor="name">Name</InputLabel>
                        <Input name="name" autoComplete="off" autoFocus />
                    </FormControl>)}

                    <FormControl margin="normal" required fullWidth>
                        <InputLabel htmlFor="email">Email Address</InputLabel>
                        <Input name="email" autoComplete="off" autoFocus />
                    </FormControl>
                    <FormControl margin="normal" required fullWidth>
                        <InputLabel htmlFor="password">Password</InputLabel>
                        <Input name="password" type="password" autoComplete="off" />
                    </FormControl>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}>
                        {login ? 'Register' : 'Sign in'}
                    </Button>
                    <Typography className={classes.register} align='center' onClick={handleLogin}>
                        {login ? 'Sign in' : 'Register'}
                    </Typography>
                </form>
            </Paper>
        </main>

    )
}

export default Login
