fn main() {
    println!("{}", switch_it_up(1));
    println!("{}", switch_it_up(6));
}

fn switch_it_up(n: usize) -> &'static str {
    match n {
        1=>"one",
        2=>"two",
        3=>"three",
        4=>"four",
        5=>"five",
        6=>"six",
        7=>"seven",
        8=>"eight",
        9=>"nine",
        0=>"zero",
        _=>"",
    }
}
