const ResumeCard = ({ years, schoolNameOrJobPosition, majorOrCompanyName, location, description }) => {
  return (
    <div className="w-full bg-white py-10 px-6 lg:py-20 lg:px-12 shadow-[-12px_12px_25px_0_rgba(138,131,124,0.23)]">
      <h1 className="text-xl font-bold text-[#0050ff] inline-block">{years}</h1>
      <div className="flex justify-between flex-col lg:flex-row font-montserrat mt-2 font-light">
        <div className="lg:w-1/2">
          <h2 className="uppercase">{schoolNameOrJobPosition}</h2>
          <h3 className="text-sm">{majorOrCompanyName}</h3>
          <h3 className="text-sm mt-4">{location}</h3>
        </div>
        <div className="lg:w-1/2 leading-6 text-sm">
          <p>
            {description}
          </p>
        </div>
      </div>
    </div>
  )
}

export default ResumeCard