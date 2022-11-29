import React, { useEffect } from 'react';
import './App.css';
//import { Field } from './FormItems';
import { GoogleLogin } from 'react-google-login';
import { gapi } from 'gapi-script';
import { ConnexionForm } from './ConnexionForm';
//import Axios from 'axios'

function App() {

	//const [movieName, setMovieName] = useState("");
	//const [review, setReview] = useState("");
	//const [movieReviewList, setMovieList] = useState([])
	const clientId = '139355353393-o6752r9sq18ohci0itsrm3kgmgd0p5ls.apps.googleusercontent.com'

	useEffect(() => {
		// Axios.get("http://localhost:3001/api/get").then((response) => {
		// 	setMovieList(response.data)
		// })

		const initClient = () => {
			gapi.client.init({
			clientId: clientId,
			scope: ''
		  });
	   	};
		gapi.load('client:auth2', initClient);
	}, [])

	// const submitReview = () => {
	// 		Axios.post("http://localhost:3001/api/insert", {
	// 			movieName: movieName,
	// 			movieReview: review
	// 		}).then(() => {
	// 			alert('sucessful insert')
	// 		})
	// }

	const onSuccess = (res) => {
        console.log('success:', res);
    };

    const onFailure = (err) => {
        console.log('failed:', err);
    };

	return (
			<div className="App">
				<ConnexionForm/>
				<GoogleLogin
          			clientId={clientId}
          			buttonText="Sign in with Google"
          			onSuccess={onSuccess}
          			onFailure={onFailure}
          			cookiePolicy={'single_host_origin'}
          			isSignedIn={true}
				/>
			</div>
	);
}

export default App;
