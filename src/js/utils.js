/**
 * Takes time in minutes and returns in Hours and minutes
 * @param {number} mins 
 */

export const formatTime = mins => {
  const hours = mins / 60;
  const rhours = Math.floor(hours);
  const minutes = (hours - rhours) * 60;
  const rminutes = Math.round(minutes);
  return `${rhours}h ${rminutes}min`;
};



export const cleanURL = url => {
  return url.replace(/\/$/, "");
}