"use client"

import CardPost from "@/components/CardPost"
import Image from "next/image"
import Link from "next/link"
import {gql, useQuery} from '@apollo/client'
import Loading from "@/components/Loading"
import Empty from "@/components/Empty"
import { format } from "date-fns"
import { ptBR } from "date-fns/locale/pt-BR"

export default function BlogHome(){
  const GET_ALL_POSTS = gql`
    query GetAllPosts {
      posts(orderBy: createdAt_DESC) {
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

  if(loading) {
    return(
      <Loading/>
    )
  }

  return(
    <div className="w-full max-w-[1120px] flex flex-col mx-auto pb-12 px-4">
      {data ?
        <>
          <Link href="/blog/post" className="w-full h-full flex flex-col sm:flex-row gap-4 lg:gap-8 items-center justify-center hover:brightness-75 transition-all duration-300">
          <div className="flex flex-1 w-full h-full min-h-[240px] md:min-h-[334px] relative rounded-2xl overflow-hidden">
            <Image
              src={data?.posts[0].coverImage.url}
              alt=""
              fill={true}
              className="object-cover"
            />
            </div>
              <div className="flex flex-1 h-full flex-col gap-3 lg:gap-6">
                <h1 className="font-bold text-3xl md:text-[40px] text-blue-600">{data?.posts[0].title}</h1>
                <p className="text-zinc-600 text-sm md:text-base text-justify lg:text-left">{data?.posts[0].subtitle}</p>
              <div>
                  <p className="font-bold text-zinc-900 text-sm md:text-base">{data?.posts[0].author.name}</p>
                  <p className="text-zinc-600 text-xs md:text-sm">{format(new Date(data?.posts[0].createdAt),"dd 'de' MMM 'de' yyyy",{locale: ptBR})}</p>
              </div>
            </div>
          </Link>

          <div className=" flex flex-col items-center sm:grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-8 mt-12 ">
          {data?.posts.map((post, index) => {
            if (index != 0){
              return(
                <CardPost
                  key={post.id}
                  title={post.title}
                  author={post.author.name}
                  subtitle={post.subtitle}
                  url={post.coverImage.url}
                  createdAt={post.createdAt}
                />
              )
            }
          })}

          </div>
        </>
        :
        <>
          <Empty/>
        </>
      }
    </div>
  )
}