export const parseFeatures = (data) => {
  const features = [...data.features];
  features.sort((a, b) => b.properties.time - b - a.properties.time);
  return features;
};
