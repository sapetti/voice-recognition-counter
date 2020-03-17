var recognition = new webkitSpeechRecognition()
recognition.continuous = true
recognition.interimResults = true
//recognition.lang = 'en-US'
recognition.lang = 'es-SP'
recognition.start()
let count = 0
const OPTIONS = [
  'pytam',
  'peyton',
  'titan',
  'clayton',
  'biking'
]

recognition.onresult = function(event) {
  for (var i = event.resultIndex; i < event.results.length; ++i) {
    if (event.results[i].isFinal) {
      if (event.results[i][0].transcript.trim().toLowerCase() == 'hola') {
        console.log('python', count++)  
      }
      console.info(`You said : ${event.results[i][0].transcript}`)
    }
  }
}
