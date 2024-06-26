import React, { Suspense } from 'react'
const LoadImage = React.lazy(() => import('./LoadImage'));

const CertificateCard = ({ dark, certificate, haveUrl = false }) => {
    const { title, image, enterAnimation, delay,url='' } = certificate ?? {};
    const handleClick = () => {
        if (haveUrl) {
            window.open(url, '_blank');
        }
    }
    return (
        <div
            data-aos={`${enterAnimation}`}
            data-aos-anchor-placement="top-bottom"
            data-aos-delay={`${delay}`}>
            <div

                className={`relative group w-full     ${dark ? 'bg-slate-900 shadow-yellow-600' : 'bg-slate-300'}   cursor-pointer  overflow-hidden rounded-3xl`}>

                <div className={`absolute w-1/3 md:w-1/3 aspect-square rounded-full  top-[50%]  left-[50%] translate-x-[50%] translate-y-[50%] ${dark ? 'bg-[#eb26fd]' : 'bg-[#4942E4]'}  blur-[100px] group-hover:translate-x-[-100%] group-hover:translate-y-[10%] transition-all duration-300`} />

                <div className=' w-full flex flex-col gap-y-2  ' onClick={handleClick}>


                    <div className='relative group w-full  overflow-hidden aspect-video rounded-t-3xl'>
                        <Suspense fallback={<><img src={require('../assets/Spinner.svg')} /></>}>
                            <LoadImage srcPath={image} />
                        </Suspense>
                    </div>
                    <div className='flex flex-col px-2'>
                        <div className={`text-[1rem] text-center font-semibold  ${dark ? 'text-pink-600' : 'text-blue-700'}`}>
                            {title}
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default CertificateCard
