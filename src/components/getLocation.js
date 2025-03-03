export const getLocation = () => {
    return new Promise((resolve, reject) => {
        if (!("geolocation" in navigator)) {
            reject(new Error("Geolocation is not supported by your browser."));
            return;
        }

        navigator.geolocation.getCurrentPosition(
            (position) => {
                const latitude = position.coords.latitude;
                const longitude = position.coords.longitude;
                resolve({ latitude, longitude }); // Resolve the Promise with the location data
            },
            (error) => {
                reject(new Error(error.message)); // Reject in case of an error
            }
        );
    });
};
