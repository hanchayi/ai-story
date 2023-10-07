'use client';

import { useState } from "react";

export function Categories() {
  const [ category, setCategory ] = useState('Recommended')
  const [ type, setType ] = useState('Default')

  const categories = [
    'Recommended',
    'Fan-fi',
    'Sci-fi',
    'RPG',
  ]

  const types = [
    'Default',
    'Recent',
    'Hot',
    'Nodes'
  ]

  return (
    <div className="px-8">
      <ul className='flex text-sm overflow-hidden justify-between'>
        {
          categories.map(c => <li style={
            c === category ? {
              color: '#D70B5F'
            } : {}
          } key={c}>{c}</li>)
        }
      </ul>
      <div style={{
        borderWidth: 0,
        borderTop: '1px solid #EDEDED',
        marginTop: '4px',
        marginBottom: '8px',
      }}></div>
      <ul className='flex text-sm overflow-hidden justify-between'>
        {
          types.map(c => <li
            className='relative'
            style={
              c === type ? {
                color: '#15097A',
                //borderBottom: '1px solid #15097A',
                //borderImage: 'linear-gradient(red,yellow) 30 30',
              } : {}
            }
            key={c}>
              {c}
              {
                c === type && <svg xmlns="http://www.w3.org/2000/svg" width="51" height="2" viewBox="0 0 51 2" fill="none"
                  style={{
                    width: '80%',
                    position: 'absolute',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    bottom: 0,
                  }}
                >
                  <path d="M0 1L51 1" stroke="url(#paint0_linear_0_6010)" stroke-width="1.5"/>
                  <defs>
                    <linearGradient id="paint0_linear_0_6010" x1="0" y1="1" x2="0.0783789" y2="2.99779" gradientUnits="userSpaceOnUse">
                      <stop stop-color="#15097A"/>
                      <stop offset="1" stop-color="#FF006A"/>
                    </linearGradient>
                  </defs>
                </svg>
              }
          </li>)
        }
      </ul>
    </div>
  )
}