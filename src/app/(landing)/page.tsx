import { Heading } from "@/components/heading"
import { Maxwidthwrapper } from "@/components/maxwidthwrapper"
import { Check, Star } from "lucide-react"
import { Shinybutton } from "@/components/shiny-button"
import { MockDiscordUi } from "@/components/mock-discord-ui"
import { AnimatedList, AnimatedListItem } from "@/components/ui/animated-list"
import { DiscordMessage } from "@/components/discord-message"
const Page =()=>{
  return (
  <>
 <section className=" relative py-24 sm:py-32 bg-brand-25">
 <Maxwidthwrapper className="text-center">
    <div className="relative mx-auto text-center flex flex-col items-center gap-10">
      <div>
        <Heading>
       
        <span>Real-Time SaaS Insights,</span>
                <br />
                <span className="relative bg-gradient-to-r from-brand-700 to-brand-800 text-transparent bg-clip-text">
                  Delivered to Your Discord
                </span>
        </Heading>
      </div>
      <p className="text-base/7 text-gray-600 max-w-prose text-center text-pretty">
              AllInfo is the easiest way to monitor your SaaS Prodict . Get instant
              notifications for{" "}
              <span className="font-semibold text-gray-700">
                sales, new users, financial update or any other event
              </span>{" "}
              sent directly to your Discord.
            </p>

            <ul className="space-y-2 text-base/7 text-gray-600 text-left flex flex-col items-start">
              {[
"Real-time Discord alerts for critical events",
                "Buy once, use forever",
                "Track sales, new users, or any other event",
                "Easy Access"
                ,


              ].map((item,index)=>(
                <li key={index} className="flex gap-1.5 items-center text-left">
                   <Check className="size-5 shrink-0 text-brand-700" />
                  {item}
                </li>

              )
)}
            </ul>
            <div className="w-full max-w-80">
              <Shinybutton  href="/sign-up"  className="relative z-10 h-14 w-full text-base shadow-lg transition-shadow duration-300 hover:shadow-xl" >
Start Today
              </Shinybutton>
            </div>
    </div>
    
  </Maxwidthwrapper>
 </section>

 <section className="relative bg-brand-25 pb-4">
  <div className="absolute inset-x-0 bottom-24 top-24 bg-brand-700"/>
    <div className="relative mx-auto">
      <Maxwidthwrapper className="relative">
        <div className="-m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4">
        <MockDiscordUi>
    <AnimatedList>
     <DiscordMessage
     avatarSrc="/server.png"
     avatarAlt="AllInfo"
     username="AllInfo"
     timestamp="Today at 12:35PM"
     badgeText="SignUp"
     badgeColor="#43b581"
     title="👤 New user signed up"
     content={{
       name: "vishal kumar",
       email: "vishu19@gmail.com",
     }}
     
     />
     <DiscordMessage
                    avatarSrc="/server.png"
                    avatarAlt="AllInfo"
                    username="AllInfo"
                    timestamp="Today at 12:45PM"
                    badgeText="Revenue"
                    badgeColor="#faa61a"
                    title="💰 Payment received"
                    content={{
                      amount: "$49.00",
                      email: "ujju2001@email.com",
                      plan: "PRO",
                    }}
                  />
                  <DiscordMessage
                    avatarSrc="/server.png"
                    avatarAlt="AllInfo"
                    username="AllInfo"
                    timestamp="Today at 5:11AM"
                    badgeText="Milestone"
                    badgeColor="#5865f2"
                    title="🚀 Revenue Milestone Achieved"
                    content={{
                      recurringRevenue: "$5.000 USD",
                      growth: "+8.2%",
                    }}
                  />

     
    </AnimatedList>
</MockDiscordUi>
        </div>
      </Maxwidthwrapper>

    </div>
 

  </section> 
 <section className="relative py-24 sm:py-32 bg-brand-25">
  <Maxwidthwrapper className="flex flex-col items-center gap-16 sm:gap-20">
    <div>
    <h2 className="text-center text-base/7 font-semibold text-brand-600">
              Intuitive Monitoring
            </h2>
            <Heading>Stay ahead with real-time insights</Heading>

    </div>
    <div>
      <div>

      </div>
    </div>
  </Maxwidthwrapper>
 </section>
 <section></section>
  </>
  )
}
export default Page 