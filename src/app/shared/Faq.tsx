'use client'
import React, { useState } from 'react';

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index: any) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "How far in advance should I book my move?",
      answer: "We recommend booking your move at least 4-6 weeks in advance to ensure availability, especially during peak moving seasons. However, we understand that sometimes moves need to happen quickly, and we’ll do our best to accommodate last-minute requests. Early booking allows us to better plan and allocate resources for your move."
    },
    {
      question: "What items cannot be moved by Carty Moving Company?",
      answer: "For safety and legal reasons, we cannot transport hazardous materials such as chemicals, gasoline, explosives, and firearms. Additionally, perishable food items, plants, and pets should be moved separately. If you're unsure about a specific item, please contact us for guidance."
    },
    {
      question: "Do you offer packing and unpacking services?",
      answer: "Yes, we offer comprehensive packing and unpacking services. Our team can handle everything from packing delicate items to disassembling and reassembling furniture. We use high-quality packing materials to ensure the safety of your belongings. You can customize these services to fit your specific needs and budget."
    },
    {
      question: "How are moving costs determined?",
      answer: "Moving costs are based on several factors, including the distance of the move, the volume of items being moved, the level of service required (e.g., packing, unpacking), and any additional services requested. We provide a detailed estimate after assessing your specific needs. To get a precise quote, we may conduct an in-home or virtual survey."
    },
    {
      question: "What should I do if my belongings are damaged during the move?",
      answer: "While we take every precaution to protect your belongings, accidents can happen. If any items are damaged during the move, please contact us immediately. We offer basic insurance coverage, and additional insurance options are available for valuable items. Our customer service team will guide you through the claims process to resolve the issue promptly."
    }
  ];

  return (
    <div className='w-full h-[436px] md:h-[473px] flex flex-col gap-2 md:gap-4 pb-[800px] lg:pb-[700px]'>
      {faqs.map((faq, index) => (
        <div key={index}>
          <button
            className={`accordion rounded-[6px] w-full outline-none transition-all bg-mygreen font-Montserrat font-bold px-3 py-3 md:px-8 md:py-4 text-left text-lg flex items-center justify-between ${openIndex === index ? 'droped' : ''}`}
            onClick={() => toggleAccordion(index)}
          >
            <span className='flex items-center gap-3 md:gap-4'>
              <span className='text-sm'>&#9654;</span>
              {faq.question}
            </span>
            <span className={`transition-all ${openIndex === index ? 'rotate-90' : ''}`}>
              <svg className='md:size-6 size-4' width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13.5763 8.4716C13.7013 8.34658 13.7715 8.17705 13.7715 8.00027C13.7715 7.82349 13.7013 7.65395 13.5763 7.52894L9.80496 3.7576C9.74346 3.69393 9.6699 3.64314 9.58856 3.6082C9.50723 3.57326 9.41975 3.55487 9.33123 3.5541C9.24271 3.55333 9.15492 3.5702 9.07299 3.60372C8.99106 3.63724 8.91663 3.68674 8.85403 3.74934C8.79144 3.81193 8.74193 3.88637 8.70841 3.9683C8.67489 4.05023 8.65802 4.13802 8.65879 4.22654C8.65956 4.31506 8.67795 4.40254 8.71289 4.48387C8.74783 4.56521 8.79862 4.63877 8.86229 4.70027L11.4956 7.3336L2.66696 7.3336C2.49015 7.3336 2.32058 7.40384 2.19555 7.52886C2.07053 7.65389 2.00029 7.82346 2.00029 8.00027C2.00029 8.17708 2.07053 8.34665 2.19555 8.47167C2.32058 8.5967 2.49015 8.66694 2.66696 8.66694L11.4956 8.66694L8.86229 11.3003C8.74085 11.426 8.67366 11.5944 8.67518 11.7692C8.6767 11.944 8.74681 12.1112 8.87041 12.2348C8.99402 12.3584 9.16123 12.4285 9.33603 12.4301C9.51082 12.4316 9.67923 12.3644 9.80496 12.2429L13.5763 8.4716Z" fill="#F6F9FC"/>
              </svg>
            </span>
          </button>
          <div
            className={`overflow-hidden transition-all duration-100 ${openIndex === index ? 'max-h-[1000px] md:px-16 py-4' : 'max-h-0'}`}
          >
            <p className='font-Hind font-medium text-sm md:text-lg'>{faq.answer}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Faq;
