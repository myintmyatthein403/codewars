function formatDuration(seconds) {
  if (seconds === 0) return 'now';
  let time = {
    year: 31536000,
    day: 86400,
    hour: 3600,
    minute: 60,
    second: 1
  }
  let result = [];
  for (let key in time) {
    if (seconds >= time[key]) {
      let value = Math.floor(seconds / time[key]);
      result.push(value + ' ' + (value > 1 ? key + 's' : key));
      seconds = seconds % time[key];
    }
  }
  return result.length > 1 ? result.slice(0, -1).join(', ') + ' and ' + result.slice(-1) : result[0];
}
