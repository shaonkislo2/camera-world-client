import React from 'react';
import { Carousel } from 'react-bootstrap';

const Gallery = () => {
    return (
        <div className="row mt-5" id="gallery">
			<h1>Our New Products</h1>

			<div className="col-lg-4 container mt-5 ">
				<Carousel>
					<Carousel.Item>
						<img
							className="w-100"
							src="https://images.unsplash.com/photo-1581591524425-c7e0978865fc?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c29ueSUyMGNhbWVyYXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80"
							alt="First slide"
						/>

					</Carousel.Item>
					<Carousel.Item>
						<img
							className="w-100"
							src="https://t3.ftcdn.net/jpg/04/16/97/74/360_F_416977415_2honZHq2HwlaB7GxMRMnYu4ib0RSgPPZ.jpg"
							alt="Second slide"
						/>
					</Carousel.Item>
					<Carousel.Item>
						<img
							className="w-100"
							src="https://c0.wallpaperflare.com/preview/828/932/975/camera-lens-vintage-photography.jpg"
							alt="Third slide"
						/>
					</Carousel.Item>
				</Carousel>
			</div>

			<div className="col-lg-4 container mt-5 ml-3">
				<Carousel>
					<Carousel.Item>
						<img
							className="w-100"
							src="https://freedesignfile.com/upload/2016/12/Camera-with-blurred-background-Stock-Photo.jpg"
							alt="First slide"
						/>

					</Carousel.Item>
					<Carousel.Item>
						<img
							className="w-100"
							src="https://images.unsplash.com/photo-1516724562728-afc824a36e84?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
							alt="Second slide"
						/>
					</Carousel.Item>
					<Carousel.Item>
						<img
							className="w-100"
							src="https://images4.alphacoders.com/749/749123.jpg"
							alt="Third slide"
						/>
					</Carousel.Item>
				</Carousel>
			</div>

            <div className="col-lg-4 container mt-5 ml-3">
				<Carousel>
					<Carousel.Item>
						<img
							className="w-100"
							src="https://cdn.suwalls.com/wallpapers/photography/sony-camera-46132-1920x1080.jpg"
							alt="First slide"
						/>

					</Carousel.Item>
					<Carousel.Item>
						<img
							className="w-100"
							src="https://img2.goodfon.com/wallpaper/nbig/a/de/kamera-sony-makro-5121.jpg"
							alt="Second slide"
						/>
					</Carousel.Item>
					<Carousel.Item>
						<img
							className="w-100"
							src="https://22z0n11qmoz3ncbr3xafxk5z-wpengine.netdna-ssl.com/wp-content/uploads/2021/03/The-Complete-Setup-Guide-to-the-Sony-A1-Mirrorless-Camera-1024x683.jpg"
							alt="Third slide"
						/>
					</Carousel.Item>
				</Carousel>
			</div>

		</div>
    );
};

export default Gallery;