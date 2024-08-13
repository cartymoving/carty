import React, { useEffect, useRef, useState } from 'react';
import ReactDOM from 'react-dom';
import DatePicker from './DatePicker';

interface ActionProps{
  isOpen: boolean;
  onClose: () => void;
}

const Overlay:React.FC<ActionProps> = ({ isOpen, onClose }) => {
  const [Property, setProperty] = useState('');
  const [Rooms, setRooms] = useState('');
  const [MovingFrom, setMovingFrom] = useState('');
  const [MovingTo, setMovingTo] = useState('');
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  const submitForm = async (formDate: string) => {
    const FormData = {
      notes: Property,
      moveSize: Rooms,
      originZip: MovingFrom,
      destinationZip: MovingTo,
      email,
      fullname: name,
      moveDate: formDate,
      phoneNumber,
    };
    try {
      const response = await fetch('https://api.smartmoving.com/api/leads/from-provider/v2?providerKey=a3bfdc1e-e3e6-4bb1-bcd3-b04c0129b142', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(FormData),
      });
  
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
  
      const data = await response.json();
      console.log('Success:', data);
    } catch (error) {
      console.error('Error:', error);
    }
  };


  const formRef = useRef(null);

  const handlePropery = (event: { target: { value: string; }; }) => {
    const { value } = event.target;
    
    if (value === 'Private House' || value === 'Office/Commercial' || value === 'Apartment') {
      (document.querySelector('input[type="text"][name="type of property"]') as HTMLInputElement).value = '';
    }
    
    setProperty(value);
  };

  const handleRoom = (event: { target: { value: string; }; }) => {
    const { value } = event.target;
  
    if (
      value === 'Studio' || 
      value === '1 Bedroom' || 
      value === '2 Bedroom' || 
      value === '3 Bedroom' || 
      value === '4+ Bedroom'
    ) {
      (document.querySelector('input[type="text"][name="number of rooms"]') as HTMLInputElement).value = '';
    }
  
    setRooms(value);
  };

  const handleMovingTo = (event: { target: { value: string; }; }) => {
    const { value } = event.target;
    setMovingTo(value);
  };

  const handleMovingFrom = (event: { target: { value: string; }; }) => {
    const { value } = event.target;
    setMovingFrom(value);
  };

  const handleEmail = (event: { target: { value: string; }; }) => {
    const { value } = event.target;
    setEmail(value);
  };

  const handleName = (event: { target: { value: string; }; }) => {
    const { value } = event.target;
    setName(value);
  };

  const handlePhoneNumber = (event: { target: { value: string; }; }) => {
    const { value } = event.target;
    setPhoneNumber(value);
  };

  function validateEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  function validatePhoneNumber(phone: string): boolean {
    const phoneRegex = /^(?:\+1\s?)?(\d{3}|\(\d{3}\))[-.\s]?\d{3}[-.\s]?\d{4}$/;
    return phoneRegex.test(phone);
  }

  const IncreasePage = (e: { preventDefault: () => void; }) => {
    if (Property == ""){
      alert("You must choose an option");
      return;
    }

    if (Rooms == '' && currentPage > 1){
      alert("You must choose an option");
      return;
    }
    
    if (currentPage > 2 && currentPage < 4) {
      e.preventDefault();
      const formData = new FormData(formRef.current!);
      const formObject = Object.fromEntries(formData.entries());
      const formDate = formObject.date;
      submitForm(formDate.toString());
      if (MovingFrom == '' || MovingTo == '' || email == '' || name == '' || formDate == '' || phoneNumber == ''){
        alert("You must fill all fields");
        return;
      }
      if(!validateEmail(email)){
        alert("You should use valid mail");
        return;
      }

      if(!validatePhoneNumber(phoneNumber)){
        alert("You should use valid phone number");
        return;
      }
    }

    setCurrentPage(currentPage + 1);
    if(currentPage > 3){
      goBack();
    }
  };

  const DecreasePage = () => {
    setCurrentPage(currentPage - 1);
  };

  const goBack = () => {
    onClose();
    setCurrentPage(1);
  }

  if (!isOpen) return null;

  return ReactDOM.createPortal(
        <div className='fixed overlay z-[100] flex items-center justify-center -top-8 left-0 w-[100dvw] right-0 h-[calc(100dvh+32px)] bg-[rgba(10, 37, 19, 0.70)]'>
          <div className={`bg-mywhite w-[320px] md:w-[800px] 2xl:h-[629px] rounded-lg py-12 md:py-4 2xl:py-16 md:px-32 justify-between flex flex-col relative overflow-hidden`}>
            <div className='absolute top-4 md:top-6 right-4 md:right-6 cursor-pointer' onClick={goBack}>
              <div className='w-6 h-1 bg-myblack rounded-2xl translate-y-1 rotate-45'></div>
              <div className='w-6 h-1 bg-myblack rounded-2xl -rotate-45'></div>
            </div>
            <div className={`flex justify-between items-center w-[264px] md:mb-12 mx-auto ${currentPage > 3 ? "md:-translate-x-[1000px]" : ""} transition-all`}>
              <div className={`transition-all size-6 rounded-full flex font-bold justify-center items-center text-sm border-[2px] border-mygreen font-Montserrat ${currentPage == 1 ? "bg-mygreen text-mywhite" : "text-mygreen"}`}>
              {currentPage > 1 ? (<svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 4.5L3.71186 8L9 1" stroke="#4C9A2A" strokeWidth="2"/>
              </svg>) : <p>1</p>}
              </div>
              <div className='bg-mygreen h-[2px] w-24'></div>
              <div className={`transition-all size-6 rounded-full text-mygreen flex font-bold justify-center items-center text-sm border-[2px] border-mygreen ${currentPage == 2 ? "bg-mygreen text-mywhite" : "text-mygreen"} font-Montserrat`}>
              {currentPage > 2 ? (<svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 4.5L3.71186 8L9 1" stroke="#4C9A2A" strokeWidth="2"/>
              </svg>) : <p>2</p>}
              </div>
              <div className='bg-mygreen h-[2px] w-24'></div>
              <div className={`transition-all size-6 rounded-full text-mygreen flex font-bold justify-center items-center text-sm border-[2px] border-mygreen font-Montserrat ${currentPage == 3 ? "bg-mygreen text-mywhite" : "text-mygreen"}`}>
              {currentPage > 3 ? (<svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 4.5L3.71186 8L9 1" stroke="#4C9A2A" strokeWidth="2"/>
              </svg>) : <p>3</p>}
              </div>
            </div>
            <form ref={formRef} className='flex parent absolute h-fit mt-[50px] md:mt-[72px]'>
                <div className={`first inline-block relative w-[304px] md:w-[528px] transition-all mr-[500px] ${currentPage == 1 ? "translate-x-2 md:translate-x-2" : "-translate-x-[1000px]"}`}>
                  <h1 className='font-Montserrat font-bold text-lg md:text-2xl text-center'>Step 1: Moving Property</h1>
                  <p className='font-Hind font-medium md:text-xl text-center md:mt-4 mt-2 mb-[2.6vh] md:mb-20'>Select the type of property you are moving.</p>
                  <div className='grid md:grid-cols-2 grid-rows-2 gap-4 w-[256px] md:w-auto md:translate-x-0 translate-x-6'>
                    <label className={`flex px-6 py-3 items-center container border-[1px] rounded-[4px] border-mygreen cursor-pointer ${Property === 'Private House' ? 'bg-mygreen text-mywhite' : ''}`}>
                      <input 
                        type="radio" 
                        value="Private House"
                        className="hidden" 
                        name="type of property"
                        onChange={handlePropery} />
                      <span className="md:text-xl">Private House</span>
                    </label>
                    <label className={`flex px-6 py-3 items-center container border-[1px] rounded-[4px] border-mygreen cursor-pointer ${Property === 'Office/Commercial' ? 'bg-mygreen text-mywhite' : ''}`}>
                      <input 
                      type="radio" 
                      value="Office/Commercial" 
                      className="hidden" 
                      name="type of property" 
                      onChange={handlePropery} />
                      <span className="md:text-xl">Office/Commercial</span>
                    </label>
                    <label className={`flex px-6 py-3 items-center container border-[1px] rounded-[4px] border-mygreen cursor-pointer ${Property === 'Apartment' ? 'bg-mygreen text-mywhite' : ''}`}>
                      <input 
                      type="radio" 
                      value="Apartment" 
                      className="hidden" 
                      name="type of property" 
                      onChange={handlePropery} />
                      <span className="md:text-xl">Apartment</span>
                    </label>
                    <input
                      type="text"
                      placeholder='Other'
                      className='md:text-xl px-6 py-3 container border-[1px] rounded-[4px] border-mygreen'
                      name="type of property"
                      onChange={handlePropery}
                    />
                  </div>
                </div>
              <div className={`second inline-block w-[528px] transition-all mr-[500px] relative ${currentPage == 2 ? "-translate-x-[910px] md:-translate-x-[1008px]" : ""} ${currentPage > 2 ? "-translate-x-[2000px]" : ""}`}>
                <h1 className='font-Montserrat font-bold text-lg md:text-2xl text-center'>Step 2: Number of Rooms</h1>
                <p className='font-Hind font-medium md:text-xl text-center md:mt-4 mt-2 mb-[1.6vh] md:mb-18'>How many rooms are being moved?</p>
                <div className='grid w-[256px] translate-x-[140px] md:translate-x-0 md:w-auto md:grid-cols-2 grid-rows-3 gap-2 md:gap-4'>
                  <label className={`flex px-6 py-1 md:py-3 items-center container border-[1px] rounded-[4px] border-mygreen cursor-pointer ${Rooms === 'Studio' ? 'bg-mygreen text-mywhite' : ''}`}>
                    <input 
                      type="radio" 
                      value="Studio" 
                      className="hidden" 
                      name="number of rooms" 
                      onChange={handleRoom} 
                      />
                    <span className="md:text-xl">Studio</span>
                  </label>
                  <label className={`flex px-6 py-1 items-center container border-[1px] rounded-[4px] border-mygreen cursor-pointer ${Rooms === '1 Bedroom' ? 'bg-mygreen text-mywhite' : ''}`}>
                    <input 
                    type="radio" 
                    value="1 Bedroom"
                    className="hidden" 
                    name="number of rooms" 
                    onChange={handleRoom} 
                     />
                    <span className="md:text-xl">1 Bedroom</span>
                  </label>
                  <label className={`flex px-6 py-1 md:py-3 items-center container border-[1px] rounded-[4px] border-mygreen cursor-pointer ${Rooms === '2 Bedroom' ? 'bg-mygreen text-mywhite' : ''}`}>
                    <input 
                    type="radio" 
                    value="2 Bedroom" 
                    className="hidden" 
                    name="number of rooms" 
                    onChange={handleRoom} 
                    />
                    <span className="md:text-xl">2 Bedroom</span>
                  </label>
                  <label className={`flex px-6 py-1 md:py-3 items-center container border-[1px] rounded-[4px] border-mygreen cursor-pointer ${Rooms === '3 Bedroom' ? 'bg-mygreen text-mywhite' : ''}`}>
                    <input 
                    type="radio" 
                    value="3 Bedroom" 
                    className="hidden" 
                    name="number of rooms" 
                    onChange={handleRoom}  
                    />
                    <span className="md:text-xl">3 Bedroom</span>
                  </label>
                  <label className={`flex px-6 py-1 items-center container border-[1px] rounded-[4px] border-mygreen cursor-pointer ${Rooms === '4+ Bedroom' ? 'bg-mygreen text-mywhite' : ''}`}>
                    <input 
                    type="radio" 
                    value="4+ Bedroom" 
                    className="hidden" 
                    name="number of rooms" 
                    onChange={handleRoom}
                    />
                    <span className="md:text-xl">4+ Bedroom</span>
                  </label>
                  <input
                    type="text"
                    placeholder='Other'
                    name="number of rooms"
                    className='md:text-xl px-6 py-1 container border-[1px] rounded-[4px] border-mygreen'
                    onChange={handleRoom}
                  />
                </div>
              </div>
              <div className={`third inline-block w-[528px] transition-all relative ${currentPage == 3 ? "-translate-x-[1937px] md:-translate-x-[2047px]" : ""} ${currentPage > 3 ? "-translate-x-[3000px]" : ""}`}>
                <h1 className='font-Montserrat font-bold text-lg md:text-2xl text-center'>Step 3: Moving Details</h1>
                <p className='font-Hind font-medium md:text-xl text-center md:mt-4 mt-2 mb-[1.5vh] md:mb-[3.6vh] md:mb-18'>Let our team know more details.</p>
                <div className='grid w-[256px] md:grid-cols-2 translate-x-[136px] md:translate-x-0 md:w-auto grid-rows-3 gap-2 md:gap-4'>
                  <input type="number"  onInput={(e) => {const input = e.target as HTMLInputElement; input.value = input.value.slice(0, 5);}} onChange={handleMovingFrom} required inputMode="numeric" min={0} max={99999} maxLength={5} name="Moving Details" placeholder='Moving From Zip *' className='md:text-xl px-6 md:py-3 py-1 container border-[1px] rounded-[4px] border-mygreen'/>
                  <input type="number" onInput={(e) => {const input = e.target as HTMLInputElement; input.value = input.value.slice(0, 5);}} onChange={handleMovingTo} required min="1" max={99999} maxLength={5} name="Moving Details" placeholder='Moving To Zip *' className='md:text-xl px-6 md:py-3 py-1 container border-[1px] rounded-[4px] border-mygreen'/>
                  <DatePicker />
                  <input
                    type="text" 
                    placeholder='Email *'
                    name="email"
                    className='md:text-xl px-6 py-1 container border-[1px] rounded-[4px] border-mygreen'
                    required
                    onChange={handleEmail}
                  />
                  
                  <input
                    type="text"
                    placeholder='Name *'
                    name="name"
                    className='md:text-xl px-6 py-1 container border-[1px] rounded-[4px] border-mygreen'
                    required
                    onChange={handleName}
                  />

                  <input
                    type="text"
                    placeholder='Phone Number'
                    name="phone"
                    className='md:text-xl px-6 py-1 container border-[1px] rounded-[4px] border-mygreen'
                    required
                    onChange={handlePhoneNumber}
                  />
                </div>
              </div>
              <div className={`final inline-block w-[304px] md:w-[568px] transition-all relative ${currentPage == 4 ? "-translate-x-[2353px] md:-translate-x-[2600px]" : ""}`}>
              <svg width="168" height="168" viewBox="0 0 168 168" fill="none" xmlns="http://www.w3.org/2000/svg" className='size-28 md:size-auto mx-auto md:-translate-y-12'>
                <circle
                  cx="84"
                  cy="84"
                  r="78"
                  transform="rotate(-90 84 84)"
                  fill="#F6F9FC"
                  stroke="#4C9A2A"
                  strokeWidth="12"
                  className={`circle ${currentPage === 4 ? 'animate-circle' : ''}`}
                />
                <path
                  d="M57 84L75.6441 108L112 60"
                  stroke="#4C9A2A"
                  strokeWidth="13.7439"
                  className={`path ${currentPage === 4 ? 'animate-path' : ''}`}
                />
              </svg>
                <h1 className='font-Montserrat font-bold text-base md:text-2xl mt-5 text-center'>Thank You for Requesting a Quote!</h1>
                <p className='font-Hind font-medium md:text-xl text-center md:mt-4 mt-2 mb-[1vh] md:mb-4'>Your request has been successfully submitted. A member of our<br/>team will review your details and get in touch with you.</p>
                <p className='flex gap-2 items-center justify-center'><svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6.33301 10.3334H7.66634V6.33337H6.33301V10.3334ZM6.99968 5.00004C7.18856 5.00004 7.34701 4.93604 7.47501 4.80804C7.60301 4.68004 7.66679 4.52182 7.66634 4.33337C7.6659 4.14493 7.6019 3.98671 7.47434 3.85871C7.34679 3.73071 7.18856 3.66671 6.99968 3.66671C6.81079 3.66671 6.65256 3.73071 6.52501 3.85871C6.39745 3.98671 6.33345 4.14493 6.33301 4.33337C6.33256 4.52182 6.39656 4.68026 6.52501 4.80871C6.65345 4.93715 6.81168 5.00093 6.99968 5.00004ZM6.99968 13.6667C6.07745 13.6667 5.21079 13.4916 4.39968 13.1414C3.58856 12.7912 2.88301 12.3163 2.28301 11.7167C1.68301 11.1172 1.20812 10.4116 0.858342 9.60004C0.508564 8.78848 0.333453 7.92182 0.333009 7.00004C0.332564 6.07826 0.507675 5.2116 0.858342 4.40004C1.20901 3.58849 1.6839 2.88293 2.28301 2.28337C2.88212 1.68382 3.58768 1.20893 4.39968 0.858707C5.21168 0.508485 6.07834 0.333374 6.99968 0.333374C7.92101 0.333374 8.78767 0.508485 9.59968 0.858707C10.4117 1.20893 11.1172 1.68382 11.7163 2.28337C12.3155 2.88293 12.7906 3.58849 13.1417 4.40004C13.4928 5.2116 13.6677 6.07826 13.6663 7.00004C13.665 7.92182 13.4899 8.78848 13.141 9.60004C12.7921 10.4116 12.3172 11.1172 11.7163 11.7167C11.1155 12.3163 10.4099 12.7914 9.59968 13.142C8.78945 13.4927 7.92279 13.6676 6.99968 13.6667Z" fill="#0A2513"/>
                </svg>We do no share your information.</p>
              </div>
            </form>
            <div className={`flex justify-center items-center mt-[373px] gap-6`}>
              <button onClick={DecreasePage} className={`font-Montserrat font-bold text-mygreen underline ${currentPage > 1 && currentPage < 4 ? "" : "hidden"}`}>BACK</button>
              <button onClick={IncreasePage} className='quote flex bg-mygreen hover:bg-mywhite transition-all hover:text-mygreen border-2 border-mygreen gap-2 font-Montserrat font-bold text-mywhite justify-center items-center py-[18px] w-fit px-8 rounded-[4px]'>
              {currentPage == 3 ? (<span>SUBMIT</span>) : ("")}
              {currentPage > 0 && currentPage < 3 ? ("CONTINUE") : ("")}
              {currentPage >= 4 ? ("CLOSE") : ("")}
              {currentPage >= 4 ? ("") : (<svg width="9" height="12" viewBox="0 0 9 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 6L-4.89399e-07 11.1962L-3.51373e-08 0.803847L9 6Z" fill="#F6F9FC"/>
                </svg>)}
              </button>
            </div>
          </div> 
        </div> , document.body
      )
}

export default Overlay;
