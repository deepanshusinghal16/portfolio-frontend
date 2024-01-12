import React from 'react'

const CertificateCard = ({ dark, certificate }) => {
    const { title, image, enterAnimation, delay } = certificate ?? {};
    return (
        <div
            data-aos={`${enterAnimation}`}
            data-aos-anchor-placement="top-bottom"
            data-aos-delay={`${delay}`}>
            <div

                className={`w-full  max-w-[390px]  ${dark ? 'bg-slate-900 shadow-stone-600' : 'bg-slate-300'} shadow-md cursor-pointer  overflow-hidden rounded-3xl `}>

                <div className=' w-full flex flex-col gap-y-4  '>

                    <div className='relative group w-full h-[250px] overflow-hidden'>
                        <img src={image} alt="Img" loading='lazy' className='w-full  mx-auto ' />
                    </div>

                    <div className='flex flex-col px-2'>
                        <div className={`text-[1rem] text-center font-semibold tracking-wider ${dark ? 'text-pink-600' : 'text-blue-700'}`}>
                            {title}
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default CertificateCard