export default{
  saveData(context, data){
    const coach = {
      id : data.id,
      firstName : data.first,
      lastName : data.last,
      description : data.description,
      hourlyRate : data.rate,
      areas : data.areas
    };
    context.commit('saveData', coach);
  },

  saveRequest(context, payload){
    context.commit('saveRequest', payload);
  }
};