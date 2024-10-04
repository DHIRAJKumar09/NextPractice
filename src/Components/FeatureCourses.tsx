'use client'
import Link from 'next/link'
import React from 'react'
import courseData from '../data/music_course.json';
import { BackgroundGradient } from './ui/background-gradient';

const FeatureCourses = () => {
  interface Course{
    id: number,
    title:  string,
    slug:  string,
    description: string,
    price: number,
    instructor:  string,
    isFeatured: boolean,
   
  }
  const featureCourses = courseData.courses.filter((course:Course) => course.isFeatured);
  return (
    <div className='py-12 bg-gray-900'>
      <div>
        <div className='text-center'>
          <h2 className='text-base text-teal-600 font-semibold tracking-wide'>Featured Courses</h2>
          <p className='mt-2 text-white text-3xl leading-8 font-extrabold sm:text-4xl '>Learn With the Best</p>
        </div>
      </div>
      <div className='mt-10'>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center'>
          {featureCourses.map((course:Course)=>(
            <div key={course.id} className="flex justify-center text-white">
              <BackgroundGradient className='flex flex-col rounded-[22px] bg-white dark:bg-zinc-900 overflow-hidden h-full max-w-sm'>
                <div className='p-4 sm:p-6 flex flex-col items-center text-center flex-grow'>
                  <p className='text-lg sm:text-xl text-purple-300 mt-4 mb-2 dark:text-neural-200'>{course.title}</p>
                  <p className='text-sm text-neural-600 dark:text-neural-400 felx-grow'>{course.description}</p>
                  <Link className='text-white' href={"/${course.slug}"}>Learn More</Link>
               
                </div>
             
              </BackgroundGradient>
            </div>
          ))}

        </div>
      </div>
      <div className='mt-20 text-white text-center'>
        <Link href={"/"}>View All Courses</Link>
      </div>
      <div>3</div>
    </div>
  )
}

export default FeatureCourses