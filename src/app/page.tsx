import Consortium from "@/components/Consortium";
import FAQ from "@/components/FAQ";
import Hero from "@/components/Hero";
import LastBlogs from "@/components/LastBlogs";


export default function Home() {
  return (
   <>
    <div className="min-h-dvh">
      <Hero/>
      <Consortium/>
      <LastBlogs/>
      <FAQ/>
    </div>
   </>
  );
}
