import { Typography, Container, makeStyles } from '@material-ui/core';
import AuthForm from './AuthForm';
import { formTypes } from './types/formTypes';

const useStyles = makeStyles((theme) => ({
  leftPanel: {
    [theme.breakpoints.down('xl')]: {
      flex: 0.7,
    },
    [theme.breakpoints.down('lg')]: {
      flex: 0.65,
    },
    [theme.breakpoints.down('md')]: {
      flex: 0.6,
    },
    [theme.breakpoints.down('sm')]: {
      flex: 1,
    },
    [theme.breakpoints.down('xs')]: {
      flex: 0,
    },
  },
}));

function AuthPage({ type }: { type?: formTypes }) {
  const classes = useStyles();
  return (
    <Container
      maxWidth={false}
      disableGutters={true}
      style={{
        display: 'flex',
        minHeight: 'calc(100vh - 48px)',
      }}>
      <div
        className={classes.leftPanel}
        style={{
          backgroundImage:
            'url(https://images.unsplash.com/photo-1555448259-8da74c6c6b01?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2100&q=80)',
          backgroundSize: 'cover',
          alignSelf: 'stretch',
          clipPath: 'polygon(0 0, 100% 0%, 95% 100%, 0% 100%)',
        }}></div>
      <AuthForm type={type} />
    </Container>
  );
}

export default AuthPage;

// export default function Login() {
//   return (
//     <AnimatedPage>
//       <AuthForm />
//     </AnimatedPage>
//   );
// }
