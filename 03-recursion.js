function countdown(i) {
    console.log(i);
    if (i <= 0) return;
    countdown(i - 1);
}

countdown(5);

////////////////

function greet2(name) {
    console.log("how are you, " + name + "?");
}

function bye() {
    console.log("ok bye!");
}

function greet(name) {
    console.log("hello, " + name + "!");
    greet2(name);
    console.log("getting ready to say bye...");
    bye();
}

greet("Ryan");