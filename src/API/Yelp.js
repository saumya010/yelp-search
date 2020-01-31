import axios from 'axios';

export default axios.create({
	baseURL: 'https://api.yelp.com/v3/businesses',
	headers: {
		Authorization: 'Bearer _a_7Q8qkoHFXzib9AW9V1ZqgVCZrM-iNTOGkQcIPVIhCsVjKDY4TYqK7fS_zDH2BUSOF7wlTqk-TdKMSOEz5jwmdmAfJQBxoOdWqM2-Sh4ULpW1va1khQ3NTB08zXnYx'
	}
});
