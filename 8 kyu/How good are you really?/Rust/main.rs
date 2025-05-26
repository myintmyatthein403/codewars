fn main() {
    let class_scores = vec![70, 80, 90];
    let your_score = 85;
    println!("{}", better_than_average(&class_scores, your_score)); // true
}

fn better_than_average(class_points: &[u16], your_points: u16) -> bool {
    let sum: u16 = class_points.iter().sum();
    let count = class_points.len() as u16;
    let average = sum as f32/ count as f32;
    your_points as f32 > average
}
