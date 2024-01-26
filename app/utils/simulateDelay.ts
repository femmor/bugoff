// Function to simulate a delay
export function simulateDelay(delay: number) {
  return new Promise((res) => setTimeout(res, delay));
}
