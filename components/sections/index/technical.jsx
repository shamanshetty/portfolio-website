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
import about from '../../../styles/sections/index/about.module.scss'

/**
 * Section: Technical
 * Highlight your technical skills with a short blurb about you,
 * Then display the programs you are proficient with and the technologies you use if applicable.
 * 
 * @returns {jsx} <Technical />
 */
export default function Technical() {
    return (
        <Section classProp={`${about.section} borderBottom`}>	
            <Container spacing={['verticalXXXLrg']}>
                <SectionTitle
                    title="Technical"
                    preTitle="Hardskills"
                    subTitle="Full stack web developer who is continuously learning and evolving to stay up-to-date with the latest industry trends."
                />
                <section className={`${about.content} ${about.container}`}>
                    <div className={about.copy}>
                        <CopyBlock 
                            title="ML Enthusiast"
                            icon={[ 'fas', 'chart-line' ]} /* Replaced 'fat' with 'fas' */
                            copy="Having built a few projects on Machine learning and Deep learning algorithms, I am passionate about exploring the potential of AI and its applications in various fields. I am constantly learning and experimenting with new techniques to enhance my skills and knowledge in this exciting domain."
                            iconClass={about.icon}
                            containerClass={about.container}
                        />
                        <BadgesBlock 
                            title="Technologies I work with" 
                            copy="A strong believer of learning practically, I have built a few projects using the following technologies. I am always open to learning new technologies and frameworks to expand my skill set."
                            list={software}
                            block="software" 
                            fullContainer="fullContainer"
                            icon="grid-2-plus"
                            containerClass={about.container}
                            headerIcon={about.icon} 
                        />
                        <BadgesBlock 
                            title="Technologies I love to work with" 
                            copy="I deeply enjoy solving problems through code. From the front end all the way to the back end and the APIs in-between. No project is too challenging for me."
                            list={tech} 
                            block="tech"
                            fullContainer="fullContainer" 
                            icon="laptop-code"
                            containerClass={about.container}
                            headerIcon={about.icon} 
                        />							
                    </div>
                    <div className={`${about.image} ${about.technicalSvg}`}>
                        <Image src="/img/dataism-24.svg" width={477} height={1111} alt="Data Strings 01 by Colorpong: https://ywft.us/2177b695b" />
                    </div>
                </section>	
            </Container>
            {/* <SectionGridBg gridSize={4}/> */}
        </Section>
    )
}

const software = [
    { key: 'photoshop', 	name: 'Photoshop', 			type: 'devicon' },
    { key: 'illustrator', 	name: 'Illustrator', 		type: 'devicon' },
    { key: 'figma', 		name: 'Figma', 				type: 'devicon' },
    { key: 'vscode', 		name: 'VSCode', 			type: 'devicon' },
    { key: 'mailbox', 		name: 'Postman', 			type: 'fas' }, // Free solid icon
    { key: 'computer-mouse',name: 'Supabase', 			type: 'fas' }, // Free solid icon
]

const tech	= [
    { key: 'javascript', 	name: 'JavaScript', 		type: 'devicon' },
    { key: 'nodejs', 		name: 'NodeJS', 			type: 'devicon' },
    { key: 'react', 		name: 'React', 				type: 'devicon' },
    { key: 'nextjs', 		name: 'NextJS', 			type: 'devicon' },
    { key: 'jquery', 		name: 'jQuery', 			type: 'devicon' },
    { key: 'php', 			name: 'PHP', 				type: 'devicon' },
    { key: 'wordpress', 	name: 'WordPress', 			type: 'devicon' },
    { key: 'woocommerce', 	name: 'Svelte', 			type: 'devicon' },
    { key: "google",		name: "IDX", 				type: "devicon" },
    { key: 'html5', 		name: 'HTML5', 				type: 'devicon' },
    { key: 'css3', 			name: 'CSS3', 				type: 'devicon' },
    { key: 'sass', 			name: 'SASS', 				type: 'devicon' },
    { key: 'git', 			name: 'Git', 				type: 'devicon' },
    { key: 'mysql', 		name: 'MySQL', 				type: 'devicon' },
    { key: 'mongodb', 		name: 'MongoDB', 			type: 'devicon' },
]