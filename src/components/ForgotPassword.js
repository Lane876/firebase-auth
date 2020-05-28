import React from 'react'
import { useStyles } from '../styles'
import { AccountCircle } from '@material-ui/icons'
import { Avatar, Typography, Paper, FormControl, InputLabel, Input, Button } from '@material-ui/core'
import FirebaseContext from '../firebase/context'

const ForgotPassword = () => {
    const [resetPasswordEmail, setResetPasswordEmail] = React.useState('')
    const classes = useStyles()
    const { firebase } = React.useContext(FirebaseContext)
    const [isPasswordReset, setIsPasswordReset] = React.useState(false)
    const [passwordResetError, setPasswordResetError] = React.useState(null)

    async function handleResetPassword() {
        try {
            await firebase.resetPassword(resetPasswordEmail)
            setIsPasswordReset(true)
            setPasswordResetError(null)
        } catch (error) {
            console.error(error)
            setPasswordResetError(error.message)
            setIsPasswordReset(false)
        }
    }

    return (
        <main className={classes.main}>
            <Avatar className={classes.avatar}>
                <AccountCircle />
            </Avatar>
            <Typography component="h1" variant="h5" className={classes.signin}>
                Password reset
            </Typography>
            <Paper className={classes.paper}>

                {isPasswordReset && (<Typography color='primary' style={{ display: 'flex', justifyContent: 'center' }}>Check your email to reset password</Typography>)}
                {passwordResetError && (<Typography color='secondary' style={{ display: 'flex', justifyContent: 'center' }}>{passwordResetError}</Typography>)}
                <FormControl margin="normal" required fullWidth>
                    <InputLabel htmlFor="email">Provide your Email Address</InputLabel>
                    <Input
                        name="email"
                        autoComplete="off"
                        autoFocus
                        onChange={event => setResetPasswordEmail(event.target.value)}
                        fullWidth />
                </FormControl>
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    className={classes.submit}
                    onClick={handleResetPassword}
                >
                    RESET
                    </Button>




            </Paper>
        </main>
    )
}

export default ForgotPassword
