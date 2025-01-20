const timeString = () => {
  let now = new Date();
  let time = [ now.getHours(), now.getMinutes(), now.getSeconds() ];

  let suffix = ( time[0] < 12 ) ? "AM" : "PM";
  time[0] = ( time[0] < 12 ) ? time[0] : time[0] - 12;
  time[0] = time[0] || 12;

  for ( var i = 1; i < 3; i++ ) {
    if ( time[i] < 10 ) {
      time[i] = "0" + time[i];
    }

  }

  return time.join(":") +  " " + suffix;
}
module.exports = timeString; 