const ProfesionalCard = () => {
    return (
        <div className='w-full bg-white py-10 px-6 lg:py-20 lg:px-12 mt-8 shadow-[-12px_12px_25px_0_rgba(138,131,124,0.23)]'>
            <div>
                <h2 className='text-2xl font-bold'>Professional skillset</h2>
                <ul className='mt-8 capitalize flex flex-wrap gap-x-16 gap-y-7 text-sm font-light font-montserrat'>
                    <li className='flex items-center w-52'>
                        <span className="h-3 w-3 bg-[#0050ff]"></span>
                        <p className='ml-2'>problem solving</p>
                    </li>
                    <li className='flex items-center w-52'>
                        <span className="h-3 w-3 bg-[#0050ff]"></span>
                        <p className='ml-2'>Entrepreneurial Mindset</p>
                    </li>
                    <li className='flex items-center w-52'>
                        <span className="h-3 w-3 bg-[#0050ff]"></span>
                        <p className='ml-2'>Teamwork & Collaboration</p>
                    </li>
                </ul>
            </div>
            <div className='mt-12 lg:mt-20'>
                <h2 className='text-2xl font-bold'>Languages</h2>
                <ul className='mt-8 flex flex-wrap gap-x-16 gap-y-7 text-sm font-light font-montserrat'>
                    <li className='flex items-center w-52'>
                        <span className="h-3 w-3 bg-[#0050ff]"></span>
                        <p className='ml-2'>Indonesia (native)</p>
                    </li>
                    <li className='flex items-center w-52'>
                        <span className="h-3 w-3 bg-[#0050ff]"></span>
                        <p className='ml-2'>English (less fluent)</p>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default ProfesionalCard