fn remove_smallest(numbers: &[u32]) -> Vec<u32> {
    if numbers.is_empty() {
        return vec![];
    }

    let min = *numbers.iter().min().unwrap();
    let mut result = Vec::with_capacity(numbers.len() - 1);

    let mut removed = false;
    for &num in numbers {
        if !removed && num == min {
            removed = true;
            continue;
        }
        result.push(num);
    }

    result
}
