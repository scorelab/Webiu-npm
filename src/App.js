import React from 'react'
import {ButtonComponent} from 'components/ButtonComponent'
import {ContactComponent} from 'components/ContactComponent'
import { AboutComponent } from 'components/AboutComponent'
import { AnnouncementComponent } from 'components/AnnouncementComponent'
import { CardComponent } from 'components/CardComponent'
import { ComingsoonComponent } from 'components/ComingsoonComponent'
import { CarouselComponent } from 'components/CarouselComponent'
import { DescriptionComponent } from 'components/DescriptionComponent'
import { FaqComponent } from 'components/FaqComponent'
import { FooterComponent } from 'components/FooterComponent'
import { HeaderComponent } from 'components/HeaderComponent'
import { LetterAvatar } from 'components/LetterAvatar'
import { ImageAvatar } from 'components/ImageAvatar'
import { Partner } from 'components/Partner'
import { SignupAndLogin } from 'components/SignupAndLogin'
import { Pricing } from 'components/Pricing'
import { PageNotFound } from 'components/PageNotFound'
import { Statistics } from 'components/Statistics'

export const App = () => {
    return (
      <div>
        <ButtonComponent buttonText="Button" heading="Button Component" buttonWidth="350px" />

        <ContactComponent contactTitle="Contact us" subscribeTitle="Subscribe to News" contactMessage="Contact us" subscribeMessage="Subscribe to Newsletter" />

        <AboutComponent header="About Component" mainText="Welcome to SCoRe Lab" subText="This is a description text" buttonText="Explore" buttonLink="/" image="https://scorelab.org/images/community.png" />

        <AnnouncementComponent header="Announcements" speed="2" title="Announcements" direction="up" data={[{text: "Notice 1", link: "/"}, {text: "Notice 2", link: "/"}]} />

        <CardComponent header="Services Component" card={false} services={true} buttonText="All Services" buttonLink="/"
                       data={[{image: "https://uxwing.com/wp-content/themes/uxwing/download/07-web-app-development/software-engineer.svg", title: "DEVELOPMENT", description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution"},
                              {image: "https://uxwing.com/wp-content/themes/uxwing/download/07-web-app-development/website-structure.svg", title: "WEBSITE", description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution"},
                              {image: "https://uxwing.com/wp-content/themes/uxwing/download/07-web-app-development/data-scientist.svg", title: "ANALYTICS", description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution"}]} />

        <CardComponent header="Card Component" card={true} services={false}
                       data={[{image: "https://scorelab.org/logos/projects/dronesym.png", title: "Dronesym", description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution", buttonText: "All Services", buttonLink: "/"},
                              {image: "https://scorelab.org/logos/projects/parks.png", title: "Parks", description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution", buttonText: "All Services", buttonLink: "/"},
                              {image: "https://scorelab.org/logos/projects/bassa.png", title: "Bassa", description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution", buttonText: "All Services", buttonLink: "/"}]} />  
        
        <ComingsoonComponent header="Countdown" image="https://scorelab.org/images/joinTeam.png" buttonLink="/" countdownText="Coming soon!" 
                    deployDate="1 Jan, 2022 00:00:00" buttonText="Explore" message="The new version of this package is coming soon!" />

        <CarouselComponent data={[{title: "LabelLab", content: "Lorem ipsum sample data",image: "https://scorelab.org/logos/projects/labellab.png"},
                                  {title: "Dronesym", content: "Lorem ipsum sample data", image: "https://scorelab.org/logos/projects/dronesym.png"},
                                  {title: "Senz", content: "Lorem ipsum sample data", image: "https://scorelab.org/logos/projects/senz.png"}]}
                                  header="Carousel" />

        <DescriptionComponent title="Description Container" subTitle="This component can be used to declare description regarding of a particular instance"
                              image="https://scorelab.org/images/community.png"
                              mainText="Your main text here"
                              sideComponent={{content: "content of side component"}}/>

        <FaqComponent header="Frequently Asked Questions"
                      data={[{title: "Lorem ispum is a sample text which can be used to simply populate the data to check interface", content: "Lorem ispum is a sample text which can be used to simply populate the data to check interface"},
                             {title: "Lorem ispum is a sample text which can be used to simply populate the data to check interface", content: "Lorem ispum is a sample text which can be used to simply populate the data to check interface"},
                             {title: "Lorem ispum is a sample text which can be used to simply populate the data to check interface", content: "Lorem ispum is a sample text which can be used to simply populate the data to check interface"},
                             {title: "Lorem ispum is a sample text which can be used to simply populate the data to check interface", content: "Lorem ispum is a sample text which can be used to simply populate the data to check interface"},
                             {title: "Lorem ispum is a sample text which can be used to simply populate the data to check interface", content: "Lorem ispum is a sample text which can be used to simply populate the data to check interface"},]} />
        
        <FooterComponent socialLinks={{facebook: "/", gitter: "/", twitter: "/", github: "/", 
                            linkedin:"/", medium:"/"}} mainText="Copyright © SCoRe Lab" />

        <HeaderComponent mainText="WELCOME TO SCoRe LAB" subText="The SCoRe Lab has conducted research covering various aspects of sensor networks, embeded systems, digital forensic, information security, mobile applications, cloud, blockchain and software tools." buttonText="Explore" buttonLink="/"
                         image="https://scorelab.org/images/community.png" small={false} />

        <LetterAvatar name="Yash Vardhan" bgColor="green" />

        <Partner header="Partner-With-Us" mainText="Collaborate with us" contactText="contact us" contactLink="/" buttonText="Form" buttonLink="/"
                 image="https://scorelab.org/images/joinTeam.png" subText="The SCoRe Lab has conducted research covering various aspects of sensor networks, embeded systems, digital forensic, information security, mobile applications, cloud, blockchain and software tools." />

        <SignupAndLogin signupMessage="Signup" loginMessage="Login" handleSignup={() => {}} handleLogin={() => {}} />

        <Pricing title="Subscription Charges" header="Pricing" description="sample-description"
                 plans={[{plan: "BASIC", description: "sample", price: 30, items: ["Lorem Ipsum Text Example Sample", "Lorem Ipsum Text Example Sample", "Lorem Ipsum Text Example Sample"], buttonText: "Explore", buttonLink: "/"},
                         {plan: "ADVANCE", description: "sample", price: 40, items: ["Lorem Ipsum Text Example Sample", "Lorem Ipsum Text Example Sample", "Lorem Ipsum Text Example Sample"], buttonText: "Explore", buttonLink: "/"},
                         {plan: "PRO", description: "sample", price: 50, items: ["Lorem Ipsum Text Example Sample", "Lorem Ipsum Text Example Sample", "Lorem Ipsum Text Example Sample"], buttonText: "Explore", buttonLink: "/"}]} />
      
        <ImageAvatar image="https://yashvardhanportfolio.netlify.app/static/media/yash%20(2).ca34b90c.jpg" />

        <PageNotFound header="404 Component" image="https://scorelab.org/images/404.png" mainText="PAGE NOT FOUND" subText="The requested page does not exists" />

        <Statistics header="Statistics" title="Numbers At a Glance" description="The SCoRe Lab has conducted research covering various aspects of sensor networks, embeded systems, digital forensic, information security, mobile applications, cloud, blockchain and software tools."
                    image="https://scorelab.org/images/community.png" data={[{name: "Users", stat: "10K"}, {name: "Users", stat: "10K"}, {name: "Users", stat: "10K"}, {name: "Users", stat: "10K"}, {name: "Users", stat: "10K"}, {name: "Users", stat: "10K"}]} />

      </div>
    )
}
