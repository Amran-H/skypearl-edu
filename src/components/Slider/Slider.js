
import Carousel from 'react-bootstrap/Carousel';

function UncontrolledExample() {
    return (
        <Carousel className='container' >

            <Carousel.Item>
                <img
                    style={{ height: 500, }}
                    className="d-block w-100 img-fluid"
                    src="https://img.freepik.com/free-vector/large-school-building-scene_1308-32058.jpg?w=2000"
                    alt="First slide"
                />
                <Carousel.Caption style={{ color: 'black', backgroundColor: 'grey' }}>
                    <h2>SkyPearl Education</h2>
                    <p>SkyPearl education is one of the finest online education platform in Bangladesh. It stated its journey in 2022. It aims to create a sustainable education environment.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    style={{ height: 500, }}
                    className="d-block w-100  img-fluid"
                    src="https://www.cisa.gov/sites/default/files/inline-images/1_Schools_Max_500-px-wide_0.jpg"
                    alt="Second slide"
                />

                <Carousel.Caption
                    style={{ color: 'black', backgroundColor: 'grey' }}>
                    <h2>SkyPearl Education</h2>
                    <p>SkyPearl education is one of the finest online education platform in Bangladesh. It stated its journey in 2022. It aims to create a sustainable education environment.</p>
                </Carousel.Caption>
            </Carousel.Item>


        </Carousel >
    );
}

export default UncontrolledExample;