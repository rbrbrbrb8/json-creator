const eventsStore = {
  jsonFile:{
    events:[
      {
        eventlocation:10005126,
        eventstatus:10
      }
    ]
  },
  setValueByKey : function(indexInArr,key,newVal) {
    this.jsonFile.events[indexInArr][key] = newVal;
  },
  addRow : function() {
    this.jsonFile.events.push({eventlocation:10005126,eventstatus:10});
  }
}

module.exports = eventsStore;