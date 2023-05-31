import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/Banner.css'

export default function Banner() {

    return (
        <div className='container-fluid banner m-0 p-0 text-center text-white'>
            <img src="../banner.png" alt="Banner" className='w-100 h-100' />
            <h2 className='display-2 p-1'>
                <strong>¡Pizzería Mamma Mía!</strong>
                <br />
                <span className='display-6'>¡Tenemos las mejores pizzas que podrás encontrar!</span>
                <hr className='mx-5' />
            </h2>
        </div>


    )
}