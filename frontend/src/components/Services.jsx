import React from 'react';

function Services() {
    const services = [
        { id: 1, title: 'Community Management', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.', image: '/src/assets/servicon/s1.png' },
        { id: 2, title: 'National Associations', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.', image: '/src/assets/servicon/s2.png' },
        { id: 3, title: 'Clubs And Groups', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.', image: '/src/assets/servicon/s3.png' },
    ];
    return (
        <div className='md:px-14 px-4 py-16 max-w-screen-2xl mx-auto' id='service'>
            <div className='text-center my-8'>
                <h2 className='text-4xl text-neutralDGray font-semibold mb-2'>Our Clients</h2>
                <p className=' text-neutralGrey'>We have been working with some Fortune 500+ clients</p>

                {/*company logos*/}

                <div className='flex flex-wrap justify-between items-center my-12 gap-8'>
                    <img src='/src/assets/icons/c1.png' alt='' />
                    <img src='/src/assets/icons/c2.png' alt='' />
                    <img src='/src/assets/icons/c3.png' alt='' />
                    <img src='/src/assets/icons/c4.png' alt='' />
                    <img src='/src/assets/icons/c5.png' alt='' />
                    <img src='/src/assets/icons/c6.png' alt='' />
                </div>

            </div>

            {/*Services cards*/}
            <div className=' mt-20 md:w-1/2 mx-auto text-center'>
                <h2 className='text-4xl text-neutralDGray font-semibold mb-3'>Manage your entire community in a single system</h2>
                <p className=' text-neutralGrey'>Who is Nextcent suitable for?
                </p>
            </div>

            {/*Cards*/}
            <div className='mt-14 grid lg:grid-cols-3 md:grid-cols-1 md:w-11/12 mx-auto gap-12'>
                {
                    services.map((service) => <div key={service.id} className=' px-4 py-8 text-center md:w-[300px] mx-auto md:h-80 rounded-md shadow cursor-pointer hover:-translate-y-5 hover:border-b-4 hover:border-indigo-700 transition-all duration-300 flex items-center justify-center h-full'>
                        <div>
                            <div className=' bg-slate-50 mb-4 h-14 w-14 mx-auto rounded-tl-3xl rounded-br-3xl'><img src={service.image} alt='' /></div>
                            <h4 className=' text-2xl font-bold text-neutralDGray mb-2 px-2 '>{service.title}</h4>
                            <p className=' text-sm text-neutralGrey'>{service.description}</p>
                        </div>
                    </div>)
                }
            </div>


        </div>
    )
}

export default Services