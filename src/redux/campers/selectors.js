export const selectCards = (state) => state.campers.campers;

export const selectIsLoading = (state) => state.campers.isLoading;

export const selectEquipmentFilter = (state) => state.campers.filters.equipment;

export const selectVehicleTypeFilter = (state) =>
  state.campers.filters.vehicleType;

export const selectError = (state) => state.campers.error;
