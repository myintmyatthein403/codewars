fn rental_car_cost(d: u32) -> u32 {
    let base_cost = d * 40;
    if d >= 7 {
        base_cost - 50
    } else if d >= 3 {
        base_cost - 20
    } else {
        base_cost
    }
}
