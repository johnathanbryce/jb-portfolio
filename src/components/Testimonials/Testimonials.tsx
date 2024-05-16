import React from 'react'
import styles from './Testimonials.module.css'
// Internal Components
import CustomLink from '../CustomLink/CustomLink'
import Carousel from '../Carousel/Carousel'

export default function Testimonials() {
  return (
    <section className={styles.testimonials}>
        <Carousel>
            <article className={styles.testimonial}>
                <blockquote className={styles.testimonial_quote}>
                &quot;As a  member of the founding development team at Romp, John has been instrumental in shaping the direction and success of Romp. John&apos;s expertise in front-end development has greatly enhanced our user experience. John&apos;s collaborative approach to integrating APIs and his valuable contributions to our UI/UX design have been pivotal in our Romp&apos;s progress and success. John&apos;s dedication and innovative thinking have been vital to the evolution of Romp and I look forward to our continued success together.&quot;
                </blockquote>
                <figcaption className={styles.testimonial_author}>
                    <div className={styles.author_name}>
                        <p><b>- Jason Tulloch</b> </p>
                    </div>
                    <div className={styles.author_role}>
                         <p> Founder: </p> 
                        <CustomLink title="rompathlete.com"  href='https://rompathlete.com/'/>
                    </div>
                </figcaption>
            </article>

            <article className={styles.testimonial}>
                <blockquote className={styles.testimonial_quote}>
                    &quot;John has been a pleasure to work with on the Labridge Farms website. He communicated with me every step of the way and was always open to feedback and changes. His dedication and genuine interest in capturing the essence of our dog breeding and farm business made the process smooth and enjoyable. We continue to collaborate on updates to the website, big or small, and Johnathan handles them smoothly and efficiently. I couldn&apos;t be happier with the end result and highly recommend his services. &quot;
                </blockquote>
                <figcaption className={styles.testimonial_author}>
                    <div className={styles.author_name}>
                       <p><b>- Matthew Durant</b></p> 
                    </div>
                    <div className={styles.author_role}>
                         <p> Owner: </p> 
                         <CustomLink title="labridgefarms.com"  href='https://labridgefarms.com/'/>
                    </div>
                </figcaption>
            </article>

            <article className={styles.testimonial}>
                <blockquote className={styles.testimonial_quote}>
                    &quot;Working with John on my portfolio site was a great experience. He nailed the details and captured the essence of my work. The project moved quickly and smoothly, thanks to John&apos;s skill and dedication. &quot;
                </blockquote>
                <figcaption className={styles.testimonial_author}>
                    <div className={styles.author_name}>
                       <p><b>- Julien Verschooris</b></p> 
                    </div>
                    <div className={styles.author_role}>
                         <p> Composer: </p> 
                         <CustomLink title="julienverschooris.com"  href='https://www.julienverschooris.com/'/>
                    </div>
                </figcaption>
            </article>
        </Carousel>

    </section>
  )
}
