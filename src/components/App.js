import React, { Suspense } from 'react';
import './styles.scss';
const TextAnimation = React.lazy(() => import('./TextAnimation'));

function App(){
    return (
      <div className='wrapper'>
        <Suspense fallback={<div style={{fontSize: '50px', textAlign: 'center'}}>Loading...</div>}>
            <TextAnimation
                textColor='#A20524'
                overlayColor='#fdc52c'
                text='BUILD A BETTER FUTURE'
            />
        </Suspense>
      </div>
    );
}

export default App;
