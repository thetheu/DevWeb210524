class TravelData {
    constructor(distance, duration) {
        this.distance = distance;
        this.duration = duration;
    }

    calculateAverageSpeed() {
        const hours = this.duration / 60;
        return this.distance / hours;
    }
}