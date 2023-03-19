export function getDistanceBetweenPoints(location1, location2) {
  const R = 6371e3; // metres
  const lat1 = (location1.latitude * Math.PI) / 180; // φ, λ in radians
  const lat2 = (location2.latitude * Math.PI) / 180;
  const deltaLat = ((location2.latitude - location1.latitude) * Math.PI) / 180;
  const deltaLng = ((location2.longitude - location1.longitude) * Math.PI) / 180;

  const a =
    Math.sin(deltaLat / 2) * Math.sin(deltaLat / 2) +
    Math.cos(lat1) *
      Math.cos(lat2) *
      Math.sin(deltaLng / 2) *
      Math.sin(deltaLng / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  const d = R * c; // in meters
  return d;
}

export function getTheNearestLocation(locations, myLocation) {
  let nearestLocation = null;
  let minDistance = Infinity;
  locations.forEach((location) => {
    const distance = getDistanceBetweenPoints(location.location, myLocation);
    if (distance < minDistance) {
      minDistance = distance;
      nearestLocation = location.name;
    }
  });
  return nearestLocation;
}
