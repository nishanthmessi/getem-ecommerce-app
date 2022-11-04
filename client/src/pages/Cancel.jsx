import CancelMoji from '../img/cancel.png'
 
const Cancel = () => {
  return (
    <>
      <div className="flex items-center justify-center h-screen">
        <div className="flex flex-col items-center">
          <img className="object-cover w-96 rounded-xl aspect-square" src={CancelMoji} alt="profile_img"/>
          <div className="flex items-center justify-center mt-4">
            <p className="font-bold text-xl lg:text-2xl text-center">You have cancelled the payment request. Please try again.</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Cancel