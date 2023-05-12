

const OrderButton = () => {
  return (
    <div role="button" tabIndex={0} className="grid place-items-center px-4 py-2 h-10 mx-6 bg-paleBlue-200 rounded-lg shadow-xl shadow-paleBlue-200/20 hover:opacity-70 hover:cursor-pointer focus:outline-none focus-visible:opacity-70">
        <a className="font-bold text-paleBlue-300 text-sm">
            Proceed to Payment
        </a>
    </div>
  )
}

export default OrderButton 