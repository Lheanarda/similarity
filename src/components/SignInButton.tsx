"use client"
import {FC, useState} from 'react'
import Button from '@/components/atoms/Button'
import { signIn } from 'next-auth/react'
import { toast } from './atoms/Toast'

interface SignInButtonProps {

}

const SignInButton:FC<SignInButtonProps> = ({}) => {
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const signInWithGoogle = async() => {
        setIsLoading(true)
        try{
            await signIn('google')
        }
        catch(err:any){
            toast({
                title:'Error signing in',
                message:"Please try again later",
                type:"error"
            })
        }
        finally{

        }
    }
    return <Button onClick={signInWithGoogle} isLoading={isLoading}>
        Sign In
    </Button>
}
export default SignInButton