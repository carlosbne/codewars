//https://www.codewars.com/kata/5a07e5b7ffe75fd049000051

function sorter(textbooks) {
    return [...textbooks].sort((a, b) =>{
        a = a.toLowerCase();
        b = b.toLowerCase();
        return (a > b) - (a < b);
    });
}

