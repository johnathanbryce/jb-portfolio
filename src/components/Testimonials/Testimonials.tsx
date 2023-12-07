import React from 'react'
import styles from './Testimonials.module.css'
// Internal Components
import CustomLink from '../CustomLink/CustomLink'

export default function Testimonials() {
  return (
    <section className={styles.testimonials}>
        <article className={styles.testimonial}>
            <blockquote className={styles.testimonial_quote}>
            &quot;As a  member of the founding development team at Romp, John has been instrumental in shaping the direction and success of Romp. John&apos;s expertise in front-end development has greatly enhanced our user experience. John&apos;s collaborative approach to integrating APIs and his valuable contributions to our UI/UX design have been pivotal in our Romp&apos;s progress and success. John&apos;s dedication and innovative thinking have been vital to the evolution of Romp and I look forward to our continued success together.&quot;
            </blockquote>
            <figcaption className={styles.testimonial_author}>
                - Jason Tulloch, Founder - Romp 
                <CustomLink title="rompathlete.com"  href='https://rompathlete.com/'/>
            </figcaption>
        </article>

        <article className={styles.testimonial}>
            <blockquote className={styles.testimonial_quote}>
                &quot;Working with John on my portfolio site was a great experience. He nailed the details and captured the essence of my work. The project moved quickly and smoothly, thanks to John&apos;s skill and dedication. &quot;
            </blockquote>
            <figcaption className={styles.testimonial_author}>
                - Julien Verschooris - Composer
                <CustomLink title="julienverschooris.com"  href='https://www.julienverschooris.com/'/>
            </figcaption>
        </article>
    </section>
  )
}
