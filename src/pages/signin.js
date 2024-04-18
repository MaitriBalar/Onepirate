import { Button, FormHelperText } from '@mui/material';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { Link } from "react-router-dom";
import Grid from '@mui/material/Grid';
import FormControl from '@mui/material/FormControl';
import CopyrightIcon from '@mui/icons-material/Copyright';


const Signin = () => {
    return (
        <div className="App">
      <div className='css1a'>
        <header className="App-header css1a">
          <div className='MuiBox-root css2'></div>
          <Typography className='css1' variant="h6" gutterBottom>ONEPIRATE</Typography>
          <Typography className="MuiBox-root css2">
            <div className='css2b'>
            <Link to="/"></Link>
            <Link to="/signin" className='css2b css2'>Signin</Link>
            <Link to="/signup" className='css2a'>Signup</Link>
            </div>
          </Typography>
        </header>
      </div>

            <div className="MuiBox-root">
                <Container maxWidth="sm">
                    <div className="MuiBox-root css13">
                        <Paper elevation={0} className='css14'>
                            <Typography variant="h3" component="h1" className='css56'>Sign In
                                <Typography className='css-1u3soasOnePirateTypography-markedH2Center' component={'span'}></Typography>
                            </Typography>
                            <Typography className='css15'>Not a member yet?
                                <Link to="/signup" className='css57'>Sign up here</Link>
                            </Typography>
                            <form className='MuiBox-root css58'>
                                <FormControl className='css59'>
                                    <label>Email *</label>
                                    <input type='text' name='email' className='css60'></input>
                                    <FormHelperText className='css61'>Required</FormHelperText>
                                </FormControl>
                                <FormControl className='css59'>
                                    <label className='css62'>Password *</label>
                                    <input type='password' name='password' className='css60'></input>
                                </FormControl>
                                <Button variant='contaied' className='css63'>Sign in</Button>
                            </form>
                            <Typography className='css64'>
                                <Link>Forgot password?</Link>
                            </Typography>
                        </Paper>
                    </div>
                </Container>
            </div>

            <footer className='css39'>
                <Container className='css40'>
                    <Grid container spacing={5} className='css41'>
                        <Grid item xs={6} sm={4} md={3} className='css42'>
                            <Grid container spacing xs={2} className='css41 css43'></Grid>
                            <Grid item className='css44'>
                                <a className='MuiBox-root css45'>
                                    <img src='images/22.png' className='css44'></img>
                                </a>
                                <a className='MuiBox-root css45'>
                                    <img src='images/23.png' className='css44'></img>
                                </a>
                            </Grid>
                            <Grid item className='css44'>
                                <CopyrightIcon className='css55' />
                                <Typography component={'a'} className='css46'> Your Website </Typography>
                                2024
                            </Grid>
                        </Grid>
                        <Grid item xs={6} sm={4} md={2} className='css42'>
                            <Typography variant='h6' component={'h2'} className='css47'>Legal</Typography>
                            <span className='css48'></span>
                            <ul className='MuiBox-root css49'>
                                <li className='css50'><u>Terms</u></li>
                                <li className='css50'><u>privacy</u></li>
                            </ul>
                        </Grid>
                        <Grid item xs={6} sm={8} md={4} className='css42'>
                            {/* <Typography variant='h6' component={'h2'} className='css47'>Language</Typography>
                            <span className='css51'></span>
                            <FormControl className='css52'></FormControl> */}
                        </Grid>
                    </Grid>
                    <Grid item className='css42 css54'>
                        <span className='css53'>Icons made by
                            <a><u> Freepik </u></a>from
                            <a><u> www.flaticon.com </u></a> is licensed by
                            <a><u> CC 3.0 BY </u></a>
                        </span>
                    </Grid>
                </Container>
            </footer>
        </div>

    )
}

export default Signin;