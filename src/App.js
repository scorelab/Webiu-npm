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

export const App = () => {
    return (
      <div>
        <ButtonComponent buttonText="Button" heading="Button Component" buttonWidth="400px" />

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
      </div>
    )
}
