const RestaurantCardSetup = () => {
    function setDetails() {
        const restaurantName = restaurant?.name
        const photoRef = restaurant?.photos[0]?.photo_reference
        const restaurantRating = restaurant?.rating
        const totalUserReviews = restaurant?.user_ratings_total
        const priceLevel = restaurant?.price_level
        let priceRating
        let ratingDescription

        switch (priceLevel) {
            case 1:
                priceRating = `$5-$10 Per Person`
                break
            case 2:
                priceRating = `$11-$20 Per Person`
                break
            case 3:
                priceRating = `$21-$30 Per Person`
                break
            case 4:
                priceRating = `$31+ Per Person`
                break
            default:
                priceRating = 'Not Available'
        }

        switch (Math.round(restaurantRating)) {
            case 1:
                ratingDescription = `Very Bad`
                break
            case 2:
                ratingDescription = `Bad`
                break
            case 3:
                ratingDescription = `Average`
                break
            case 4:
                ratingDescription = `Good`
                break
            default:
                ratingDescription = 'Excellent'
        }
    }
    return (
        setDetails
    )
}

export default RestaurantCardSetup