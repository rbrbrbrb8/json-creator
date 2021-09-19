// const { useRef } = require("react");

// module.exports = [
//   {
//     key:'candidateid',
//     type:'text',
//     displayName:'ת.ז'
//   },
//   {
//     key: 'pnumber',
//     type: 'number',
//     displayName:'מספר אישי'
//   },
//   {
//     key:'gender',
//     type:'text',
//     displayName:'מין'
//   },
//   {
//     key:'firstname',
//     type:'text',
//     displayName:'שם פרטי'
//   },
//   {
//     key:'lastname',
//     type:'text',
//     displayName:'שם משפחה'
//   },
//   {
//     key:'subjectcode',
//     type:'number',
//     displayName:'קוד שלב'
//   },
//   {
//     key:'subjecttext',
//     type:'text',
//     displayName:'שם שלב'
//   },
//   {
//     key:'eventdatetime',
//     type:'datetime-local',
//     isDateTime:true,
//     displayName:'תאריך ושעה'
//   },
//   {
//     key:'candidatephone',
//     type:'number',
//     displayName:'טלפון'
//   },
//   {
//     key:'dapar',
//     type:'text',
//     displayName:'דפ"ר'
//   },
//   {
//     key:'kaba',
//     type:'text',
//     displayName:'קב"א'
//   },
//   {
//     key:'zadak',
//     type:'text',
//     displayName:'צד"כ'
//   },
//   {
//     key:'school',
//     type:'text',
//     displayName:'בית ספר'
//   },
//   {
//     key:'school_desc',
//     type:'text',
//     displayName:'תיאור ביה"ס'
//   },
//   {
//     key:'birthdate',
//     type:'date',
//     displayName:'תאריך לידה'
//   },
//   {
//     key:'city',
//     type:'text',
//     displayName:'עיר'
//   },
//   {
//     key:'profile',
//     type:'text',
//     displayName:'פרופיל'
//   },
// ]

const inputsInfo = {
  jsonFile: {
    events: [
      {
        key:'candidateid',
        type:'text',
        displayName:'ת.ז',
        value: '',
      },
      {
        key: 'pnumber',
        type: 'number',
        displayName:'מספר אישי',
        value: '',
      },
      {
        key:'gender',
        type:'text',
        displayName:'מין',
        value: '',
      },
      {
        key:'firstname',
        type:'text',
        displayName:'שם פרטי',
        value: '',
      },
      {
        key:'lastname',
        type:'text',
        displayName:'שם משפחה',
        value: '',
      },
      {
        key:'subjectcode',
        type:'number',
        displayName:'קוד שלב',
        value: '',
      },
      {
        key:'subjecttext',
        type:'text',
        displayName:'שם שלב',
        value: '',
      },
      {
        key:'eventdatetime',
        type:'datetime-local',
        isDateTime:true,
        displayName:'תאריך ושעה',
        value: '',
      },
      {
        key:'candidatephone',
        type:'number',
        displayName:'טלפון',
        value: '',
      },
      {
        key:'dapar',
        type:'text',
        displayName:'דפ"ר',
        value: '',
      },
      {
        key:'kaba',
        type:'text',
        displayName:'קב"א',
        value: '',
      },
      {
        key:'zadak',
        type:'text',
        displayName:'צד"כ',
        value: '',
      },
      {
        key:'school',
        type:'text',
        displayName:'בית ספר',
        value: '',
      },
      {
        key:'school_desc',
        type:'text',
        displayName:'תיאור ביה"ס',
        value: '',
      },
      {
        key:'birthdate',
        type:'date',
        displayName:'תאריך לידה',
        value: '',
      },
      {
        key:'city',
        type:'text',
        displayName:'עיר',
        value: '',
      },
      {
        key:'profile',
        type:'text',
        displayName:'פרופיל',
        value: '',
      },
    ],
},
setValueByKey: (key, value) => {
  inputsInfo.jsonFile.events = inputsInfo.jsonFile.events.map( obj => { if(obj.key === key) obj.value = value; return obj} );
}
}

module.exports = inputsInfo;