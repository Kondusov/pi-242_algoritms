function checkSpam(message) {
    let spamWords = ['купить', 'бесплатно', 'срочно', 'выиграй', 'приз'];
    let lowerMessage = message.toLowerCase();
    
    if (spamWords.some(word => lowerMessage.includes(word))) {
        return "Сообщение заблокировано";
    }
    
    return message;
}

let testMessages = [
    "Привет! Как дела?",
    "Срочно Заберите товар бесплатно",
    "Погода сегодня хорошая",
    "Забери приз по ссылке"
];

testMessages.forEach(msg => {
    const result = checkSpam(msg);
    console.log(result);
});