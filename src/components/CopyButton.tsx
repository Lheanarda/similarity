'use client'

import {ButtonHTMLAttributes, FC} from 'react'
import Button from './atoms/Button'
import { toast } from './atoms/Toast'
import { Copy } from 'lucide-react'

interface CopyButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    valueToCopy:string
}

const CopyButton:FC<CopyButtonProps> = ({className,valueToCopy, ...props}) => {
    return <Button {...props} 
    type='button' 
    onClick={()=>{
        navigator.clipboard.writeText(valueToCopy)
        toast({
            title:"Copied!",
            message:"API Key copied to clipboard",
            type:"success"
        })
    }}
    variant='ghost'
    className={className}
    >
        <Copy className='w-5 h-5' />
    </Button>
}
export default CopyButton