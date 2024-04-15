import express from 'express'

const app = express();

app.set('view enginge', 'ejs')


app.use((req, res, next) => {
    req.caesar = (str, shift) => {
        return str.split('').map(char => {
            const code = char.charCodeAt(0);
            if ((code >= 65 && code <= 90) || (code >= 97 && code <= 122)) {
                const offset = code >= 97 ? 97 : 65;
                return String.fromCharCode(((code - offset + shift) % 26) + offset);
            }
            return char;
        }).join('');
    };

    req.reverse = (str) => {
        return str.split('').reverse().join('');
    };

    req.shorten = (str, length) => {
        return str.length > length ? str.slice(0, length) + '...' : str;
    };

    next();
});

app.get('/', (req, res) => {
    res.render('index', {
        caesar: req.caesar('abc', 1),
        reverse: req.reverse('abc'),
        shorten: req.shorten('abcde', 3)
    });
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
