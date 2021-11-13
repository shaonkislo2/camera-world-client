import React, { useEffect, useState } from 'react';


const AllReview = () => {
    const [review, setReview] = useState([]);
	useEffect(() => {
		fetch("https://aqueous-peak-41185.herokuapp.com/allReview")
			.then((res) => res.json())
			.then((data) => setReview(data));
	}, []);


	const [value, setValue] = React.useState(0);
    return (
        <div className="p-3">
			<h1>Customer Reviews</h1>
			<div className="review">
				<div className="row">
					{review?.map((pd) => (
						<div className="col-md-4">
							<div className="service border border p-3 card text-white bg-primary m-2">
								<div className=" services-img ">
									<img className="w-100" src={pd?.image} alt="" />
								</div>

								<h6>Customer Name :{pd?.name}</h6>
								<h4>{pd?.model}</h4>
								<h5>Rating:{pd?.rating}</h5>
								<p> <h6>Customer Review:</h6>{pd?.description}</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</div >
    );
};

export default AllReview;