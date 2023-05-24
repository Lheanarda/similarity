import DocumentationTabs from '@/components/DocumentationTabs'
import LargeHeading from '@/components/atoms/LargeHeading'
import Paragraph from '@/components/atoms/Paragraph'
import { Metadata } from 'next'
import {FC} from 'react'

import "simplebar-react/dist/simplebar.min.css"

export const metadata:Metadata = {
  title:'Similarity Api | Documentation',
  description:"Free & open-source text similarity API"
}

const page:FC = () => {
    return <div className='container max-w-7xl mx-auto mt-12'>
        <div className='flex flex-col items-center gap-6'>
            <LargeHeading>Making a request</LargeHeading>
            <Paragraph>api/v1/similarity</Paragraph>
            <DocumentationTabs />
        </div>
    </div>
}

export default page