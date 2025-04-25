fn main() {
    println!("{}",get_grade(100, 100, 100));
    println!("{}",get_grade(82, 85, 87));   
    println!("{}",get_grade(84, 79, 85));
    println!("{}",get_grade(89, 89, 90));
}

fn get_grade(s1: u16, s2: u16, s3: u16) -> char {
    match (s1 + s2 + s3) / 3 {
        90..=100 => 'A',
        80..=89 => 'B',
        70..=79 => 'C',
        60..=69 => 'D',
        0..=59 => 'F',
        _=> unreachable!() // out of condition
    }
}
