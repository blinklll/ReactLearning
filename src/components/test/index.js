let count = 1

function handleClickAsync() {
    setTimeout(function delay() {
     console.log(count);
    }, 5000);
}

count = 3
handleClickAsync();