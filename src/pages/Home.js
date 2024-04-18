import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import ButtonBase from '@mui/material/ButtonBase';
import { Input, Link } from '@mui/material';
import FormControl from '@mui/material/FormControl';
import FilledInput from '@mui/material/FilledInput';
import CopyrightIcon from '@mui/icons-material/Copyright';


const Home = () => {

  const images = [
    {
      url: 'images/7.webp',
      title: 'SNORKElING',
      width: '40%',
    },
    {
      url: 'images/8.webp',
      title: 'MASSAGE',
      width: '20%',
    },
    {
      url: 'images/9.webp',
      title: 'HIKING',
      width: '40%',
    },
    {
      url: 'images/10.webp',
      title: 'TOUR',
      width: '33.33%',
    },
    {
      url: 'images/11.webp',
      title: 'GASTRONOMY',
      width: '33.33%',
    },
    {
      url: 'images/12.webp',
      title: 'SHOPPING',
      width: '33.33%',
    },
    {
      url: 'images/13.webp',
      title: 'WALKING',
      width: '40%',
    },
    {
      url: 'images/14.webp',
      title: 'FITNESS',
      width: '20%',
    },
    {
      url: 'images/15.webp',
      title: 'READING',
      width: '40%',
    },
  ];

  const ImageButton = styled(ButtonBase)(({ theme }) => ({
    position: 'relative',
    height: 200,
    [theme.breakpoints.down('sm')]: {
      width: '100% !important', // Overrides inline-style
      height: 100,
    },
    '&:hover, &.Mui-focusVisible': {
      zIndex: 1,
      '& .MuiImageBackdrop-root': {
        opacity: 0.15,
      },
      '& .MuiImageMarked-root': {
        opacity: 0,
      },
      '& .MuiTypography-root': {
        border: '4px solid currentColor',
      },
    },
  }));

  const ImageSrc = styled('span')({
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: 'cover',
    backgroundPosition: 'center 40%',
  });

  const Image = styled('span')(({ theme }) => ({
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.palette.common.white,
  }));

  const ImageBackdrop = styled('span')(({ theme }) => ({
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: theme.palette.common.black,
    opacity: 0.4,
    transition: theme.transitions.create('opacity'),
  }));

  const ImageMarked = styled('span')(({ theme }) => ({
    height: 3,
    width: 18,
    backgroundColor: theme.palette.common.white,
    position: 'absolute',
    bottom: -2,
    left: 'calc(50% - 9px)',
    transition: theme.transitions.create('opacity'),
  }));
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

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

      <section className='css3'>
        {/* <Container > */}
        <img src='images/1.avif' className='css4' alt='increase priority'></img>
        <Typography variant="h1" component="h2" className='css5'>Upgrade your Sunday
          <Typography className='css-1u3soasOnePirateTypography-markedH2Center' component={'span'}></Typography>
        </Typography>
        <Typography variant='h5' component={'h3'} className='css6'>Enjoy secret offers up to -70% off the best luxury hotels every Sunday.</Typography>
        <Button variant="contained" className='css7'>Register</Button>
        <Typography component={'p'} className='css8'>Discover the experiance</Typography>
        <img src='images/3.png' className='css9'></img>
        {/* </Container> */}
      </section>

      <section className="MuiBox-root">
        <Container className='css9a'>
          <Grid container spacing={3} className='css9c'>
            <Grid item xs={12} sm={6} md={4} lg={4}>
              <img src='images/4.svg' className='css9b' />
              <Typography variant='h6' component={'h2'} className='css16'>The best luxury hotels</Typography>
              <Typography variant='h5' component={'h3'} className='css17'>From the latest trendy boutique hotel to the iconic palace with XXL pool, go for a mini-vacation just a few subway stops away from your home.</Typography>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={4}>
              <img src='images/5.svg' className='css9b' />
              <Typography variant='h6' component={'h2'} className='css16'>New experiences</Typography>
              <Typography variant='h5' component={'h3'} className='css17'>Privatize a pool, take a Japanese bath or wake up in 900m2 of garden… your Sundays will not be alike.</Typography>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={4}>
              <img src='images/6.svg' className='css9b' />
              <Typography variant='h6' component={'h2'} className='css16'>Exclusive rates</Typography>
              <Typography variant='h5' component={'h3'} className='css17'>By registering, you will access specially negotiated rates that you will not find anywhere else.</Typography>
            </Grid>
          </Grid>
        </Container>
      </section>

      <section>
        <Container>
          <Typography variant="h4" component={'h2'} className='css12'>For all testes and all desires
            <Typography className='css-1u3soasOnePirateTypography-markedH2Center' component={'span'}></Typography>
          </Typography>

          <Box sx={{ display: 'flex', flexWrap: 'wrap', minWidth: 300, width: '100%' }} className='css18'>
            {images.map((image) => (
              <ImageButton
                focusRipple
                key={image.title}
                style={{
                  width: image.width,
                }}
              >
                <ImageSrc style={{ backgroundImage: `url(${image.url})` }} />
                <ImageBackdrop className="MuiImageBackdrop-root" />
                <Image>
                  <Typography
                    component="span"
                    variant="subtitle1"
                    color="inherit"
                    sx={{
                      position: 'relative',
                      p: 4,
                      pt: 2,
                      pb: (theme) => `calc(${theme.spacing(1)} + 6px)`,
                    }}
                  >
                    {image.title}
                    <ImageMarked className="MuiImageMarked-root" />
                  </Typography>
                </Image>
              </ImageButton>
            ))}
          </Box>
        </Container>
      </section>

      <section className="MuiBox-root css19">
        <Container>

          <Typography variant="h4" component={'h2'} className='css12'>How It Works
            <Typography className='css-1u3soasOnePirateTypography-markedH2Center' component={'span'}></Typography>
          </Typography>
          <div className='css20'>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6} md={4} lg={4}>
                <div className="MuiBox-root css21">1.</div>
                <img src='images/16.svg' className='css22' />
                <Typography variant='h5' component={'h3'} className='css23'>Appointment every<br /> Wednesday 9am.</Typography>
              </Grid>
              <Grid item xs={12} sm={6} md={4} lg={4}>
                <div className="MuiBox-root css21">2.</div>
                <img src='images/17.svg' className='css22' />
                <Typography variant='h5' component={'h3'} className='css23'>First come, first served. Our <br />offers are in limited <br />quantities, so be quick.</Typography>
              </Grid>
              <Grid item xs={12} sm={6} md={4} lg={4}>
                <div className="MuiBox-root css21">3.</div>
                <img src='images/18.svg' className='css22' />
                <Typography variant='h5' component={'h3'} className='css23'>New offers every week. New experiences, new surprises.Your Sundays will no longer <br />be alike. </Typography>
              </Grid>
            </Grid>
          </div>
          <Button variant="contained" className='css24'>Get Started</Button>
        </Container>
      </section>
      <Container>
        <Grid container>
          <Grid item xs={12} md={6}>
            <Box className='css25'>
              <FormControl className='css26'>
                <Typography variant='h2' className='css27'>Receive offers</Typography>
                <Typography variant='h5' component={'h3'} className='css28'>Taste the holidays of the everyday close to home.</Typography>
                <FormControl className='css29'>
                  <FilledInput className='css30'>
                    <Input type='text' placeholder='Your email' className='css30'></Input>
                  </FilledInput>
                </FormControl>
                <Button variant="contained" className='css31' type='submit'>Keep me updated</Button>
              </FormControl>
            </Box>
          </Grid>
          <Grid item xs={12} md={6} className='css32'>
            <Box className='css33'></Box>
            <img src='images/19.avif' className='css34'></img>
          </Grid>
        </Grid>
      </Container>
      <Container className='css35'>
        <Button className='css36'>Got any quetions? need help?</Button>
        <h3 className='css37'>We are here to help. Get in touch!</h3>
        <img src='images/20.svg' className='css38'></img>
      </Container>
      
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
  );
}

export default Home;
