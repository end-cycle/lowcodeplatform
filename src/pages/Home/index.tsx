import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

const Home: React.FC = () => {
    return (
        <div className="underline">hello world</div>
    )
}

export default Home;