"use client"

import CardPost from "@/components/CardPost"
import Image from "next/image"
import Link from "next/link"
import {gql, useQuery} from '@apollo/client'

export default function BlogHome(){
  const GET_ALL_POSTS = gql`
    query GetAllPosts {
      posts {
        subtitle
        slug
        id
        title
        coverImage {
          url
        }
        author {
          name
        }
        createdAt
      }
    }
  `

  interface AllPosts {
    posts: {
      id: string
      slug: string
      subtitle: string
      title: string
      createdAt: string
      coverImage: {
        url: string
      }
      author: {
        name: string
      }
    }[]
  }

  const { loading, data, error} = useQuery<AllPosts>(GET_ALL_POSTS)

  console.log(data?.posts)

  return(
    <div className="w-full max-w-[1120px] flex flex-col mx-auto pb-12 px-4">
      <Link href="/blog/post" className="w-full h-full flex flex-col sm:flex-row gap-4 lg:gap-8 items-center justify-center hover:brightness-75 transition-all duration-300">
        <div className="flex flex-1 w-full h-full min-h-[240px] md:min-h-[334px] relative rounded-2xl overflow-hidden">
          <Image
            src="/post1.jpg"
            alt=""
            fill={true}
            className="object-cover"
          />
        </div>
        <div className="flex flex-1 h-full flex-col gap-3 lg:gap-6">
          <h1 className="font-bold text-3xl md:text-[40px] text-blue-600">Como desenvolver um blog</h1>
          <p className="text-zinc-600 text-sm md:text-base text-justify lg:text-left">Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci fugiat commodi id dolorum at corporis voluptatibus fuga sunt eaque hic error odit molestiae, atque reprehenderit facilis asperiores accusantium nihil quis?</p>
          <div>
            <p className="font-bold text-zinc-900 text-sm md:text-base">Elias Rodrigues</p>
            <p className="text-zinc-600 text-xs md:text-sm">20 de Março de 2025</p>
          </div>
        </div>
      </Link>

      <div className=" flex flex-col items-center sm:grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-8 mt-12 ">
        <CardPost/>
        <CardPost/>
        <CardPost/>
        <CardPost/>
        <CardPost/>
        <CardPost/>
        <CardPost/>
      </div>
    </div>
  )
}