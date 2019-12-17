/* eslint-disable global-require */
export const imageSelect = (badgeId, isInProgress) => {
  if (badgeId === null) {
    return require('../../assets/images/badges/inProgress/BeachHero.png');
  }

  const inProgressBadgeTypes = {
    1: require('../../assets/images/badges/inProgress/BeachHero.png'),
    2: require('../../assets/images/badges/inProgress/CurrentSurfer.png'),
    3: require('../../assets/images/badges/inProgress/IntertidalEcologist.png'),
    4: require('../../assets/images/badges/inProgress/GlobalScientist.png'),
    5: require('../../assets/images/badges/inProgress/OceanAdvocate.png'),
    6: require('../../assets/images/badges/inProgress/PlasticFreePioneer.png'),
    7: require('../../assets/images/badges/inProgress/SpeciesScholar.png')
  };

  const badgeTypes = {
    1: require('../../assets/images/badges/notStarted/BeachHero_greyscale.png'),
    2: require('../../assets/images/badges/notStarted/CurrentSurfer_greyscale.png'),
    3: require('../../assets/images/badges/notStarted/IntertidalEcologist_greyscale.png'),
    4: require('../../assets/images/badges/notStarted/GlobalScientist_greyscale.png'),
    5: require('../../assets/images/badges/notStarted/OceanAdvocate_greyscale.png'),
    6: require('../../assets/images/badges/notStarted/PlasticFreePioneer_greyscale.png'),
    7: require('../../assets/images/badges/notStarted/SpeciesScholar_greyscale.png')
  };

  return isInProgress ? inProgressBadgeTypes[badgeId] : badgeTypes[badgeId];
};
