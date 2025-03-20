import Link from "next/link";
import Image from "next/image";
import { gql } from "@apollo/client";
import { client } from "@/lib/apollo";
import { notFound } from "next/navigation";
import { RichText } from "@graphcms/rich-text-react-renderer";
import { ElementNode} from "@graphcms/rich-text-types"

const GET_POST = gql`
  query GetPost($slugPost: String!) {
    post(where: { slug: $slugPost }) {
      id
      title
      content {
        json
      }
      author {
        name
      }
      createdAt
      coverImage {
        url
      }
    }
  }
`;

interface PostDataProps {
  post: {
    id: string
    title: string
    coverImage: {
      url: string
    }
    author: {
      name: string
    }
    createdAt: string
    content: {
      json: ElementNode[]
    }

  }
}

interface PostProps {
  params: { slug: string };
}

// 🚀 Obtendo dados do post diretamente na página (substitui getStaticProps)
export default async function BlogPost({ params }: PostProps) {
  const { slug } = params;

  // 🔹 Buscando os dados do post no servidor
  const { data } = await client.query<PostDataProps>({
    query: GET_POST,
    variables: { slugPost: slug },
  });

  // 🚨 Se o post não existir, redireciona para 404
  if (!data.post) {
    notFound();
  }

  

  const { title, coverImage, author, createdAt, content } = data.post;

  return (
    <div className="w-full max-w-[1120px] flex flex-col mx-auto pb-12 px-4">
      <Link
        href="/blog"
        className="flex w-full max-w-fit font-bold text-zinc-900 cursor-pointer"
      >
        Voltar
      </Link>
      <div className="w-full h-full flex flex-col mt-8">
        <div className="flex w-full h-56 sm:h-80 lg:h-[392px] relative rounded-2xl overflow-hidden">
          <Image src={coverImage.url} alt={title} fill className="object-cover" />
        </div>
      </div>

      <div className="flex w-full flex-col mt-4 sm:mt-8">
        <h1 className="font-bold text-2xl sm:text-4xl lg:text-[40px] text-blue-600">
          {title}
        </h1>
        <div>
          <p className="font-bold text-zinc-900">{author.name}</p>
          <p className="text-zinc-600">{new Date(createdAt).toLocaleDateString("pt-BR")}</p>
        </div>
        <div className="mt-4 sm:mt-8">
          <RichText 
            renderers={{
              p: ({children}) => <p className="text-zinc-600 mt-1 text-sm sm:text-base text-justify lg:text-left">{children}</p>
            }}
            content={content.json}
          />
        </div>
        {/* <p className="text-zinc-600 mt-4 sm:mt-8 text-sm sm:text-base text-justify lg:text-left">
          
        </p> */}
      </div>
    </div>
  );
}

