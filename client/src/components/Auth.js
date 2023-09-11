import { useState, useEffect } from 'react'
import { useCookies } from 'react-cookie'
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Input,
  Checkbox,
  Button,
  Alert,
} from "@material-tailwind/react";
import { FooterWithSocialLinks } from './Footer';

function IconWarning() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-6 w-6"
    >
      <path
        fillRule="evenodd"
        d="M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z"
        clipRule="evenodd"
      />
    </svg>
  );
}

const Auth = () => {
  const [cookies, setCookie, removeCookie] = useCookies(null)
  const [isLogIn, setIsLogin] = useState(true)
  const [email, setEmail] = useState(null)
  const [password, setPassword] = useState(null)
  const [confirmPassword, setConfirmPassword] = useState(null)
  const [error, setError] = useState(null)


  console.log(email, password, confirmPassword)
  
  const viewLogin = (status) => { 
    setError(null)
    setIsLogin(status)
   }

   useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key === 'Enter') {
        // Empêchez le comportement par défaut du formulaire
        e.preventDefault();
        
        // Cliquez sur le bouton Submit
        const submitButton = document.getElementById('submitButton');
        if (submitButton) {
          submitButton.click();
        }
      }
    };

    // Ajoutez un gestionnaire d'événements pour la touche "Entrée"
    document.addEventListener('keypress', handleKeyPress);

    // Nettoyez le gestionnaire d'événements lorsque le composant est démonté
    return () => {
      document.removeEventListener('keypress', handleKeyPress);
    };
  }, []);

  const handleSubmit = async (e, endpoint) => { 
    e.preventDefault()
    if (!isLogIn && password !== confirmPassword){ 
      setError("password don't match")
      return
    }

    const response = await fetch(`${process.env.REACT_APP_SERVERURL}/${endpoint}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({email, password})
    })
    
    const data = await response.json()
    console.log(data)
    
    if (data.detail){ 
      setError(data.detail)
    } else { 
      setCookie('Email', data.email)
      setCookie('AuthToken', data.token)

      window.location.reload()
    }
  }

    return (
      <div class="flex justify-center items-center h-screen">
      <Card className="w-96 center">
        <CardHeader
          variant="gradient"
          color="gray"
          className="mb-4 grid h-28 place-items-center"
        >
          <Typography variant="h3" color="white">
           { isLogIn ? 'Sign In' : 'Sign Up' }
          </Typography>
        </CardHeader>
        <CardBody className="flex flex-col gap-4">
          <Input 
            label="Email" 
            size="lg" 
            type='email' 
            onChange={(e)=> setEmail(e.target.value)}/>
          <Input 
            label="Password" 
            size="lg"
            type='password' 
            onChange={(e)=> setPassword(e.target.value)}/>
            { !isLogIn && <Input 
              label="Confirm Password" 
              type='password'
              onChange={(e)=> setConfirmPassword(e.target.value)}
              /> }        
          <div className="-ml-2.5">
          { !isLogIn && <Checkbox label="I agree the Terms and Conditions"/> }
          </div>
        </CardBody>
        <CardFooter className="pt-0">
        { error && 
          <Alert
          icon={<IconWarning />}
          className="rounded-yes bg-[red]/10 font-medium text-[red] mb-4"
          >
          {error}
          </Alert>
        }
          <Button variant="gradient" id="submitButton" fullWidth type='submit' onClick={(e) => handleSubmit (e, isLogIn ? 'login' : 'signup')}>
            Submit
          </Button>
          { isLogIn && <Typography variant="small" className="mt-6 flex justify-center">
            Don&apos;t have an account?
            <Typography
              as="a"
              href="#signup"
              variant="small"
              color="blue-gray"
              className="ml-1 font-bold"
              onClick={() => viewLogin(false)}
            >
              Sign Up
            </Typography>
          </Typography> }
          { !isLogIn && <Typography variant="small" className="mt-6 flex justify-center">
            You have an account?
            <Typography
              as="a"
              href="#signup"
              variant="small"
              color="blue-gray"
              className="ml-1 font-bold"
              onClick={() => viewLogin(true)}
            >
              Sign In
            </Typography>
          </Typography>}
        </CardFooter>
      </Card>
      <footer className="absolute bottom-0 w-full">
      <FooterWithSocialLinks/>
      </footer>
      </div> 
    )
  }
  
  export default Auth
  
