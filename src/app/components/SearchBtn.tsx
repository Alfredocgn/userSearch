
import React from 'react'
import { IoSearch } from 'react-icons/io5'

type Props = {
  value:string;
  onChange:React.ChangeEventHandler<HTMLInputElement>;
  onSubmit:React.FormEventHandler<HTMLFormElement>
}

export const SearchBtn = ({value,onSubmit,onChange}:Props) => {
  return (
    <form onSubmit={onSubmit} className='flex items-center gap-2 w-full shadow-md focus-within:ring-2 focus-within:ring-slate-800 focus-within:p-1 focus-within:rounded-lg '>
      <section className='flex items-center w-full h-full gap-2 p-1 rounded'>
        <IoSearch className='text-2xl text-blue-500'/>
        <input className='w-full h-[40px] rounded bg-inherit outline-none p-1 text-sm' type='text' placeholder='Search Github user...' value={value} onChange={onChange}/>
      </section>
      <button className='rounded-lg bg-blue-500 px-4 py-2 text-white hover:opacity-80 transition-all'>Search</button>
    </form>
  )
}
