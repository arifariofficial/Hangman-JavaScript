function isPalindrome(userStr) {
    for (let i = 0; i < userStr.length / 2; i++) {
        if (userStr.charAt(i) !== userStr.charAt(userStr.length - 1 - i)) {
            return false;
        }
    }
    return true;
}

console.log(isPalindrome("racecar"));
console.log(isPalindrome("javascript"));