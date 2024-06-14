import { LuBatteryCharging } from 'react-icons/lu';
import feature from '../../../assets/images/feature/feature.webp'
import { FaMicrophoneLines } from 'react-icons/fa6';
import { GiNetworkBars } from 'react-icons/gi';
import { HiOutlineSpeakerWave } from 'react-icons/hi2';
const Feature = () => {
    return (
        <div className="hero min-h-screen bg-background">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={feature} className="max-w-sm lg:ml-24" />
                <div className='space-y-4 lg:mr-24'>
                    <h1 className="text-5xl font-bold mb-6">Main Features</h1>
                    <div>
                        <div className='flex items-center'>
                            <LuBatteryCharging className='text-primary text-4xl mr-4'/>
                            <h2 className='text-2xl font-bold'>Extended Battery Life </h2>
                        </div>
                        
                        <p className='ml-14'>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                    </div>
                    <div>
                        <div className='flex items-center'>
                            <FaMicrophoneLines className='text-primary text-4xl mr-4'/>
                            <h2 className='text-2xl font-bold'>Microphone, Call, Track, Volume </h2>
                        </div>
                        
                        <p className='ml-14'>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                    </div>
                    <div>
                        <div className='flex items-center'>
                            <GiNetworkBars className='text-primary text-4xl mr-4'/>
                            <h2 className='text-2xl font-bold'>Seamless Connectivity </h2>
                        </div>
                        
                        <p className='ml-14'>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                    </div>
                    <div>
                        <div className='flex items-center'>
                            <HiOutlineSpeakerWave className='text-primary text-4xl mr-4'/>
                            <h2 className='text-2xl font-bold'>Secure: Noise cancellation</h2>
                        </div>
                        
                        <p className='ml-14'>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default Feature;