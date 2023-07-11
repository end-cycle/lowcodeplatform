import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

// components
import PageHeader from '@/pages/layout/PageHeader';
import Top from '@/pages/layout/Top';
import Left from '@/pages/layout/Left';
import Center from '@/pages/layout/Center';
import Right from '@/pages/layout/Right';

const Home: React.FC = () => {
    return (
        // <div className="underline">hello world</div>
        <div className='w-full h-full'>
            <PageHeader></PageHeader>
            <div className='flex flex-grow'>
                <Left />
                <div className='my-0 mx-auto w-full h-full flex flex-col'>
                    <Top />
                    <Center />
                </div>
                <Right />
            </div>
        </div>
    )
}

export default Home;