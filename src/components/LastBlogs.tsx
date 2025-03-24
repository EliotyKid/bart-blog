import { client } from "@/lib/apollo";
import { gql } from "@apollo/client";
import CardPost from "./CardPost";

const GET_LAST_POSTS = gql `
  query GetLastPosts {
    posts(orderBy: createdAt_DESC, first: 3){
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

interface LastPosts {
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

const LastBlogs = async () => {
  const {data} = await client.query<LastPosts>({ query: GET_LAST_POSTS})
  console.log(data)
  return ( 
    <div className="w-full max-w-[1120px] flex flex-col mx-auto pb-12 px-4 mt-8">
      <h1 className="title">Confira as ultimas publicações</h1>
      <div className="flex flex-col items-center sm:grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-8 mt-12">
        {data ? 
          <>
            {data.posts.map((post, index) => {
              return(
                <CardPost 
                  key={post.id}
                  title={post.title}
                  author={post.author.name}
                  subtitle={post.subtitle}
                  url={post.coverImage.url}
                  createdAt={post.createdAt}
                  slug={post.slug}
                />
              )
            })}
          </>
          :
          <></>
        }
      </div>
    </div>
   );
}
 
export default LastBlogs
