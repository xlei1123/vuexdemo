// const ADD_COUNT = 'ADD_COUNT'
// const INITIALIZE_DATA = 'INITIALIZE_DATA'
export default {
	//点击加1
	ADD_COUNT(state) {
		state.count ++;
	},
	
	/*
	初始化信息，*/
	INITIALIZE_DATA(state) {
		api.post('/talent/stockInfo',{stockId:'22'})
      	.then((json)=>{
        if(json.isOk==true){
          

          }
        })
	}
}