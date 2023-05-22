import {Typography, Stack, Button } from '@mui/material'
import GoogleIcon from '@mui/icons-material/Google'
import {signInWithGoogle} from './firebaseConfig'
import './styles/login.css'
import './styles/relative.css'

function Login(){
    let header = <Stack spacing={6}>
                <Stack className='headercontainer' spacing={3}>
                    <Typography className='headertext' align="center" variant="h4">Econet Classrooms</Typography>
                </Stack>
        </Stack>
    let body = <Stack spacing={6}>
                            <Stack spacing={3}>
                                <form className='form'>
                                        <Typography className='login' variant='h5' align='center' >Login</Typography>
                                        <Button variant='contained' startIcon={<GoogleIcon/>} onClick={signInWithGoogle}>Login With Google</Button>
                                </form>
                            </Stack>
                        </Stack>
        
                return(
                    <>
                    {header}
                    {body}
                    </>    
                        )
        
}

export default Login