fn number(bus_stops:&[(i32,i32)]) -> i32 {
    bus_stops.iter()
        .map(|(on, off)| on - off)
        .sum()
}

fn another_number(bus_stops: &[(i32, i32)]) -> i32 {
    bus_stops.iter().fold(0,|acc,x| acc + x.0 - x.1)
}
