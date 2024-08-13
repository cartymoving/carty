'use client'

import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { useEffect, useState } from 'react';
import 'dayjs/locale/en';

export default function DatePickerElement () {
  const [isMobile, setIsMobile] = useState<boolean | null>(null);

  useEffect(() => {
    if (window.innerWidth < 756) setIsMobile(true); else setIsMobile(false);

    const onResize = () => {
        setIsMobile(window.innerWidth < 756);
    }

    window.addEventListener("resize", onResize);

    return () => {
        window.removeEventListener("resize", onResize);
    }
}, []);

if (isMobile === null) return;

    return(
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker disablePast 
            name="date"
            format='MM/DD/YYYY'
            className='container rounded-[4px] flex items-center'
            slotProps={{ 
              textField: {
                required: true,
                InputProps: {
                  placeholder: "Date *",
                  style: {fontSize: isMobile ? 18 : 21, fontWeight: isMobile ? 'normal' : 'medium', fontFamily: 'Hind'}
                },
                sx: {
                  '& input': {    
                        paddingY: isMobile ? '0.25rem' : '.75rem',
                        paddingX: isMobile ? '1.8rem' : '1.5rem',
                        height: isMobile ? 'auto' : 'auto',
                        width: isMobile ? '100%' : '100%',
                        boxSizing: 'border-box'
                      },
                      '& fieldset': {
                        borderRadius: '4px',
                        borderColor: '#4C9A2A',
                        paddingY: '.5rem',
                      },
                      '& input::placeholder': {
                        fontWeight: 'medium'
                      }
                }
              },
              layout: {
                sx: {
                  '.MuiPickersCalendarHeader-labelContainer': {
                    fontSize: 16
                  },
                  '.MuiPickersDay-root': {
                    fontSize: 12
                  }
                }
              }
            }}
            />
        </LocalizationProvider>
    )
}