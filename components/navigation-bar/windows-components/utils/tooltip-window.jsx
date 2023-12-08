const TooltipWindow = ({text}) => {
  return (
    <div className='relative text-sm text-black '>
            <div className="flex absolute top-[calc(-100%-27px)] transform -translate-x-1/2 z-30 min-w-max bg-white rounded px-1 py-[2px]">
                {text}
            </div>
    </div>
  )
}

export default TooltipWindow