import PropTypes from 'prop-types';
import Feature from '../Feature/Feature';

const PriceOption = ({option}) => {
    const {name, price, features}  = option 
    return (
        <div className='bg-blue-500 rounded-lg shadow-lg p-4 text-white flex flex-col'>
            <h2 className='text-center'>
                <span className='text-7xl font-extrabold text-black'>{price}$</span>
                <span className='text-2xl'>/month</span>
            </h2>
            <h4 className='text-3xl text-center my-8'>{name}</h4>
            <div className='pl-6 flex-grow'>
            {
                features.map((feature, idx) => <Feature key={idx} feature={feature}></Feature>)
            }
            </div>
            <button className='mt-12 bg-blue-900 w-full py-3 font-bold rounded-lg text-black hover:bg-white'>Buy Now</button>
        </div>
    );
};

PriceOption.propTypes = {
    option : PropTypes.object
}
export default PriceOption;