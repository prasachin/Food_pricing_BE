const calculatePrice = (baseDistance, kmPrice, fixPrice, totalDistance) => {
  
  const basePrice = fixPrice + (totalDistance - baseDistance) * kmPrice;

  return basePrice;
};

module.exports = calculatePrice;
