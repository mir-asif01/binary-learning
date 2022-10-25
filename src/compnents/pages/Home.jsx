import React from 'react';
import { useLoaderData } from 'react-router-dom';
//  swiper
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Home = () => {
    const topics = useLoaderData()
    return (
        <div>
            <h1 className='text-2xl my-5'>Welcome to our free learning platform "Binary"</h1>
            <div>
                <Swiper
                    // install Swiper modules
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    spaceBetween={50}
                    slidesPerView={1}
                    navigation = {{auto : true}}
                    pagination={{ clickable: true }}
                    scrollbar={{ draggable: true }}
                    // onSwiper={(swiper) => {}}
                    // onSlideChange={() => console.log('slide change')}
                >
                    {
                        topics.map(tp=><SwiperSlide className='flex justify-center items-center'>
                            <img src={tp.img} className='w-1/4 mx-2' alt="" />
                            <div>
                            {
                                tp.features.map(ft=><>
                                <p>✔{ft}</p>
                                </>)
                            }
                            </div>
                        </SwiperSlide>)
                    }
                </Swiper>
            </div>
            <div className='p-3 w-full md:w-3/4 my-4 mx-auto'>
                {
                    topics.map(topic => <>
                        <div className="flex flex-col md:flex-row justify-evenly items-center my-4 shadow-md px-4 py-2">
                            <img src={topic.img} alt="" className='w-72' />
                            <div>
                                <h1 className='text-xl text-rose-500'>{topic.name}</h1>
                                <p className='text-justify md:px-3'>{topic.desc}</p>
                            </div>
                        </div>
                    </>)
                }
            </div>
        </div>
    );
};

export default Home;