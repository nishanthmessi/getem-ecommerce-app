import SuccessMoji from '../img/thank.png'

const Success = () => {
  return (
    <>
    <div className="flex items-center justify-center h-screen">
      <div className="flex flex-col items-center">
        <img className="object-cover w-96 rounded-xl aspect-square" src={SuccessMoji} alt="profile_img"/>
        <div className="flex items-center justify-center mt-4">
          <p className="font-bold text-xl lg:text-2xl text-center">Thanks for shopping. Your order has been placed</p>
        </div>
      </div>
    </div>
    </>
    
  )
}

export default Success