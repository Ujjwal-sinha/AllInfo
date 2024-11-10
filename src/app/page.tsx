import { Heading } from "./components/heading"
import { Maxwidthwrapper } from "./components/maxwidthwrapper"

const Page =()=>{
  return (
  <>
 <section className=" relative py-24 sm:py-32 bg-brand-25">
 <Maxwidthwrapper className="text-center">
    <div className="relative mx-auto text-center flex flex-col items-center gap-10">
      <div>
        <Heading>
        Real-Time SaaS Insights,
        </Heading>
      </div>
    </div>
  </Maxwidthwrapper>
 </section>
 <section></section>
 <section></section>
 <section></section>
  </>
  )
}
export default Page 