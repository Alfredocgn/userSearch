
"use client"
import Image from 'next/image'
import { DarkAndLightBtn } from './components/DarkAndLightBtn'
import { SearchBtn } from './components/SearchBtn'
import Link from 'next/link'
import { IoLocationOutline } from 'react-icons/io5'
import { IoIosLink } from 'react-icons/io'
import { FaTwitter } from 'react-icons/fa'
import { BsFillBuildingFill } from 'react-icons/bs'
import {useQuery } from "@tanstack/react-query";
import dateFormat from "dateformat"
import { useState } from 'react'


type GitHubUser = {
  avatar_url: string;
  bio: string;
  blog: string;
  company: null | string;
  created_at: string;
  email: null | string;
  events_url: string;
  followers: number;
  followers_url: string;
  following: number;
  following_url: string;
  gists_url: string;
  gravatar_id: string;
  hireable: boolean;
  html_url: string;
  id: number;
  location: string;
  login: string;
  name: string;
  node_id: string;
  organizations_url: string;
  public_gists: number;
  public_repos: number;
  received_events_url: string;
  repos_url: string;
  site_admin: boolean;
  starred_url: string;
  subscriptions_url: string;
  twitter_username: null | string;
  type: string;
  updated_at: string;
  url: string;
  documentation_url: string;
  message: string;
};



export default function Home() {
  const [username,setUsername]= useState("octocat")
  const {isLoading,error,data,refetch} = useQuery<GitHubUser>({
    queryKey:["repoData"],
    queryFn:() =>
    fetch(`https://api.github.com/users/${username}`).then((res)=> res.json()),
  })

  if(isLoading) return (
    <div className="flex h-screen w-full items-center justify-center ">
    <p className="animate-bounce">Loading...</p>
  </div>
  );
  if(error) return ">An error has ocurred" + error.message

  const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    refetch(); 

  }

  return (

      <div className='flex min-h-screen w-full bg-stone-100 p-2 pt-10 transition-all sm:p-4 sm:pt-12 border' >
        <div className='mx-auto flex w-full max-w-[600px] flex-col gap-8 rounded p-2 bg-white'>
          <section className='flex justify-between gap-3 p-2 '>
            <p className='text-xl font-semibold '>AcgnDev</p>
            <DarkAndLightBtn/>
          </section>
          <section className='flex flex-col gap-6'>
            <SearchBtn
            value={username}
            onSubmit={handleSubmit}
            onChange={(e) =>setUsername(e.target.value) }/>
            <main className='flex w-full flex-col gap-5 rounded-lg bg-white px-4 py-8'>
              <section className='flex gap-4'>
                <Image src={data?.avatar_url ?? ""} alt='user image' width={200} height={200} className='h-20 w-20 rounded-full' />
                <div className='flex flex-col justify-between gap-1 transition-all sm:w-full sm:flex-row'>
                  <div >
                    <h1>{data?.name} </h1>
                    <Link target='_blank' href={`https://github.com/${data?.login}/`} className='text-blue-500 hover:underline text-sm transition-all'>@{data?.login}</Link>
                  </div>
                  <p className=''>
                  <span>Joined </span>
                  <span>{dateFormat(data?.created_at,"dd mmm yyyy")}</span>  
                  </p>
                </div>
              </section>
              <section className='flex flex-col gap-5'>
                <p>{data?.bio ?? (
                  <span className='opacity-60'>This profile has no bio</span>
                )}</p>
                <div className='flex justify-between gap-3 rounded-lg bg-stone-100 px-6 py-4 min-h-[50px]: '>
                    <div className='flex flex-col items-center gap-2.5'>
                      <p className='text-xs opacity-60'>Repos</p>
                      <p className='text-sm font-bold sm:text-base'>{data?.public_repos}</p>
                    </div>
                    <div className='flex flex-col items-center gap-2.5'>
                      <p className='text-xs opacity-60'>Followers</p>
                      <p className='text-sm font-bold sm:text-base'>{data?.followers}</p>
                    </div>
                    <div className='flex flex-col items-center gap-2.5'>
                      <p className='text-xs opacity-60'>Following</p>
                      <p className='text-sm font-bold sm:text-base'>{data?.following}</p>
                    </div>
                  
                </div>
                <div className='grid grid-cols-1 gap-4 sm:grid-cols-2'>
                  <div className='flex gap-2 items-center'>
                    <IoLocationOutline className='text-xl'  />
                    <p className='text-sm'>{data?.location ?? (
                      <span className="opacity-60">No location provided.</span>
                    )}</p>
                  </div>
                  <div className='flex gap-2 items-center'>
                    <IoIosLink className='text-xl'  />
                    {data?.blog ? (
                      <Link
                        title={data?.blog}
                        className="hover:underline opacity-60 max-w-[220px] overflow-hidden text-ellipsis "
                        href={data?.blog ?? "#"}
                      >
                        {data?.blog}{" "}
                      </Link>
                    ) : (
                      <span className="opacity-60">Not Available</span>
                    )}{" "}
                  </div>
                  <div className='flex gap-2 items-center'>
                    <FaTwitter className='text-xl'  />
                    <p className='text-sm'>{data?.twitter_username ?? (
                      <span className='opacity-60'>Not available on Twitter</span>
                    )}</p>
                  </div>
                  <div className='flex gap-2 items-center'>
                    <BsFillBuildingFill className='text-xl'  />
                    <p className='text-sm'>{data?.company ?? (
                      <span className='opacity-60'>Not Available</span>
                    )}</p>
                  </div>
                </div>
              </section>
            </main>
          </section>
        </div>
      </div>

  )
}
