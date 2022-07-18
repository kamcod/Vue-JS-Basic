export default{
    
  saveData(state, newCoach){
    state.coaches.push(newCoach);
    
  },
  saveRequest(state, newRequest){
    state.requests.push(newRequest);
  }
};