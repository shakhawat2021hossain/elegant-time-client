import banner1 from '../../../assets/images/banner/banner1.webp'
import banner2 from '../../../assets/images/banner/banner2.webp'
import banner3 from '../../../assets/images/banner/banner3.webp'
const Banner = () => {
    return (
        <div>
            <div className="carousel w-full h-[600px]">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src={banner1} className="object-cover lg:w-full" />
                    <div className='w-full lg:w-5/12 flex items-center ml-5 absolute top-0 bottom-0 p-2'>
                        <div>
                            <h1 className='text-6xl mb-2 font-bold text-background'>Timeless <span className='text-primary'>Elegance</span> for Every Occasion</h1>
                            <p className="text-sub">Discover our collection of luxury watches, perfect for any event style.</p>
                        </div>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 bottom-[50px]">
                        <a href="#slide3" className="btn btn-outline text-background">Previous</a>
                        <a href="#slide2" className="btn btn-outline text-background">Next</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src={banner2} className="object-cover lg:w-full" />
                    <div className='w-full lg:w-5/12 flex items-center ml-5 absolute top-0 bottom-0 p-2'>
                        <div>
                            <h1 className='text-background text-6xl mb-2 font-bold'>Precision and <span className='text-primary'>Craftsmanship</span> 
                            </h1>
                            <p className="text-sub">Experience the art of watchmaking with our meticulously crafted timepieces.

                            </p>
                        </div>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 bottom-[50px]">
                        <a href="#slide1" className="btn btn-outline text-background">Previous</a>
                        <a href="#slide3" className="btn btn-outline text-background">Next</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src={banner3} className="object-cover lg:w-full" />
                    <div className='w-full lg:w-5/12 flex items-center ml-5 absolute top-0 bottom-0 p-2'>
                        <div>
                            <h1 className='text-6xl mb-2 font-bold text-background'>Unmatched <span className='text-primary'>Style</span> and Durability</h1>
                            <p className="text-sub">Find watches that combine robust durability with sophisticated design.</p>
                        </div>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 bottom-[50px]">
                        <a href="#slide2" className="btn btn-outline text-background">Previous</a>
                        <a href="#slide1" className="btn btn-outline text-background">Next</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;