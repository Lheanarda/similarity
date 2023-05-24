"use client"
import {FC, useState} from 'react'
import Button from '@/components/atoms/Button'
import {  signOut } from 'next-auth/react'
import { toast } from './atoms/Toast'

interface SignOutButtonProps {

}

const SignOutButton:FC<SignOutButtonProps> = ({}) => {
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const signUserOut = async() => {
        setIsLoading(true)
        try{
            await signOut()
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
    return <Button onClick={signUserOut} isLoading={isLoading}>
        Sign Out
    </Button>
}
export default SignOutButton