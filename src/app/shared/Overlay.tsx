'use client';

import { useEffect, useRef, useState } from 'react';
import ReactDOM from 'react-dom';

interface ActionProps {
  isOpen: boolean;
  onClose: () => void;
}

const Overlay: React.FC<ActionProps> = ({ isOpen, onClose }) => {
  const [isClient, setIsClient] = useState(false);
  const [scriptLoading, setScriptLoading] = useState(false);

  useEffect(() => {
    setIsClient(true);

    // if (document.querySelector('script[data-moveboard-company-id="158"]')) return;

    // setScriptLoading(true);
    // const script = document.createElement('script');
    // script.src = 'https://embed.elromco.com/integration.js';
    // script.setAttribute('data-moveboard-company-id', '158');
    // script.async = true;
    // document.body.appendChild(script);


    // return () => {
    //   document.body.removeChild(script);
    // };
  }, []);

  const goBack = () => {
    onClose();
  };

  if (!isClient) return;
  return ReactDOM.createPortal(
    <div className={`fixed overlay z-[100] flex items-center justify-center -top-8 left-0 w-[100dvw] right-0 h-[calc(100dvh+32px)] bg-[rgba(10, 37, 19, 0.70)] ${!isOpen ? 'hidden' : ''}`}>
      <div className={`bg-mywhite w-[320px] md:w-[800px] 2xl:h-[629px] rounded-lg py-12 md:py-4 2xl:py-16 md:px-32 relative`}>
        <div className='absolute top-4 md:top-6 right-4 md:right-6 cursor-pointer' onClick={goBack}>
          <div className='w-6 h-1 bg-myblack rounded-2xl translate-y-1 rotate-45'></div>
          <div className='w-6 h-1 bg-myblack rounded-2xl -rotate-45'></div>
        </div>
        <div id='mb-short-form'></div>
      </div>
    </div>,
    document.body
  );
};

export default Overlay;