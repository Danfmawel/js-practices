const countVowels = (word) => {
    const vowels = ['a', 'e', 'i', 'o', 'u', 'а', 'е', 'ё', 'и', 'о', 'у', 'ы', 'э', 'ю', 'я'];
    
    const letters = word.toLowerCase().split('');
    
    return letters.filter(letter => vowels.includes(letter)).length;
};

const word = 'JavaScript';
const vowelCount = countVowels(word);
console.log(`Количество гласных в слове "${word}":`, vowelCount);