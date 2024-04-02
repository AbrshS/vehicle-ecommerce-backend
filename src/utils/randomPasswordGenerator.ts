interface RandomPasswordGenerator {
  generateRandomDecimalPassword: () => string;
}

const randomPasswordGenerator: RandomPasswordGenerator = {
  generateRandomDecimalPassword: () => {
    const min = 1000; // 4-digit minimum
    const max = 9999; // 4-digit maximum
    const randomPassword = Math.floor(Math.random() * (max - min + 1)) + min;
    return randomPassword.toString();
  }
};

export default randomPasswordGenerator;
