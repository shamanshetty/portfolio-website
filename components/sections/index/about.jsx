// Core packages
import Image from 'next/image'

// Section structure
import Section from '../../structure/section';
import Container from '../../structure/container';

// Section general blocks
import SectionTitle from '../../blocks/section.title.block'
import SectionGridBg from '../../blocks/section.grid.block'

// Section specific blocks
import BadgesBlock from '../../blocks/about.badges.block'
import CopyBlock from '../../blocks/about.copy.block'

// Section scss
import about from '../../../styles/sections/index/about.module.scss';

/**
 * Section: About
 * An overview of yourself.
 * Highlight your top level attributes and disciplines.
 * 
 * @returns {jsx} <About />
 */
export default function About() {
    return (
        <Section classProp={about.section}>	
            <Container spacing={['verticalXXXLrg']}>
                <SectionTitle
                    title="About Me"
                    preTitle="Synopsis"
                    subTitle="Hello! I’m a sophomore pursuing a B.Tech in Computer Engineering at NMIMS MPSTME. With a keen interest in web development, app development, artificial intelligence, and data engineering, I am passionate about leveraging technology to solve real-life problems. Currently, I am exploring various fields within the tech domain to broaden my skill set and knowledge.

I thrive on challenges and am always eager to learn and grow. Whether it’s building dynamic web applications, developing innovative mobile apps, or diving into the complexities of AI and data engineering, I am committed to making a positive impact through technology.

Let’s connect and explore opportunities to collaborate and innovate!"
                />
                <section className={about.content}>
                    <div className={about.image}>
                        <Image src="/img/speech.jpg" layout='fill' objectFit='cover' objectPosition='80% 70%'  alt="Nelson family photo" />
                        {/* <Image src="/img/family-photo.jpg" width={600} height={800}/> */}
                    </div>
                    <div className={about.copy} >
                        <CopyBlock 
                            title="Vice president at Microsoft Students Club of MPSTME."
                            containerClass={about.container}
                            iconClass={about.icon}
                            icon={[ 'fas', 'headphones' ]} /* Replaced 'fat' icon */
                            copy="In addition to my design and technical expertise—I also have strong leadership, time management, and multitasking skills—honed through my experience as the Vice president of the Microsoft Students Club at MPSTME. I am passionate about fostering a collaborative and innovative environment, where team members can thrive and contribute their best work. I believe that effective communication and teamwork are key to achieving success in any project, and I strive to create a positive and inclusive atmosphere for all."
                        />
                        <BadgesBlock 
                            title="Business development and Marketing Head at Sports Committee of MPSTME." 
                            containerClass={about.container}
                            list={methods} 
                            fullContainer="fullContainer"
                            block="methods" 
                            icon="fingerprint"
                            copy="As the Business Development and Marketing Head of the Sports Committee at MPSTME, I have honed my skills in strategic planning, marketing, and team management. I am passionate about promoting sports and fitness within our community, and I am dedicated to creating opportunities for students to engage in physical activities and develop their skills. My experience in this role has taught me the importance of effective communication, collaboration, and adaptability in achieving our goals."
                            //invertedColor="invertedColor"
                            headerIcon={`${about.icon}`}
                        />
                    </div>
                </section>	
            </Container>
        </Section>
    )
}

const methods 	= [
    { key: 'globe', 			name: 'Sponsorship Acquisition', 	type: 'fas' }, // Replaced 'fad'
    { key: 'qrcode', 			name: 'Team Management', 			type: 'fas' }, // Replaced 'fad'
    { key: 'window-maximize', 	name: 'Leadership Skills', 			type: 'fas' }, // Replaced 'fad'
    { key: 'cubes', 			name: 'Event Planning', 			type: 'fas' }, // Changed 'far' to 'fas'
    { key: 'layer-group', 		name: 'Brand Strategy', 			type: 'fas' }, // Replaced 'fad'
    { key: 'solar-panel', 		name: 'Operations', 				type: 'fas' }, // Replaced 'fad'
]