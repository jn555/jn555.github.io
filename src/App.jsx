import { useRef } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { WaveMaterial } from './WaveMaterial'
import { easing } from 'maath'
import { Box, Card, Flex, Text } from '@radix-ui/themes'
import { GitHubLogoIcon, LinkedInLogoIcon } from '@radix-ui/react-icons'
import { ScrollArea, ScrollAreaScrollbar, ScrollAreaThumb, ScrollAreaViewport } from '@radix-ui/react-scroll-area'
import ExperienceItem from './ExperienceItem'
import { FaGoodreads } from "react-icons/fa";

function ShaderPlane() {
  const ref = useRef()
  const { viewport, size } = useThree()
  useFrame((state, delta) => {
    ref.current.time += delta
    easing.damp3(ref.current.pointer, state.pointer, 0.2, delta)
  })
  return (
    <mesh scale={[viewport.width, viewport.height, 1]}>
      <planeGeometry />
      <waveMaterial ref={ref} key={WaveMaterial.key} resolution={[size.width * viewport.dpr, size.height * viewport.dpr]} />
    </mesh>
  )
}

export default function App() {
  return (
    <div className="app-container">
    <Canvas>
      <ShaderPlane />
    </Canvas>
    <div className='overlay'>
      <Box className="box">
          <Card className="card">
              <Text as="div" size="7" weight="bold">
                Jacob Nagovskiy
              </Text>
              <Text as="div" size="6" color="gray">
                Computer Engineering  @ UWaterloo
              </Text>
              <ScrollArea className='scroll-area'>
                <ScrollAreaViewport className="scroll-area-viewport">
                  <Flex direction='column' gap='1rem'>
                    <Text size="4">
                    Hi, I'm a 3rd year Computer Engineering student at the University of Waterloo and currently working as a Software Engineer Intern at Dandelion.
                    </Text>
                    <Text size="4">
                      You can contact me on {' '}
                      <a
                        href="https://www.linkedin.com/in/jacob-n-440b83252/"
                        style={{ color: 'inherit', textDecoration: 'underline' }}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        LinkedIn
                      </a>{' '} or at{' '}
                      <a href="mailto:jnagovsk@uwaterloo.ca" style={{ color: 'inherit', textDecoration: 'underline' }}>
                        jnagovsk@uwaterloo.ca
                      </a>.
                    </Text>
                    <Text size="6">
                    Experience
                    </Text>
                    <ExperienceItem
                      logo="/dandelion.png"
                      title="Dandelion Networks"
                      role="Software Engineer Intern"
                      location="Toronto, ON"
                      date="09/2024 - Present"
                      technologies={["Golang", "AWS", "DynamoDB", "React Native"]}
                      backgroundColor="#202020"
                      coursework=""
                  />
                  <ExperienceItem
                      logo="/purdue.png"
                      title="Purdue University"
                      role="Research Assistant"
                      location="West Lafayette, IN"
                      date="06/2024 - Present"  
                      technologies={["Python", "OpenCV", "Tensorflow"]}
                      backgroundColor="#202020"
                      coursework="" 
                  />
                  <ExperienceItem
                      logo="/waterloo.png"
                      title="University of Waterloo"
                      role="Research Assistant"
                      location="Waterloo, ON"
                      date="05/2024 - Present"
                      technologies={["Python", "Pytorch"]}
                      backgroundColor="#202020"
                      coursework=""
                  />
                  <ExperienceItem
                      logo="/volico.png"
                      title="Volico Data Centers"
                      role="Software Engineer Intern"
                      location="Ft. Lauderdale, FL"
                      date="01/2024 - 4/24"
                      technologies={["Ruby", "Rails", "PostgreSQL", "AWS", "Hubspot"]}
                      coursework=""
                  />
                  <ExperienceItem
                      logo="/unryo.png"
                      title="Unryo"
                      role="Software Engineer Intern"
                      location="Montreal, QC"
                      date="05/2023 - 08/23"
                      technologies={["Golang", "Vue JS", "InfluxDB", "Azure",  "Docker", "Kubernetes"]}
                      coursework=""
                  />
                  <ExperienceItem
                      logo="/fiu.png"
                      title="Florida International University"
                      role="Research Intern"
                      location="Miami, FL"
                      date="07/2021 - 10/21"
                      technologies={["Java"]}
                      coursework=""
                  />
                  <Text size="6">
                  Education
                  </Text>
                  <ExperienceItem
                      logo="/waterloo.png"
                      title="University of Waterloo"
                      role="Computer Engineering, AI Option"
                      location="Waterloo, ON"
                      date="09/2022 - Present"
                      technologies={[]}
                      coursework="Relevant Courses: Systems Programming & Concurrency, Discrete Mathematics 1 & 2, Embedded Microprocessor Systems, Data Structures & Algorithms, Introduction to Optimization, Computer Organization, & Signals & Systems."
                  />
                  <Text size="6">
                    Projects
                  </Text>
                  <Text size="4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                  </Text>
                  <Text size="4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                  </Text>
                  <Flex gap="3">
                    <a href='https://github.com/jn555' className="icon-link"><GitHubLogoIcon style={{width: '25px', height: '25px'}}/></a>
                    <a href='https://www.linkedin.com/in/jacob-n-440b83252/' className="icon-link"><LinkedInLogoIcon style={{width: '25px', height: '25px'}}/></a>
                    <a href="https://www.goodreads.com/user/show/174419357-jn" className="icon-link" target="_blank" rel="noopener noreferrer">
                      <FaGoodreads style={{width: '25px', height: '25px'}}/>
                    </a>
                 </Flex>

                  </Flex>
                </ScrollAreaViewport>
                <ScrollAreaScrollbar orientation='vertical' className="scroll-area-scrollbar">
                  <ScrollAreaThumb className="scroll-area-thumb" />
                </ScrollAreaScrollbar>
              </ScrollArea>
          </Card>
      </Box>
    </div>
    </div>
  );
}
