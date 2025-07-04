# Konstantin Lapanik 
*📍 Minsk, Belarus, 14 years old · 🎓 9th Grade, Gymnasium 16*

---

## **Contact Info**  

- **Email**: lapanikkonstantin@gmail.com
- **Telegram**: @ostkki
- **Discord**: Kostya(@KostikLapanik)
- **LinkedIn/GitHub**: [klapanik](https://github.com/klapanik)  
- **Location**: [Minsk](https://ru.wikipedia.org/wiki/%D0%9C%D0%B8%D0%BD%D1%81%D0%BA)

---

## **🎯 Mission Statement**  

> [!TIP]
> *"Aspiring to become a **React developer at MAANG** and eventually launch my own tech business. At 14, I’m already building real-world projects, leveraging my strong communication skills and passion for problem-solving."*  

### **🌟 Strengths**  
- **🗣️ Communication**: Excel at explaining tech concepts to peers and collaborating in teams.  
- **🚀 Fast Learner**: Mastered React basics in 2 months while balancing school.  
- **💡 Entrepreneurial Mindset**: Constantly exploring tech trends and business ideas.  

---

## **🛠️ Technical Skills**  

| **Category**   | **Technologies**                                                    |
| -------------- | ------------------------------------------------------------------- |
| **🌐 Core**    | HTML5, CSS3, JS, TS                                                 |
| **⚛️ React**   | React Hooks, React Router, Context API, and i continue learning now |
| **🎨 Styling** | CSS Modules, SASS, Tailwind CSS                                     |
| **📊 Backend** | Firebase and I want to learn Node JS                                |

---

## **💻 Code Example**  
**Codewars Challenge**: [Collatz](https://www.codewars.com/kata/57acc8c3e298a7ae4e0007e3/train/javascript)  

``` javascript
function longestCollatz(inputArray) {
        let collatzResult = []

        for (let i in inputArray) {
            let n = inputArray[i];
            let collatzNumber = 0;

            while (n !== 1) {
                if (n % 2 === 0) {
                    n = n / 2
                } else {
                    n = 3 * n + 1
                }

                collatzNumber++
            }

            let elem = inputArray[i];

            let collatzObject = {
                value: elem,
                collatzNumber,
            }

            collatzResult.unshift(collatzObject);
        }

        let maxCollatzObject = collatzResult.reduce((accamulator, current) => accamulator.collatzNumber > current.collatzNumber ? accamulator : current);
        let maxCollatzValue = maxCollatzObject.value;

        return maxCollatzValue;
    }
```

---

## **💼 Work Experience**

> [!IMPORTANT]
> **🚧 No formal employment yet, but...**
>
> **Upcoming Commercial Project** (React Developer)
> - Selected to build a web site for a local medicine business using **React TS + Tailwind**.
> - Responsibilities: UI development, client feedback integration, and deadline management.

---

## **🎓 Education**

- **First year** - scratch. Little blocks of code.

- **Second-third years** - Python: automation scripts, and small games, telegram bots etc.

- **4th-5th years** - Web Dev: Progressed from HTML/CSS to dynamic React apps.

---

## **🌎 English (B2)**

📅 *6* Years of Study:

- 📖 Technical **Reading**: Regularly digest *React* docs and MDN articles.
- 🎧 **Listening**: Watch *MAANG* conference talks.

> [!IMPORTANT]
> 🚀 Goal for 2024: Achieve C1 via IELTS/TOEFL practice.

---

**Thanks for reading!**
