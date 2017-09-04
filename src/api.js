import Vue from 'vue'
import axios from 'axios'
import Qs from 'qs'

var serverUrl = 'https://pkuietest.euming.com/AgentAPI';


api = axios.create({
	baseURL:serverUrl,
	headers:{'Content-Type': 'application/x-www-form-urlencoded'},
	transformRequest:[function (data){
		if(!data)
			data = {}
		data = Qs.stringify(data,{arrayFormat: 'brackets'})
		return data
	}]
})

api.interceptors.response.use(response => {
  let data = response.data
  return data
}, function (error) {
	console.log(error)
  	return Promise.reject(error)
})