import React from 'react';
import './Home.css';
import Particles from "react-tsparticles";


const Home = () => {
    const particlesInit = (main) => {
        console.log(main);
    
        // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
      };
      const particlesLoaded = (container) => {
        console.log(container);
      };

    return (
        <section className="pres_home">
            <p style={{ zIndex: 12,}}>
                Ca c'est la HOME
            </p>
            <Particles id="particles-js"
            params={{
                particles: {
                    number: {
                        value: 100,
                        density: {
                            enable: true,
                            value_area: 1600
                        }
                    },
                    shape:{
                        type:'star',
                        width: 7,
                        color: 'random'
                    },
                    color: {
                        value: '#FFD333'
                    },
                    opacity: {
                        random: true,
                        anim: {
                            enable: true
                        }
                    },
                    size: {
                        value: 2,
                        random: true,
                        anim: {
                            enable: true,
                            speed: 6
                        }
                    },
                    line_linked: {
                        enable: false
                    },
                    move: {
                        speed: 0.4,
                        direction: 'none',
                        random: false,
                        out_mode: "out",
                        bounce: true,
                    } 
                }
            //     interactivity: {
            //         detect_on: "canvas",
            //         events: {
            //           onhover: {
            //             enable: false,
            //             mode: "repulse"
            //           },
            //           onclick: {
            //             enable: true,
            //             mode: "push"
            //           },
            //           resize: true
            //         },
            //         modes: {
            //           grab: {
            //             distance: 800,
            //             line_linked: {
            //               opacity: 1
            //             }
            //           },  
            // }}   
              }}   
        />
        </section>
    )
}


export default Home;