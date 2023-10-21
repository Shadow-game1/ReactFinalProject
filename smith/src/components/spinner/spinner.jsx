import Spinner from 'react-bootstrap/Spinner';


function Loader() {
return (
    <Spinner animation="border" role="status">
        <div className='spinner-bt'>
            <span className="visually-hidden">Loading...</span>
        </div>
    </Spinner>
);
}

export default Loader;
