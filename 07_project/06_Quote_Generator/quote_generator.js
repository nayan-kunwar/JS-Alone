const quotes = [
    "The only limit to our realization of tomorrow will be our doubts of today. - Franklin D. Roosevelt",
    "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
    "Do not wait to strike till the iron is hot, but make it hot by striking. - William Butler Yeats",
    "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
    "Believe you can and you're halfway there. - Theodore Roosevelt",
    "Don't watch the clock; do what it does. Keep going. - Sam Levenson",
    "The best way to predict the future is to create it. - Peter Drucker",
    "Your time is limited, don't waste it living someone else's life. - Steve Jobs",
    "Success usually comes to those who are too busy to be looking for it. - Henry David Thoreau",
    "The only way to do great work is to love what you do. - Steve Jobs",
    "The future belongs to those who prepare for it today. - Malcolm X",
    "It always seems impossible until it's done. - Nelson Mandela",
    "Your work is going to fill a large part of your life, and the only way to be truly satisfied is to do what you believe is great work. - Steve Jobs",
    "The only person you are destined to become is the person you decide to be. - Ralph Waldo Emerson",
    "It's not whether you get knocked down, it's whether you get up. - Vince Lombardi",
    "The only place where success comes before work is in the dictionary. - Vidal Sassoon",
    "Don't be pushed around by the fears in your mind. Be led by the dreams in your heart. - Roy T. Bennett",
    "The road to success and the road to failure are almost exactly the same. - Colin R. Davis",
    "The only limit to our realization of tomorrow will be our doubts of today. - Franklin D. Roosevelt",
    "The best way to predict the future is to create it. - Peter Drucker",
    "The best way to find yourself is to lose yourself in the service of others. - Mahatma Gandhi",
    "In a gentle way, you can shake the world. - Mahatma Gandhi",
    "You must be the change you wish to see in the world. - Mahatma Gandhi",
    "Freedom is not worth having if it does not include the freedom to make mistakes. - Mahatma Gandhi",
    "Unity in diversity is India's strength. There is simplicity in every Indian. There is unity in every corner of India. This is our strength. - Narendra Modi",
    "The power to question is the basis of all human progress. - Indira Gandhi",
    "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful. - Albert Schweitzer (adopted by Dr. APJ Abdul Kalam)",
    "Satisfaction lies in the effort, not in the attainment. Full effort is full victory. - Mahatma Gandhi",
    "The future depends on what you do today. - Mahatma Gandhi",
    "A dream is not that which you see while sleeping, it is something that does not let you sleep. - Dr. APJ Abdul Kalam",
];
function generateQuote(){
    const quoteElement  = document.getElementById('quote');
    const randomIndex  = Math.floor(Math.random() * quotes.length); //If array length is 100. This line will generate number form 0 to 99.
    quoteElement .textContent = quotes[randomIndex ];
}