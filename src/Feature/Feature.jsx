import PropTypes from 'prop-types';
import { IoShieldCheckmarkSharp } from "react-icons/io5";

const Feature = ({feature}) => {
    return (
        <div>
            <p className='flex items-center'><IoShieldCheckmarkSharp className='mr-2 text-blue-900' />{feature}</p>
        </div>
    );
};
Feature.propTypes = {
    feature : PropTypes.string
}
export default Feature;